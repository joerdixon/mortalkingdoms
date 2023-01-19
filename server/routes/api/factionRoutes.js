const router = require('express').Router();

const {
    getFactions,
    getFaction,
    getFactionMembers
} = require('../../controllers/factionController')

// Get all Factions
// @ api/Factions
router.route('/').get(getFactions)

// Get one Faction
// @ api/Factions/:name
router.route('/one/:name').get(getFaction)

router.route('/test').get(getFactionMembers)

module.exports = router;
