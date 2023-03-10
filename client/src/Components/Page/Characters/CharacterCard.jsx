import React from 'react';
import ArtifactCard from '../Artifacts/ArtifactCard';

// The CharacterCard component will be a expandable card representing a single Character from the database.

// The Character on the card will be passed in as a prop.

// TODO: Make standard and expanded layout for card.
// TODO: Add formatting function for height and weight, currently just coming in as an int.


const formatArtifacts = (artifactArray) => {
    // Convert objects array into elements array
    const artifactCards = artifactArray.map((artifact, index) => {
        return (
            <ArtifactCard artifact={artifact} />
        )
    })
    // If it's empty, return none.
    if (artifactCards.length === 0) {
        return (<div>None</div>)
    } else {
        return (<div className='flex'>{artifactCards}</div>)
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
        <div className='p-4 border flex flex-col space-between'>
            {/* Nameplate */}
            <div>
                <h1 className='text-2xl text-center italic'>{character.name}</h1>
                <h2 className='text-center italic font-semibold'>{character.epitaph}</h2>
            </div>
            {/* Stat Block */}
            <div>
                <p>Age: {character.age}</p>
                <p>Height: {character.height}</p>
                <p>Weight: {character.weight}</p>
                <p>Profession: {character.profession}</p>
                <p>Alive: {alive}</p>
                <p>Player Character: {pc}</p>
            </div>
            {/* Description */}
            <p>Description: {character.desc}</p>
            {/* Artifacts */}
            <div>
                <p className='text-xl italic'>Known Artifacts:</p>
                {artifacts}
            </div>
        </div>
    )
};

export default CharacterCard;