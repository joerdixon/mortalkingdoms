import React from 'react';
import api from '../../../utils/api';

function Artifacts() {
    const [artifacts, setArtifacts] = React.useState([])

    React.useEffect(() => {
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