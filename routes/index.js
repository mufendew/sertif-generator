const router = require('express').Router();
// const event = require('./RouteEvent');
const Generate = require('../controllers/generateController')
const Login = require('../controllers/loginController')

// router.use('/event', event)

router.get('/generate',Generate.show)
router.post('/generate',Generate.generate)
router.get('/login', Login.login)
router.post('/login', Login.loginProcess)
router.get('/logout', Login.logout)

module.exports = router
