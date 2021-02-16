const {COOKIE_NAME} = require('../config/config');

module.exports = (req, res, next) => {
    const currentUserId =  req.cookies[COOKIE_NAME]._id;
    const currentCourse = JSON.parse(res.locals.currentCourse);

    res.locals.isEnrolled = currentCourse.users.includes(currentUserId);
    next(); 
};