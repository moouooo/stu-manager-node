function checkLogin(req, res, next) {
    if (!req.session.user) {
        res.render('login', { title: "登录" });
        return;
    }

    next();
}

module.exports = checkLogin;