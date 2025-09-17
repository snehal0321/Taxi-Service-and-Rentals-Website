import { Link } from "react-router-dom";
import Logo from "./assets/Logo.png"
import  Profile  from "./assets/profile.jpg";
import Login from "./Login.jsx";
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
                <p>Service</p>
                <p>Trips</p>
                <p>Vehicles</p>
            </nav>
            <div className="Profile-container">
                <a href="/login"><img className="profile" src={Profile} alt="ProfilePic" />
                <label htmlFor="profile"><Link to="/login">Login</Link></label ></a>
            </div>
        </header>
    );

}

export default Header
