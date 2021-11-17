import React from 'react'
import "./register.css"
<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@900&display=swap');
</style>


export default function Register() {
    return (
        <div className="register">
            <div className="registerWrapper">
                <h3 className="registerLogo"> REGISTER</h3>
                <span className="registerDesc">Create an account</span>
                </div>
                <div className="registerRight">
                <div className="registerBox">
                    <input placeholder="Displayname" className="registerInput"/> 
                    <input placeholder="Username" className="registerInput"/>
                    <input placeholder="Password" className="registerInput"/>
                    <button className="registerBtn">Create Account</button>
                </div>
            </div>
        </div> 
    )
}