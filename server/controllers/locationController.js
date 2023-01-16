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

module.exports = {
    getLocations
}

