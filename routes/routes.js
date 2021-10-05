const router = require('express').Router();
module.exports = router
const components = require('../app/scheduleroutes');

router.use('/master',components);
