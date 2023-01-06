const router = require('express').Router();

router.get('/hi', (req, res) => {
    try {
        res.status(200).json({message: 'hi joe'})
    } catch (err) {
        res.status(500).json({err:err})
    }
})

module.exports = router;
