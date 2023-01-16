const { Artifact } = require('../models');

// Get all artifacts
async function getArtifacts(req, res) {
    try {
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
        const artifactData = await Artifact.findOne({where: {name: req.params.name}})
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

module.exports = {
    getArtifacts,
    getArtifact
}

