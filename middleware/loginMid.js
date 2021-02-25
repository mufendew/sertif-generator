const loginMid = (req,res,next) =>{
    if (!req.session.isLogin) {
        res.redirect('/login')
    }else{
        next()
    }
}

module.exports = loginMid