import React from 'react';
import FactionCard from './FactionCard';
import api from '../../../utils/api';

// The Factions page will contain a list of all factions stored in the database.

// Users will be able to view each faction in an enlarged modal that shows information about that faction.

// This includes any characters or artifacts beholden to that faction.

function Factions() {
    const [factions, setFactions] = React.useState([]);

    // Whenever we re-render
    React.useEffect(() => {
        async function getFactions() {
            // Query all factions from the API
            let data = await api.getAllFactions();
            // We get back an array so we just need to set the state to whatever we get back.
            setFactions(data)
        }
        getFactions();
    }, []);

    return (
        <div>
            <div>
                <h1>Factions</h1>
                <div>
                    {/* For each faction stored in state */}
                    {factions.map((faction, index) => {
                        // Return an element
                        return (
                            <FactionCard faction={faction} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
};

export default Factions;