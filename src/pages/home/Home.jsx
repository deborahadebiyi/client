import "./home.css"

export default function Home(){
    return(
        <div className="home">
            <div className="homeWrapper">
                <div className="homepageTop"></div>
                <h2 className="homeLogo">RETRO BUDDY</h2>
                <span className="homeDesc">Connect with team mates and get retropsective!</span> 
            </div>
            <div className="leftNavbar">
                <button className="loginBtn">LOGIN</button>
                <button className="registerBtn">REGISTER</button>
            </div>
        </div>

    )
}