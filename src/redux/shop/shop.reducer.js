// import SHOP_DATA from './shop.data.js'; 
import ShopActionTypes from './shop.types';
const INITIAL_STATE={
    collection:null
}

const shopDataRecducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case ShopActionTypes.UPDATE_COLLECTIONS:
            console.log(action.payload);
            return {
              ...state,
              collection: action.payload,
            };
        default:
            return state;
    }
}

export default shopDataRecducer;