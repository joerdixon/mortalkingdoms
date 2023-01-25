import React from 'react';
import api from '../../../utils/api';

// The Factions page will contain a list of all factions stored in the database.

// Users will be able to view each faction in an enlarged modal that shows information about that faction.

// This includes any characters or artifacts beholden to that faction.

function Factions() {
    const [factions, setFactions] = React.useState(null);

        // Whenever we re-render
        React.useEffect(() => {
            // Hit the api
            async function getFactions() {
                let data = await api.getAllFactions();
                // This is only showing the name of the first character
                setFactions(data[0].name)
            }
            getFactions();
        }, []);

return(
    <div>
<h1>Functional Factions</h1>
<p>{factions}</p>
    </div>
)
};

export default Factions;