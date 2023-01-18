const router = require('express').Router();

const {
    getFactions,
    getFaction
} = require('../../controllers/factionController')

// Get all Factions
// @ api/Factions
router.route('/').get(getFactions)

// Get one Faction
// @ api/Factions/:name
router.route('/:name').get(getFaction)


module.exports = router;
