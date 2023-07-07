import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pokimon = () => {
    const [pokimon, setPokimon] = useState([]);
    const [selectedPokimon, setSelectedPokimon] = useState({}); // State for selected Pokémon

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0')
            .then(response => {setPokimon(response.data.results);})
            .catch(error => console.log(error));
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        // Generate a random index based on the available Pokémon
        const randomIndex = Math.floor(Math.random() * pokimon.length);
        // Set the selected Pokémon based on the random index
        setSelectedPokimon(pokimon[randomIndex]);
    };

    return (
        <div>
            <button onClick={handleClick}>Press</button> {/* Changed input type to button */}
            <div>
                {selectedPokimon && <p>{selectedPokimon.name}</p>} {/* Render selected Pokémon if available */}
            </div>
        </div>
    );
}

export default Pokimon;
