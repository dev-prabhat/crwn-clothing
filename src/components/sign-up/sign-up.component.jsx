import React from 'react'

import FromInput from '../form-input/form-input.component'
import CustomButton  from '../custom-button/custom-button.component'

import { auth , createUserProfileDocument } from '../../firebase/firebase.utils'

import './sign-up.style.scss'


class SignUp extends React.Component{
    constructor(){
        super()

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName,email,password,confirmPassword} = this.state;

        if(password !==  confirmPassword){
            alert("Password dont't match")
            return;
        }

        try{
          const { user } = await auth.createUserWithEmailAndPassword(email , password)
        
          createUserProfileDocument(user ,{displayName})

          this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
          })
        }
        catch(error){
            console.error(error)
        }
    }


    handleChange = event => {
        const { name , value } = event.target;

        this.setState({[name]: value})
    }

    render(){
        const {displayName,email,password,confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FromInput
                     type='text'
                     name='displayName'
                     value={displayName}
                     onChange={this.handleChange}
                     label='Display Name'
                     required
                    />
                    <FromInput
                     type='email'
                     name='email'
                     value={email}
                     onChange={this.handleChange}
                     label='Email'
                     required
                    />
                    <FromInput
                     type='password'
                     name='password'
                     value={password}
                     onChange={this.handleChange}
                     label='Password'
                     required
                    />
                    <FromInput
                     type='password'
                     name='confirmPassword'
                     value={confirmPassword}
                     onChange={this.handleChange}
                     label='ConfirmPassword'
                     required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }


}

export default SignUp;