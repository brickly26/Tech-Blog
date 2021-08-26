const router = require("express").Router();

const apiRoute = require("./api");
const homePage = require('./homePage');

router.use('/', homePages);
router.use('/api', apiRoutes);

module.exports = router;
