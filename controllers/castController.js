const {Cast,Movie} = require("../models")
const ubahUmur = require("../helper/ubahUmur")

class castController{
    static show(req, res){
        Cast.findAll({
                order:[
                    ["id","DESC"]
                ]
            })
            .then(data =>{
                res.render('cast/list.ejs',{data})
            })
            .catch(err =>{
                res.send(err)
        })
    }
    static add(req, res){
        res.render('cast/add.ejs')
    }
    static addProcess(req, res){
        Cast.create({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                birth_year : req.body.birth_year,
                phone_number : req.body.phone_number,
                gender : req.body.gender
            })
            .then((data) =>{
                res.redirect('/cast')
            })
            .catch(err =>{
                res.send(err)
            })
    }
    static edit(req, res){
        Cast.findByPk(+req.params.id)
            .then((data) =>{
                res.render('cast/edit.ejs',{data})
            })
            .catch(err =>{
                res.send(err)
            })
    }
    static editProcess(req, res){
        Cast.update({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                birth_year : req.body.birth_year,
                phone_number : req.body.phone_number,
                gender : req.body.gender
            },
            {
                where: {
                    id: req.params.id
                }
            }
            )
            .then((data) =>{
                res.redirect('/cast')
            })
            .catch(err =>{
                res.send(err)
            })
    }
    static remove(req, res){
        Cast.destroy(
            {
                where: {
                    id: req.params.id
                }
            })
            .then((data) =>{
                res.redirect('/cast')
            })
            .catch(err =>{
                res.send(err)
            })
    }
    static showMovies(req, res){
        console.log("wkwkwkw");
        Cast.findByPk(+req.params.id,{include:Movie})
            .then((data) =>{
                res.render('cast/listmovie.ejs',{data,ubahUmur})
            })
            .catch(err =>{
                res.send(err)
            })
        
    }
}

module.exports = castController