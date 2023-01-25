import React from 'react';
import api from '../../../utils/api';

// The Artifacts page will house all artifacts found in the database.

// Users will be able to view and sort artifacts based on their age (And potentially more things.)

// When a user clicks on an artifact, they will be shown an enlarged view and all information about that artifact.

// This includes the character that owns the artifact (if there is one.)

function Artifacts() {
    const [artifacts, setArtifacts] = React.useState([])

    React.useEffect(() => {
        // TODO: This is running twice everytime.
        async function fetchArtifacts() {
            const data = await api.getAllArtifacts();
            for (let i = 0; i < data.length; i++) {
                const card = data[i].name;
                setArtifacts((prevArtifacts) => [...prevArtifacts, card]);
            }
        }
        fetchArtifacts();
    }, []);

    return (
        <div>
            <h1>Functional Artifacts</h1>
            <p>{artifacts}</p>
        </div>
    )
};

export default Artifacts;