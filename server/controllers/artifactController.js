const { Artifact } = require('../models');

// Get all artifacts
async function getArtifacts(req, res) {
    try {
        // Query the database for all artifacts.
        const artifactData = await Artifact.findAll();
        return res.status(200).json(artifactData)
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: "An error occurred retrieving all artifact data." })
    }
}

// Get one artifact
async function getArtifact(req, res) {
    try {
        // Query the database for an artifact with a specific name.
        const artifactData = await Artifact.findOne({where: {name: req.params.name}})
        // If it's not there, notify the user.
        if (artifactData === null) {
            console.log("Not found")
            res.status(200).json({msg: "Artifact not found"})
        } else {
            res.status(200).json(artifactData)
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({msg: "An error occured retrieving this artifact."})
    }
}

// Export these functions for use in routes.
module.exports = {
    getArtifacts,
    getArtifact
}

