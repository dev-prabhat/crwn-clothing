import React  from "react";

import FormInput from "../form-input/form-input.component";
import CustomBotton from '../custom-button/custom-button.component'
import {auth , signInWithGoogle} from '../../firebase/firebase.utils'

import './sign-in.style.scss'

class SignIn extends React.Component{
    constructor(props){
        super(props)

        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit = async event =>{
        event.preventDefault()
          
        const { email , password} = this.state

        try{
          await auth.signInWithEmailAndPassword(email,password)
          this.setState({email:'',password:''})
        }
        catch(error){
          console.log(error)
        }
       
    }

    handleChange = event =>{
        event.preventDefault()
        const {value,name} = event.target

        this.setState({ [name]: value})
    }

    render(){

        const {email,password} = this.state;
        return(
            <div className='sign-in'>
                <h1>I already have an account </h1>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name='email' 
                    handleChange={this.handleChange} 
                    type="email" 
                    value={email} 
                    label='Email'
                    required/>
                   

                    <FormInput 
                    name='password'
                    handleChange={this.handleChange} 
                    type="password" 
                    value={password}
                    label='Password' 
                    required/>
                    
                    <div className='buttons'> 
                    <CustomBotton type='submit'>Sign In</CustomBotton>
                    <CustomBotton type='button' onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomBotton>
                    </div>

                </form>
            </div>
        )
    }
}

export default SignIn;