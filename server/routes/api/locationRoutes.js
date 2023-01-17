const router = require('express').Router();

const {
    getLocations,
    getLocation
} = require('../../controllers/locationController')

// Get all locations
// @ api/locations
router.route('/').get(getLocations)

// Get one location
// @ api/locations/:name
router.route('/:name').get(getLocation)

module.exports = router;
