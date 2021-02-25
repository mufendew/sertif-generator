const router = require('express').Router();
const Controller = require('../controllers/prodHouseController')

router.get('/', Controller.show);

module.exports = router