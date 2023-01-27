import React from 'react';
import ArtifactCard from './ArtifactCard';
import api from '../../../utils/api';

// The Artifacts page will house all artifacts found in the database.

// Users will be able to view and sort artifacts based on their age (And potentially more things.)

// When a user clicks on an artifact, they will be shown an enlarged view and all information about that artifact.

// This includes the character that owns the artifact (if there is one.)

function Artifacts() {
    // Start with an empty array
    const [artifacts, setArtifacts] = React.useState([])

    React.useEffect(() => {
        async function fetchArtifacts() {
            // Query all artifacts from the API
            const data = await api.getAllArtifacts();
            // We get back an array so we just need to set the state to whatever we get back.
            setArtifacts(data)
        }
        // Call the function
        fetchArtifacts();
    }, []);

    return (
        <div>
            <h1>Artifacts</h1>
            <div>
                {/* For each artifact stored in state */}
                {artifacts.map((artifact, index) => {
                    // Return an ArtifactCard
                    return (
                        <div key={index}>
                            <ArtifactCard artifact={artifact} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default Artifacts;