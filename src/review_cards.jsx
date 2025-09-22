function ReviewCard({ image, title, review}) {
    return (
      <div className="service-card">
        <img src={image} alt={title} className="Review-image" />
        <div className="service-content">
          <h3 className="service-title">{title}</h3>
          <p className="service-description">{review}</p>
        </div>
      </div>
    );
  }
  
  export default ReviewCard;