const router = require('express').Router();
const Controller = require('../controllers/castController')

router.get('/', Controller.show)

module.exports = router