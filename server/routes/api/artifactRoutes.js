const router = require('express').Router();

const {
    getArtifacts,
    getArtifact
} = require('../../controllers/artifactController')

router.get('/hi', (req, res) => {
    try {
        res.status(200).json({message: 'hi joe'})
    } catch (err) {
        res.status(500).json({err:err})
    }
})  

router.route('/').get(getArtifacts)

router.route('/:name').get(getArtifact)

module.exports = router;
