const router = require('express').Router();

const characterRoutes = require('./characterRoutes');
const artifactRoutes = require('./artifactRoutes');
const locationRoutes = require('./locationRoutes');

router.use("/character", characterRoutes)
router.use("/artifact", artifactRoutes)
router.use("/location", locationRoutes)

module.exports = router;
