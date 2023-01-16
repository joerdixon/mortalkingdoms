const router = require('express').Router();

const characterRoutes = require('./characterRoutes');

router.use("/char", characterRoutes)

module.exports = router;
