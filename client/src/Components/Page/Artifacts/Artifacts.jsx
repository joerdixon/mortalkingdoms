import React from 'react';
import api from '../../../utils/api';

function Artifacts() {
    const [artifacts, setArtifacts] = React.useState(null)

    React.useEffect(() => {

        setArtifacts([])

        async function getArtifacts() {
            let data = await api.getAllArtifacts();
            for (let i = 0; i < data.length; i++) {
                const nextArtifact = await data[i].name;
                setArtifacts((prevArtifacts) => [...prevArtifacts, nextArtifact]);
            }
        }

        getArtifacts();
        // Hit the api
    }, []);

    return (
        <div>
            <h1>Functional Artifacts</h1>
            <p>{artifacts}</p>
        </div>
    )
};

export default Artifacts;