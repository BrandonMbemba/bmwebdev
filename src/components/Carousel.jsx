import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Carousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
        <div className='image-carousel'>
            <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
            <div className="navigation-icons">
                <FontAwesomeIcon icon={faChevronLeft} onClick={prevImage} />
                <FontAwesomeIcon icon={faChevronRight} onClick={nextImage} />
            </div>
            <div className="pagination-text">{currentImageIndex + 1}/{images.length}</div>
        </div>
    );
};

export default Carousel;