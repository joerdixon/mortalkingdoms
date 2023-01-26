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
            // Query all characters from the API
            let data = await api.getAllCharacters();
            // We get back an array so we just need to set the state to whatever we get back.
            setCharacters(data)
        }
        getCharacters();
    }, []);


    const formatArtifacts = (artifactArray) => {

        // Convert objects array into elements array
        const artifactCards = artifactArray.map((artifact, index) => {
            return (
                <div>{artifact.name}</div>
            )
        })

        // If it's empty, return none.
        if (artifactCards.length === 0) {
            return (<div>None</div>)
        } else {
            return (<div>{artifactCards}</div>)
        }
    }

    return (
        <div>
            <h1>Characters</h1>
            <div>
                {/* For each character stored in state */}
                {characters.map((character, index) => {
                    // Populate any artifacts they have.
                    let artifacts = [];
                    if (character.artifacts[0]) {
                        artifacts = character.artifacts;
                    }
                    // Format the artifacts
                    artifacts = formatArtifacts(artifacts)
                    // Format Player Character
                    let pc;
                    character.pc ? pc = "Yes" : pc = "No"
                    // Formatting alive.
                    let alive;
                    character.alive ? alive = "Yes" : alive = "No"
                    // Return an element
                    return (
                        <div className='p-4' key={index}>
                            <h1 className='text-2xl italic'>{character.name}, {character.epitaph}</h1>
                            <p>Profession: {character.profession}</p>
                            <p>Description: {character.desc}</p>
                            <p>Age: {character.age}</p>
                            <p>Height: {character.height}</p>
                            <p>Weight: {character.weight}</p>
                            <p>Player Character: {pc}</p>
                            <p>Alive: {alive}</p>
                            <p className='text-xl italic'>Known Artifacts:</p>
                            <div>
                                {artifacts}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default Characters;