const router = require('express').Router();

const {
    getCharacters,
    getCharacter
} = require('../../controllers/characterController')

router.get('/hi', (req, res) => {
    try {
        res.status(200).json({message: 'hi joe'})
    } catch (err) {
        res.status(500).json({err:err})
    }
})

router.route('/').get(getCharacters)

router.route('/:name').get(getCharacter)


module.exports = router;
