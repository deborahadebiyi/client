import React from 'react'
import "./login.css"

export default function Login() {
    return (
        <div className="login">
            <div className="logginWrapper">
                <div className="loginLeft">
                <h3 className="loginLogo">Log in to your retro account</h3>
                <span className="loginDesc">Connect with team mates and get retrospective!</span>
                </div>
                <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Username" className="loginInput"/>
                    <input placeholder="Password" className="loginInput"/>
                    <button className="loginButton">Login</button>
                    <button className="loginRegisterBtn">Create Account</button>
                </div>
                </div>
            </div>
        </div> 
    )
}
