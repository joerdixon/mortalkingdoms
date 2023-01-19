import React from 'react';
import api from '../../../utils/api';

function Artifacts() {
    const [artifacts, setArtifacts] = React.useState(null)

    React.useEffect(() => {

        // Reset the artifact state.
        setArtifacts([])

        async function getArtifacts() {
            // Hit the api for all artifacts.
            let data = await api.getAllArtifacts();
            // For each artifact.
            for (let i = 0; i < data.length; i++) {
                const nextArtifact = await data[i].name;
                // Add each artifact to the state.
                setArtifacts((prevArtifacts) => [...prevArtifacts, nextArtifact]);
            }
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