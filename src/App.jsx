import Header from "./header.jsx";
import Trip from "./Trip.jsx";
import Bio from "./Bio.jsx";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import ServiceCard from "./service-card.jsx";
import ToursCard from "./Tours_card.jsx";
import car1 from "./assets/car1.jpeg";
import car2 from "./assets/car2.webp";
import car3 from "./assets/car3.webp";
import bike from "./assets/bike-rent.webp";
import airport from "./assets/airport.jpg";
import rent from "./assets/car-rent.webp";
import watersport from "./assets/watersport.webp";
import taxi from "./assets/taxiservice.jpg";
import Ntour from "./assets/Northgoatour.png";
import history from "./assets/History_plc.webp";
import Dolphin from "./assets/Dolphin_dive.jpg";
import goatour from "./assets/goa-tour.jpg";
import scuba from "./assets/scuba_diving_Goa.jpg";
import PhotoGallery from "./photo_gallery.jsx";



function App() {

  const cardData = [
    { image: car1, name: "Ertiga",type: "Taxi", details: "Available" },
    { image: car2, name: "Swift",type: "Rent a Cab", details: "Not Available" },
    { image: car3, name: "Glanza",type: "Rent a Cab", details: "Available" },
    { image: bike, name: "Fascino ",type: "Rent a Bike", details: "Available" },
  ];
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

  const tourpackages = [
    {
      image: goatour,
      title: "Popular Spots",
      description: "Our premium roundtrip services will pamper you with an absolutely comfortable drive...",
      
    },
    {
      image: Ntour,
      title: "North Tours",
      description: "Our network of over 15 lakh one way routes ensures that there is no corner of the country...",
      
    },
    {
      image: scuba,
      title: "Scuba Diving",
      description: "Book our flexible hourly rentals and get chauffeured within the city for your business...",
    },
    {
      image: history,
      title: "Historical Visits",
      description: "Book our flexible hourly rentals and get chauffeured within the city for your business...",
    },
    {
      image: Dolphin,
      title: "Dolphin View",
      description: "Book our flexible hourly rentals and get chauffeured within the city for your business...",
    },
    
    

    // Add more service items here
  ];


  return (
    <>
      <Header/>
      <Bio/>
      <h2>TRIP</h2>
      <div className="Trip-form">
        <Trip/>
      </div>
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
    <div className="Tours-container" id="Tours-container" >
        <h2>TOURS</h2>
        <div className="Tours-grid">
        {tourpackages.map((data, index) => (
          <ToursCard
            key={index} 
            image={data.image} 
            title={data.title} 
            description={data.description} 
            />
          ))}
        </div>
    </div>
    
    <div className="card-container">
        <h2>VEHICLES</h2>
        <div className="card-grid">
        {cardData.map((data, index) => (
          <Card 
            key={index} 
            image={data.image} 
            name={data.name} 
            type={data.type}
            details={data.details} 
            />
          ))}
        </div>
    </div>
    <div className="Tours-container" >
        <PhotoGallery/>
    </div>
      <Footer/>
    </>
  );
  
}

export default App
