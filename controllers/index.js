const router = require("express").Router();

const apiRoute = require("./api");
const homePage = require('./homePage');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
