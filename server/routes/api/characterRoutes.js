const router = require('express').Router();

const {
    getCharacters,
    getCharacter
} = require('../../controllers/characterController')

// Get all characters
// @ api/characters
router.route('/').get(getCharacters)

// Get one character
// @ api/characters/:name
router.route('/:name').get(getCharacter)


module.exports = router;
