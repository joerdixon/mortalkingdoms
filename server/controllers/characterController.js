const {Character} = require('../models');

async function getCharacters(req, res) {
    try {
        const characterData = await Character.findAll();
        return res.status(200).json(characterData);
    } catch (err) {
        console.log(err);
        return res.status(500).json({msg: 'An error occurred retrieving all character data.'});
    }
}

module.exports = {
    getCharacters
}