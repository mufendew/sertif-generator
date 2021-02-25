const {Movie, Cast, MovieCast, ProductionHouse} = require("../models")

class MovieController{
    static show(req, res){
        Movie.findAll({
            order:[
                ["released_year","DESC"]
            ],
            include: ProductionHouse
        })
            .then(data =>{
                res.render('movie/list.ejs',{data})
            })
            .catch(err =>{
                res.send(err)
        })
    }
    static add(req, res){
        ProductionHouse.findAll()
            .then(data =>{
                let err = req.query;
                res.render('movie/add.ejs',{data,err})
            })
            .catch(err =>{
                res.send(err)
            })
        
    }
    static addProcess(req, res){
        Movie.create({
                name: req.body.name,
                released_year : req.body.released_year,
                genre: req.body.genre,
                id_prodctionHouse : req.body.id_prodction
            })
            .then((data) =>{
                res.redirect('/movie')
            })
            .catch(err =>{
                let newerr = '?'
                err.errors.forEach(err =>{
                    newerr += `${err.path}=${err.message}&`
                })

                res.redirect(`/movie/add${newerr}`)
            })
    }
    static edit(req, res){
        let data

        Movie.findByPk(+req.params.id,{
            include: ProductionHouse
        })
            .then(dataMovie =>{
                data = dataMovie
                return ProductionHouse.findAll()
            })
            .then(prodHouse =>{
                let err = req.query;
                res.render('movie/edit.ejs',{data,prodHouse,err})
            })
            .catch(err =>{
                res.send(err)
        })

        
    }
    static editProcess(req, res){
        Movie.update({
            name: req.body.name,
            released_year : req.body.released_year,
            genre: req.body.genre,
            id_prodctionHouse : req.body.id_prodction
        },
        {
            where: {
                id: req.params.id
            }
        }
        )
        .then((data) =>{
            res.redirect('/movie')
        })
        .catch(err =>{
            let newerr = '?'
            err.errors.forEach(err =>{
                newerr += `${err.path}=${err.message}&`
            })

            // res.send(newerr)
            res.redirect(`/movie/edit/${req.params.id}${newerr}`)
        })
    }
    static remove(req, res){
        Movie.destroy(
        {
            where: {
                id: req.params.id
            }
        })
        .then((data) =>{
            res.redirect('/movie')
        })
        .catch(err =>{
            res.send(err)
        })
    }

    static addCast(req, res) {
        let movie
        let actor
        Movie.findByPk(+req.params.id,{
                include : Cast
            })
            .then(data =>{
                movie = data
                return Cast.findAll()
            })
            .then((data) =>{
                actor = data
                let err = req.query;
                res.render('movie/addCast.ejs',{movie,actor,err})
               
            })
            .catch(err =>{
                res.send(err)
            })
    }

    static addCastProcess(req, res) {
        MovieCast.create({
            id_movie : req.params.id,
            id_cast : req.body.id_cast,
            role : req.body.role
        })
        .then(data =>{
            res.redirect('/movie/addcast/'+req.params.id)
        })
        .catch(err =>{
            let newerr = '?'
            err.errors.forEach(err =>{
                newerr += `${err.path}=${err.message}&`
            })

            // res.send(newerr)
            res.redirect(`/movie/addcast/${req.params.id}${newerr}`)
    })
    }
    
}

module.exports = MovieController