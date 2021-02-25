class loginController{
    static login(req,res){
        res.render("login/login.ejs")
    }
    static loginProcess(req, res){
        if (req.body.username === "Fawwaz" || req.body.password === "1234") {
            req.session.isLogin = true;
            res.redirect('/event')
        }else{
            res.redirect('/login?message=error')
        }
    }
    static logout(req, res) {
        delete req.session.isLogin
        res.redirect('/login')
    }
}

module.exports =loginController