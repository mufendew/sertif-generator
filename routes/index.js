const router = require('express').Router();
const prodHouse = require('./RprodHouse');
const movies = require('./Rmovie');
const cast = require('./Rcast');

router.use('/production', prodHouse)
router.use('/movie', movies)
router.use('/cast', cast)

module.exports = router
