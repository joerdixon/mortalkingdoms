const router = require('express').Router();

// Import our db queries from controllers
const {
    getCharacters,
    getCharacter
} = require('../../controllers/characterController')

// Get all characters + their artifacts
// @ api/characters
router.route('/').get(getCharacters)

// Get one character + their artifacts
// @ api/characters/:name
router.route('/:name').get(getCharacter)


module.exports = router;
