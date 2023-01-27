const url = 'http://localhost:3000/'

const api = {

    // Characters
    getAllCharacters: async () => {
        const res = await fetch(`${url}/api/characters`, {
            method: 'GET',
            headers: {
                'Content-type': "application/json"
            }
        })
        return res.json();
    },

    getOneCharacter: async (singleCharacter) => {
        const res = await fetch(`${url}/api/characters/${singleCharacter}`, {
            method: 'GET',
            headers: {
                'Content-type': "application/json"
            }
        })
        return res.json();
    },


    // Artifacts
    getAllArtifacts: async () => {
        const res = await fetch(`${url}/api/artifacts`, {
            method: 'GET',
            headers: {
                'Content-type': "application/json"
            }
        })
        return res.json();
    },

    getOneArtifact: async (singleArtifact) => {
        const res = await fetch(`${url}/api/artifacts/${singleArtifact}`, {
            method: 'GET',
            headers: {
                'Content-type': "application/json"
            }
        })
        return res.json();
    },

    // Factions
    getAllFactions: async () => {
        const res = await fetch(`${url}/api/factions`, {
            method: 'GET',
            headers: {
                'Content-type': "application/json"
            }
        })
        return res.json();
    },

    getOneFaction: async (singleFaction) => {
        const res = await fetch(`${url}/api/factions/${singleFaction}`, {
            method: 'GET',
            headers: {
                'Content-type': "application/json"
            }
        })
        return res.json();
    },
}

export default api;