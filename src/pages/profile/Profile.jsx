import "./profile.css"
import Navbar from "../../components/Navbar"

export default function Profile(){
    return(
       <div className="profile">
            <Navbar/>
            <div className="profileWrapper">
                <h2 className="profileUsername">Hi, placeholder</h2>
                <div className="profileAvatar"></div>
            </div>
            <div className="rightNavbar">
                <button className="homeBtn"></button>
                <button className="logoutBtn"></button>
                <button className="retroBtn"></button>
            </div>
       </div> 
    )
}