import Header from "./header.jsx";
import Footer from "./Footer.jsx";
import './login.css'
import ServiceCard from "./service-card.jsx";
import airport from "./assets/airport.jpg";
import rent from "./assets/car-rent.webp";
import watersport from "./assets/watersport.webp";
import taxi from "./assets/taxiservice.jpg";

const services = [
    {
      image: taxi,
      title: "Taxi Service",
      description: "Our premium roundtrip services will pamper you with an absolutely comfortable drive...",
      
    },
    {
      image: airport,
      title: "Airport Drops and Pickups",
      description: "Our network of over 15 lakh one way routes ensures that there is no corner of the country...",
      
    },
    {
      image: rent,
      title: "Rentals",
      description: "Book our flexible hourly rentals and get chauffeured within the city for your business...",
    },
    {
      image: watersport,
      title: "Watersports",
      description: "Book our flexible hourly rentals and get chauffeured within the city for your business...",
    },
    // Add more service items here
  ];

function service() {

  return (
    <>
      <Header/>
      <div className="service-container">
        <h2>OUR SERVICES</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
              icons={service.icons}
            />
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
  
}

export default service
