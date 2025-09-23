import React from 'react';
import ReviewCard from './review_cards.jsx';
import  Profile  from "./assets/profile.jpg";
// Sample images (replace with your own image URLs)
const images = [
    { src: Profile, alt: 'Taxi 1' , review: 'Great service and comfortable ride!' , Customer: 'snehal' },
    { src: Profile, alt: 'Car Rental' , review: 'Great service and comfortable ride!' , Customer: 'snehal'},
    { src: Profile, alt: 'City Car' , review: 'Great service and comfortable ride!', Customer: 'snehal' },
    { src: Profile, alt: 'Luxury Car' , review: 'Great service and comfortable ride!', Customer: 'snehal' },
    { src: Profile, alt: 'Travel Van' , review: 'Great service and comfortable ride!', Customer: 'snehal' },
];



const PhotoGallery = () => {
    

    return (
        <div >
            <div className='Review-section'>
                
                <div className="Review-grid" >
                {images.map((rev, index) => (
                    <ReviewCard
                    key={index}
                    image={rev.src}
                    title={rev.Customer}
                    review={rev.review}
                    />
                ))}
                </div>
            </div>
           
        </div>
    );
};

export default PhotoGallery;