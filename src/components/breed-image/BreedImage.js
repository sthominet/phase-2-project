import React, { useState, useEffect } from 'react';
import './breed-image.css';

function BreedImage () {
    const [breed, selectedBreed] = useState('');

    useEffect(() => {
        fetchImage();
        }, []);

    const fetchImage = async () => {
        const res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        const data = await res.json();
        const imageUrl = data.message
        selectedBreed(imageUrl);
        };

    return (
      <div className="image-container">
        <img className="image-card" src={breed} alt="doggopicture" />
      </div>
    );
  
}

export default BreedImage;