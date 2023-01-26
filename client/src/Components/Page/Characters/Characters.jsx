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
                    // Return an element
                    return (
                        <p key={index}>
                            {character.name}, {character.age}
                        </p>
                    )
                })}
            </div>
        </div>
    )
};

export default Characters;