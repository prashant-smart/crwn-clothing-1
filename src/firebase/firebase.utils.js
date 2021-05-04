import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBJMZDZWkQBUXRCCAP4rYGyJC86GdEU31w",
    authDomain: "crwn-db-132dd.firebaseapp.com",
    projectId: "crwn-db-132dd",
    storageBucket: "crwn-db-132dd.appspot.com",
    messagingSenderId: "711787431731",
    appId: "1:711787431731:web:d511ba65fe1650f7832046",
    measurementId: "G-C5XXV10L2Q"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    console.log(displayName);
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
