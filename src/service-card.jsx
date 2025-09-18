function ServiceCard({ image, title, description}) {
    return (
      <div className="service-card">
        <img src={image} alt={title} className="service-image" />
        <div className="service-content">
          <h3 className="service-title">{title}</h3>
          <p className="service-description">{description}</p>
        </div>
      </div>
    );
  }
  
  export default ServiceCard;