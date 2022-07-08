import React, { useState, useEffect } from 'react';
import './breed-image.css';

function BreedImage () {
    const [breed, selectedBreed] = useState('');
    const [url, setUrl] = useState('');

    useEffect(() => {
        fetchImage(); dogPicker();
    }, [breed]);

    const dogPicker = (breed) => {selectedBreed(breed)};

    const fetchImage = async () => {
        const res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        const data = await res.json();
        setUrl(data.message);
    };

    return (

      <div className="image-container">
        <img className="image-card" src={url} alt="doggopicture" />
      </div>
    
    );
  
}

export default BreedImage;