import React,{ useState }from 'react';
import CustomButton from '../custom-button/custom-button.component';
import {auth,createUserProfileDocument} from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import './sign-up.styles.scss'

const SignUp=()=> {


    const[userDetails,setUserDetails] =useState( 
        {
            displayName:"",
            email:"",
            password:"",
            confirmPassword:""
        }
        )
    
       
    
    const{displayName,email,password,confirmPassword}=userDetails;

    const    handleSumbit=async event=>{
        event.preventDefault();

        if(password !== confirmPassword){
            alert("Password not match, Plzz type same password in both feild");
            return;
        }
        
        try{
            const {user}=await auth.createUserWithEmailAndPassword(
                email,
                password
            );
            await createUserProfileDocument(user,{displayName});
            setUserDetails({
                displayName:"",
                email:"",
                password:"",
                confirmPassword:"" 
            });
        }catch(error){
            console.error(error);
            alert(error.message)
        }
        
    }

    const   handlChange=event=>{
        const {name,value}=event.target;

       setUserDetails({...userDetails,[name]:value});
    }

   
        // const{displayName,email,password,confirmPassword}=this.state;
        return(

            <div className='sign-up'>
            <h2 className='title'> I Do Not Have Account</h2>
            <span>Sign Up With Your Email and Password</span>
            <form className='sign-up-form' onSubmit={handleSumbit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handlChange}
                    label='Display Name'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handlChange}
                    label='Email'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handlChange}
                    label='Password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handlChange}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
            </div>
        )
    }

export default SignUp;