const {Event, Participant, ParticipantEvent} = require("../models")


class ParticipantController{
    static show(req, res){
        Participant.findAll()
            .then(data =>{
                res.render('participant/list.ejs',{data})
            })
            .catch(err =>{
                res.send(err)
            })
    }
    static add(req, res){
        res.render('participant/add.ejs')
    }
    static addProcess(req, res){
        Participant.create({
            name: req.body.name,
            company : req.body.company,
            role : req.body.role
        })
        .then(data =>{
            res.redirect('/participant')
        })
        .catch(err =>{
            res.send(err)
        })

    }
    static edit(req, res){
        Participant.findByPk(req.params.id)
            .then(data =>{
                res.render('participant/edit.ejs',{data})
            })
            .catch(err =>{
                res.send(err)
            })
    }
    static editProcess(req, res){
        Participant.update({
            name: req.body.name,
            company : req.body.company,
            role : req.body.role
        },{
            where: {
                id: req.params.id
            }
        })
        .then(data =>{
            res.redirect('/participant')
        })
        .catch(err =>{
            res.send(err)
        })
    }
}

module.exports = ParticipantController