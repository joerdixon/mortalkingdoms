import React from 'react';
import api from '../../../utils/api';

function Artifacts() {
    const [characters, setCharacters] = React.useState(null)

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
            <h1>Functional Artifacts</h1>
            <p>{characters}</p>
        </div>
    )
};

export default Artifacts;