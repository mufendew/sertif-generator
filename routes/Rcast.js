const router = require('express').Router();
const Controller = require('../controllers/castController');

// GET
router.get('/', Controller.show);
router.get('/add', Controller.add);
router.get('/edit/:id', Controller.edit);
router.get('/delete/:id', Controller.remove);
router.get('/showmovies/:id', Controller.showMovies);

// POST
router.post('/add', Controller.addProcess);
router.post('/edit/:id', Controller.editProcess);

module.exports = router