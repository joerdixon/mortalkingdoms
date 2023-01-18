const { Faction } = require('../models');

// Get all factions
async function getFactions(req, res) {
    try {
        const factionData = await Faction.findAll();
        return res.status(200).json(factionData)
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: "An error occurred retrieving all faction data." })
    }
}

// Get one faction
async function getFaction(req, res) {
    try {
        const factionData = await Faction.findOne({where: {name: req.params.name}})
        if (factionData === null) {
            console.log("Not found")
            res.status(200).json({msg: "faction not found"})
        } else {
            res.status(200).json(factionData)
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({msg: "An error occured retrieving this faction."})
    }
}

module.exports = {
    getFactions,
    getFaction
}

