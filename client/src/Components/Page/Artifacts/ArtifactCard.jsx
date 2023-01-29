import React from 'react';

// The ArtifactCard component will be a expandable card representing a single artifact from the database.

// The Artifact on the card will be passed in as a prop.

// TODO: Make standard and expanded layout for card.

function ArtifactCard({ artifact }) {

    return (
        <div>
            <div className='p-4'>
                <h1 className='text-2xl italic font-serif'>{artifact.name}</h1>
                <p>Object: {artifact.shape}</p>
                <p>Age: {artifact.age}</p>
                <p>Description: {artifact.desc}</p>
                <p>Creator: {artifact.createdBy}</p>
            </div>
        </div>
    )
};

export default ArtifactCard;