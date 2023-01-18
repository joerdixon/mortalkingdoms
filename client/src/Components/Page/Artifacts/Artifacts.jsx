import React from 'react';
import api from '../../../utils/api';

function Artifacts() {
    const [artifacts, setArtifacts] = React.useState([])

    // Whenever we re-render
    React.useEffect(() => {
        // Hit the api
        async function getArtifacts() {
            let data = await api.getAllArtifacts();
            await data.forEach(element => {
                console.log(element)
                setArtifacts([...artifacts, element.name])
            });
            // This is only showing the name of the first character
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