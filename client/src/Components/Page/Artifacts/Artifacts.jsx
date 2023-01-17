import React from 'react';
import api from '../../../utils/api';

function Artifacts() {
    const [artifacts, setArtifacts] = React.useState(null)

    // Whenever we re-render
    React.useEffect(() => {
        // Hit the api
        async function getArtifacts() {
            let data = await api.getAllArtifacts();
            // This is only showing the name of the first character
            setArtifacts(data[0].name)
        }
        getArtifacts();
    }, []);

    return (
        <div>
            <h1>Functional Artifacts</h1>
            <p>{artifacts}</p>
        </div>
    )
};

export default Artifacts;