const {Event, Participant, ParticipantEvent} = require("../models")


class EventController{
    static show(req, res){
        Event.findAll()
            .then(data => {
                res.render("event/list.ejs",{data})
            })
            .catch(err =>{
                res.send(err)
            })
    }
    static deleteEvent(req, res){
        Event.destroy(
            {
                where: {
                    id: req.params.id
                }
            }
        )
            .then(data => {
                res.redirect("/event")
            })
            .catch(err =>{
                res.send(err)
            })
    }
    static showPeserta(req, res){
        let event;
        let last;
        Event.findOne({
            where : {id : req.params.id},
            include : Participant
        })
        .then(data => {
            event = data
            return ParticipantEvent.findOne({
                attributes: ['id'],
                order :[
                    ['id','DESC']
                ]
            })
        })
        .then(lastRecord => {
            last = lastRecord
            return Participant.findAll()

        })
        .then(orang => {
            res.render("event/addPeserta",{data : event, lastRecord : last,orang})
        })
        .catch(err =>{
            res.send(err)
        })
    }
    static addPesertaToEvent(req, res){
        ParticipantEvent.create({
                ParticipantId : req.body.name,
                EventId : req.params.id,
                certificate_number : req.body.certificate_number,
                validFrom : req.body.validFrom,
                ValidUntil : req.body.validUntil
        })
        .then(data => {
            // res.send(data)
            res.redirect("/event/peserta/"+req.params.id)
        })
        .catch(err =>{
            res.send(err)
        })
    }
    static addEvent(req, res){
        res.render('event/add.ejs')
    }
    static addEventProcess(req, res){
        Event.create({
            name : req.body.name,
            awal : req.body.awal,
            akhir : req.body.akhir,
        })
        .then(data => {
            // res.send(data)
            res.redirect("/event")
        })
        .catch(err =>{
            res.send(err)
        })
    }
    static editProcess(req, res){
        
    }
    static remove(req, res){
        
    }
    static showMovies(req, res){

    }
}

module.exports = EventController;

