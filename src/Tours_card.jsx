function TourCard({ image, title, description}) {
    return (
      <div className="Tours-card">
        <img src={image} alt={title} className="Tours-image" />
        <div className="Tours-content">
          <h3 className="Tours-title">{title}</h3>
          <p className="Tours-description">{description}</p>
        </div>
      </div>
    );
  }
  
  export default TourCard;