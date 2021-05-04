import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import {auth,createUserProfileDocument} from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import './sign-up.styles.scss'

class signUp extends React.Component{

    constructor(){
        super();
        this.state={
            displayName:"",
            email:"",
            password:"",
            confirmPassword:""
        }
    }

    handleSumbit=async event=>{
        event.preventDefault();
        const{displayName,email,password,confirmPassword}=this.state;

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
            this.setState({
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

    handlChange=event=>{
        const {name,value}=event.target;

        this.setState({[name]:value});
    }

    render(){
        const{displayName,email,password,confirmPassword}=this.state;
        return(

            <div className='sign-up'>
            <h2 className='title'> I Do Not Have Account</h2>
            <span>Sign Up With Your Email and Password</span>
            <form className='sign-up-form' onSubmit={this.handleSumbit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={this.handlChange}
                    label='Display Name'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={this.handlChange}
                    label='Email'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={this.handlChange}
                    label='Password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={this.handlChange}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
            </div>
        )
    }
}
export default signUp;