import React from 'react';

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

function CharacterCard({ character }) {
    console.log(character)
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
        <div className='p-4'>
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
};

export default CharacterCard;