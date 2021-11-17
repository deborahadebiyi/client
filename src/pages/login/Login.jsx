import React from 'react'
import "./login.css"
<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@900&display=swap');
</style>


export default function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <h3 className="loginLogo"> LOGIN</h3>
                <span className="loginDesc">Log into your account</span>
                </div>
                <div className="loginRight">
                <div className="loginBox"> 
                    <input placeholder="Username" className="registerInput"/>
                    <input placeholder="Password" className="registerInput"/>
                    <button className="loginBtn">Create Account</button>
                </div>
            </div>
        </div> 
    )
}

