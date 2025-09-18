
function Card({image,name,type,details}){
   return (
    <div className="card">
        <img className="cars"  src={image} alt="Car Image" />
        <h2 className="name">{name}</h2>
        <p className="type">{type}</p>
        <p className="details">{details}</p>
    </div>
   );

}

export default Card 