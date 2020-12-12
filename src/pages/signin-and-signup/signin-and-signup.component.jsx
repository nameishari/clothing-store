import React from 'react'
import './signin-and-signup.styles.css'
import SignIn from '../../componets/sign-in/sign-in.componet'
import SignUp from '../../componets/signup/sign-up.component'

const SignInAndSignUpPage = () => (
    <div className="sign-in-and-sign-up">
        <SignIn/>
        <SignUp/>
    </div>
)

export default SignInAndSignUpPage