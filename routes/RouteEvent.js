const router = require('express').Router();
const Controller = require('../controllers/eventController')
const Participant = require('../controllers/participantController')
const loginmid = require('../middleware/loginMid')

router.get('/event/',loginmid, Controller.show)
router.get('/event/add',loginmid, Controller.addEvent)
router.post('/event/add',loginmid, Controller.addEventProcess)
router.get('/event/delete/:id',loginmid, Controller.deleteEvent)
router.get('/event/peserta/:id',loginmid, Controller.showPeserta)
router.post('/event/peserta/:id',loginmid, Controller.addPesertaToEvent)

router.get('/participant/',loginmid, Participant.show)
router.get('/participant/add',loginmid, Participant.add)
router.post('/participant/add',loginmid, Participant.addProcess)
router.get('/participant/edit/:id',loginmid, Participant.edit)
router.post('/participant/edit/:id',loginmid, Participant.editProcess)

module.exports = router