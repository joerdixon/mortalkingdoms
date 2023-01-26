import React from 'react';
import api from '../../../utils/api';

// The Characters page will contain a list of all characters stored in the database.

// Users will be able to view and sort characters based on a variety of properties.

// When a user clicks on a character, they will be shown an enlarged view and all information about that character.

// This includes any artifacts owned by that character and the faction that character belongs to.

function Characters() {
    // All characters are stored here. (Not quite)
    const [characters, setCharacters] = React.useState([]);

    // Whenever we re-render
    React.useEffect(() => {
        async function getCharacters() {
            // Query all characterss from the API
            let data = await api.getAllCharacters();
            // We get back an array so we just need to set the state to whatever we get back.
            setCharacters(data)
        }
        getCharacters();
    }, []);

    return (
        <div>
            <h1>Characters</h1>
            <div>
                {/* For each character stored in state */}
                {characters.map((character, index) => {
                    // Format the player character
                    let pc;
                    character.pc ? pc = "Yes" : pc = "No"

                    let alive;
                    character.alive ? alive = "Yes" : alive = "No"
                    // Return an element
                    return (
                        <div className='border' key={index}>
                            <h1 className='text-2xl'>{character.name}, {character.epitaph}</h1>
                            <p>Profession: {character.profession}</p>
                            <p>Description: {character.desc}</p>
                            <p>Age: {character.age}</p>
                            <p>Height: {character.height}</p>
                            <p>Weight: {character.weight}</p>
                            <p>Player Character: {pc}</p>
                            <p>Alive: {alive}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default Characters;