import React from "react";
import './sign-in-sign-up.css'
import SignIn from "../sign-in/sign-in-component";
import SignUp from "../sign-up/sign-up.component";
const SignInSignUp=()=>{
    return (
        <div className='sign-in-sign-up'>
            <SignIn></SignIn>
            <SignUp></SignUp>
        </div>
    )
}
export default SignInSignUp;