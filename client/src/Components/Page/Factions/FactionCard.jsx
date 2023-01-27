import React from 'react';

// The FactionCard component will be a expandable card representing a single Faction from the database.

// The Faction on the card will be passed in as a prop.

// TODO: Make standard and expanded layout for card.

function FactionCard({ faction }) {
    return (
        <div className='p-4'>
            <h1 className='text-2xl italic'>{faction.name}</h1>
            <p>Age: {faction.age}</p>
            <p>Population: {faction.pop}</p>
            <p>Region: {faction.region}</p>
            <p>Description: {faction.desc}</p>
        </div>
    )
};

export default FactionCard;