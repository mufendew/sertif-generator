const router = require('express').Router();
const Controller = require('../controllers/movieController')

// GET
router.get('/', Controller.show);
router.get('/add', Controller.add);
router.get('/edit/:id', Controller.edit);
router.get('/delete/:id', Controller.remove);
router.get('/addcast/:id', Controller.addCast);

// POST
router.post('/add', Controller.addProcess);
router.post('/edit/:id', Controller.editProcess);
router.post('/addcast/:id', Controller.addCastProcess);

module.exports = router