const router = require('express').Router();
const event = require('./RouteEvent');
const Generate = require('../controllers/generateController')
const Login = require('../controllers/loginController')
const Participant = require('../controllers/participantController')

router.use('/', event)



router.get('/',Generate.show)
router.post('/',Generate.generate)
router.get('/login', Login.login)
router.post('/login', Login.loginProcess)
router.get('/logout', Login.logout)

module.exports = router
