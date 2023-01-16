const { Location } = require('../models');

async function getLocations(req, res) {
    try {
        const locationData = await Location.findAll();
        return res.status(200).json(locationData)
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: "An error occurred retrieving all location data." })
    }
}

// Get one artifact
async function getLocation(req, res) {
    try {
        const locationData = await Location.findOne({where: {name: req.params.name}})
        if (locationData === null) {
            console.log("Not found")
            res.status(200).json({msg: "Location not found"})
        } else {
            res.status(200).json(locationData)
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({msg: "An error occured retrieving this Location."})
    }
}

module.exports = {
    getLocations,
    getLocation
}

