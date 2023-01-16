const { Artifact } = require('../models');

async function getArtifacts(req, res) {
    try {
        const artifactData = await Artifact.findAll();
        return res.status(200).json(artifactData)
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: "An error occurred retrieving all artifact data." })
    }
}

module.exports = {
    getArtifacts
}

