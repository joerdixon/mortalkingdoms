import React from 'react';

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