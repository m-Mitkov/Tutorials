const User = require('../models/User')

async function addCourse(data, userId){
    const user = await User.findById(userId);
    user.createdCourses.push(data);
    return user.save();
}

async function joinCourse(idCourse, idUser){
    const currentUser = await User.findById(idUser);
    currentUser.courses.push(idCourse);
    return currentUser.save();
}

module.exports = {
    addCourse,
    joinCourse
}