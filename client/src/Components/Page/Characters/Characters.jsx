import React from 'react';
import api from '../../../utils/api';

function Characters() {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        async function getCards() {
            let data = await api.getAllCharacters();
            setData(data[0].name)
        }
        getCards();
    }, []);

    return (
        <div>
            <h1>Functional Characters</h1>
            <p>{data}</p>
        </div>
    )
};

export default Characters;