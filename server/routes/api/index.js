const router = require('express').Router();

const characterRoutes = require('./characterRoutes');
const artifactRoutes = require('./artifactRoutes');
const locationRoutes = require('./locationRoutes');

router.use("/characters", characterRoutes)
router.use("/artifacts", artifactRoutes)
router.use("/locations", locationRoutes)

module.exports = router;
