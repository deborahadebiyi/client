import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./navbar.css"




export default function Navbar(){
    return(
        <div className="navbar">
            <ul>
                <li>
                    <button><Link to="/">HOME</Link></button>
                </li>
                <li>
                    <button><Link to="/auth/register">REGISTER</Link></button>
                </li>
                <li>
                    <button><Link to="/auth/login">LOGIN</Link></button>
                </li>
                <li>
                    <button><Link to="/auth/logout">LOGOUT</Link></button>
                </li>
                <li>
                    <button><Link to="/profile">PROFILE</Link></button>
                </li>
            </ul>
        </div>
    )
}

