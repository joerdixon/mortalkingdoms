const { Faction, Character } = require('../models');

// Get all factions
async function getFactions(req, res) {
    try {
        // Query the database for all factions
        const factionData = await Faction.findAll({
            // Attach the characters in those factions to the response
            include: { model: Character }
        });
        // Return the data
        return res.status(200).json(factionData)
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: "An error occurred retrieving all faction data." })
    }
}

// Get one faction
async function getFaction(req, res) {
    try {
        // Query the database for factions with the specified name
        const factionData = await Faction.findOne({
            where: { name: req.params.name },
            // Include characters in that faction.
            include: { model: Character }
        })
        // If the faction is not found, notify the user.
        if (factionData === null) {
            console.log("Not found")
            res.status(200).json({ msg: "faction not found" })
        } else {
            return res.status(200).json(factionData)
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: "An error occured retrieving this faction." })
    }
}

// Export these functions for use in routes.
module.exports = {
    getFactions,
    getFaction,
};

