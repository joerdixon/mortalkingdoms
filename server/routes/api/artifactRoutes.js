const router = require('express').Router();

// Import our db queries from controllers
const {
    getArtifacts,
    getArtifact
} = require('../../controllers/artifactController')

// Get all artifacts
// @ api/artifacts
router.route('/').get(getArtifacts)

// Get one artifact
// @ api/artifacts/:name
router.route('/:name').get(getArtifact)

module.exports = router;
