
import React, { useState, useEffect } from 'react';
import Select from './select/Select';
import BreedImage from './breed-image/BreedImage';

function Home() {
    
    const [breedsList, setBreedList] = useState('');
    const [selectedBreed, setSelectedBreed] = useState('');
    const error = useState('false');
    
    useEffect(() => {
        fetchAllBreeds();
    }, []);

    const fetchAllBreeds = async () => {
        try {
            const res = await fetch ('https://dog.ceo/api/breeds/list/all');
            const data = await res.json();
            console.log(data.message);
            setBreedList(Object.keys(data.message));
      
        } catch (e) { 
            
            error = true;
            alert('Sorry, can not display the data')
        }
    }
    
    const selectHandler = (breed) => {
           setSelectedBreed = breed
       }

        return (
            <div className="App">
            <h1>Happiness Generator!</h1>
                <Select breedsList={breedsList} onSelect={selectHandler}/>
                <BreedImage breed={selectedBreed}/>
            </div>
        )
    
}

export default Home;