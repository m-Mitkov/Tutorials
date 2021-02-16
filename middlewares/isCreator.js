const {COOKIE_NAME} = require('../config/config');
const Course = require('../models/Course');

module.exports = async (req, res, next) =>{
    const currentCourse = await Course.findById(req.params.id);
   const currentUserId = req.cookies[COOKIE_NAME]._id;

   if (currentCourse.creator == currentUserId) {
       res.locals.isCreator = true;
   }

   res.locals.currentCourse = JSON.stringify(currentCourse);
   next();
}