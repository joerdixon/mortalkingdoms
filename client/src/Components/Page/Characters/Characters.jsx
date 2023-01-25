import React from 'react';
import api from '../../../utils/api';

// The Characters page will contain a list of all characters stored in the database.

// Users will be able to view and sort characters based on a variety of properties.

// When a user clicks on a character, they will be shown an enlarged view and all information about that character.

// This includes any artifacts owned by that character and the faction that character belongs to.

function Characters() {
    // All characters are stored here. (Not quite)
    const [characters, setCharacters] = React.useState(null);

    // Whenever we re-render
    React.useEffect(() => {
        // Hit the api
        async function getCharacters() {
            let data = await api.getAllCharacters();
            // This is only showing the name of the first character
            setCharacters(data[0].name)
        }
        getCharacters();
    }, []);

    return (
        <div>
            <h1>Functional Characters</h1>
            <p>{characters}</p>
        </div>
    )
};

export default Characters;