import React from 'react';
import api from '../../../utils/api';

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