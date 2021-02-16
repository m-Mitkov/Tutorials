const {COOKIE_NAME} = require('../config/config');

module.exports = (req, res, next) => {
    const cookie = req.cookies[COOKIE_NAME];

    if (cookie) {
        res.locals.isAuth = true;
        res.locals.username = cookie.username;
        next();
    }

    else{
        res.locals.isAuth = false;
        next();
    }
}