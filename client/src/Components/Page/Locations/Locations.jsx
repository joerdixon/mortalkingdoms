import React from 'react';
import api from '../../../utils/api';

function Locations() {
    const [locations, setLocations] = React.useState(null);

        // Whenever we re-render
        React.useEffect(() => {
            // Hit the api
            async function getLocations() {
                let data = await api.getAllLocations();
                // This is only showing the name of the first character
                setLocations(data[0].name)
            }
            getLocations();
        }, []);

return(
    <div>
<h1>Functional Locations</h1>
<p>{locations}</p>
    </div>
)
};

export default Locations;