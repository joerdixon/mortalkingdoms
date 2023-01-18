const router = require('express').Router();

const characterRoutes = require('./characterRoutes');
const artifactRoutes = require('./artifactRoutes');
const factionRoutes = require('./factionRoutes');

router.use("/characters", characterRoutes)
router.use("/artifacts", artifactRoutes)
router.use("/factions", factionRoutes)

module.exports = router;
