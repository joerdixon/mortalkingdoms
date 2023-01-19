const { Character, Artifact } = require('../models');

// Get all characters 
async function getCharacters(req, res) {
    try {
        // Query the database for all characters
        const characterData = await Character.findAll({
            include: {
                // Include the artifacts held by characters
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
        // Query the database for character with a specific name
        const characterData = await Character.findOne({
            where: { name: req.params.name },
            // Include any artifacts that characters holds.
            include: { model: Artifact }
        })
        // If the character is not found, notify the user.
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

// Export these functions for use in routes.
module.exports = {
    getCharacters,
    getCharacter
}