const url = 'http://localhost:3000/'

const api = {
    getAllCharacters: async () => {
        const res = await fetch(`${url}/api/characters`, {
            method: 'GET',
            headers: {
                'Content-type': "application/json"
            }
        })
        return res.json();
    }
}

export default api;