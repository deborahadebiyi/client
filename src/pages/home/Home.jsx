import "./home.css"
import Navbar from "../../components/Navbar"

export default function Home(){
    return(
        <div className="home">
            <Navbar/>
            <div className="homeWrapper">
                <div className="homepageTop"></div>
                <h2 className="homeLogo">RETRO BUDDY</h2>
                <span className="homeDesc">Connect with team mates and get retropsective!</span> 
            </div>
        </div>

    )
}