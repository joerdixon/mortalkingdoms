const router = require('express').Router();

// Import our db queries from controllers
const {
    getFactions,
    getFaction,
} = require('../../controllers/factionController')

// Get all factions + their characters
// @ api/Factions
router.route('/').get(getFactions)

// Get one faction + their characters
// @ api/Factions/:name
router.route('/:name').get(getFaction)

module.exports = router;
