const { Character, Artifact } = require('../models');

// Get all characters 
async function getCharacters(req, res) {
    try {
        const characterData = await Character.findAll({
            include: {
                model: Artifact
            }
        });
        return res.status(200).json(characterData);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'An error occurred retrieving all character data.' });
    }
}

// Get one character
async function getCharacter(req, res) {
    try {
        const characterData = await Character.findOne({
            where: { name: req.params.name },
            include: { model: Artifact }
        })
        if (characterData === null) {
            console.log("Not found")
            res.status(200).json({ msg: "Character not found" })
        } else {
            res.status(200).json(characterData)
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: "An error occured retrieving this character." })
    }
}

module.exports = {
    getCharacters,
    getCharacter
}