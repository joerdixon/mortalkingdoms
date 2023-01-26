const { Character, Artifact, Faction } = require('../models');

// Get all characters 
async function getCharacters(req, res) {
    try {
        // Query the database for all characters
        const characterData = await Character.findAll({
            include: [
                // Include the artifacts held by characters
                { model: Artifact },
                // Include the faction that character is part of.
                { model: Faction }]
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
            include: [
                // Include the artifacts held by characters
                { model: Artifact },
                // Include the faction that character is part of.
                { model: Faction }]
        });
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