const router = require('express').Router();

const {
    getLocations
} = require('../../controllers/locationController')

router.get('/hi', (req, res) => {
    try {
        res.status(200).json({message: 'hi joe'})
    } catch (err) {
        res.status(500).json({err:err})
    }
})

router.route('/').get(getLocations)

module.exports = router;
