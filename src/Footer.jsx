import Logo from "./assets/Logo.png"
import Maps from "./assets/map.png"
import Facebook from "./assets/facebook.png"
import Instagram from "./assets/instagram.png"
import Whatsapp from "./assets/whatsapp.png"
import Email from "./assets/email.png"

function Footer(){

    return (
        <footer className="footer">
            <div className="top-conatiner">
                <div className="web-bio">
                    <div className="Brand-name">
                        <img className="logo" src={Logo} alt="Logo" /> 
                        <div className="brand">
                            <h1>SiddhiVinayak</h1>
                            <h4>Taxi Service and Rentals</h4>
                        </div>
                    </div>
                    <p>Discover Goa like never before with our expertly curated tours,
                        experienced chauffeurs, and adventurous water activities, all 
                        designed to give you an unforgettable Goan experience. Whether
                        you're here for leisure or adventure, Siddhi Vinayak is here to
                        meet all your travel needs.</p>

                </div>
                <div className="sub-container1">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">contact</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms And Conditions</a></li>
                        <li><a href="#">sign out</a></li>
                     </ul>

                </div>
                <div className="social">
                    <h2>Follow us</h2>
                    <ul>
                        <li><a href="#"><img className="icons" src={Instagram} alt="Instagram-Icon" />: @Siddhi_Vinayak </a></li>
                        <li><a href="#"><img className="icons" src={Facebook} alt="Facebook-Icon" />: SiddhiVinayak</a></li>
                        <li><a href="#"><img className="icons" src={Whatsapp} alt="Whatsapp-Icon" /> : 91*****616 </a></li>
                        <li><a href="#"><img className="icons" src={Email} alt="Email-Icon" />: SiddhiVinayakRentals@gmail.com </a></li>
                    </ul>
                </div>
                <div className="Map">
                    <img src={Maps} alt="Map" />
                    <p>SiddhiVinayak Taxi Service & rentals, Near Abalone Resort, Ghorbhat waddo, Arpora, Goa 403516</p>
                </div>
            </div>

            <p className="copyright">&copy; {new Date().getFullYear() } SiddhiVinayak Taxi Service And Rentals</p>
            <p className="copyright">Developer: Snehal Mashelkar</p>
        </footer>
       
    );

}

export default Footer
