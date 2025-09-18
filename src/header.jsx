import { Link } from "react-router-dom";
import Logo from "./assets/Logo.png"
import  Profile  from "./assets/profile.jpg";
import { Link as ScrollLink } from "react-scroll";


function Header(){
   

    return (
        <header className="header">
            <div className="Brand-name">
                <img className="logo" src={Logo} alt="Logo" /> 
                <div className="brand">
                    <h1>SiddhiVinayak</h1>
                    <h4>Taxi Service and Rentals</h4>
                </div>
            </div>
            <nav className="nav-bar">
                <p><Link to="/">Home</Link></p>
                <p><Link to="/service">Service</Link></p>
                <ScrollLink 
                    to="Tours-container" 
                    smooth={true} 
                    duration={800}   // 👈 control speed in ms
                >
                    <p>Tours</p>
                </ScrollLink>
                <p>Vehicles</p>
            </nav>
            <div className="Profile-container">
                <Link to="/login"><img className="profile" src={Profile} alt="ProfilePic" /></Link>
                <label htmlFor="profile"><Link to="/login">Login</Link></label >
            </div>
        </header>
    );

}

export default Header
