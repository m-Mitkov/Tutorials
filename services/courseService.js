const Course = require('../models/Course');
const userService = require('../services/userService');

async function createCourse(data, userId) {
    const createdAt = (new Date()).toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " ");
    const obj = {
        ...data,
        'creator': userId,
        'createdAt': createdAt
    };

    const course = new Course(obj);
    return Promise.all[
        userService.addCourse(course, userId),
        course.save()
    ]
}

function getAll(searchParam = '') {
    return Course.find({ title: { $regex: `(?i)^${searchParam}`, $options: 'i' } }).lean();
}

function getById(id) {
    return Course.findById(id).lean();
}

async function addUserToCourse(idUser, idCourse){
    const currentCourse = await Course.findById(idCourse);
    currentCourse.users.push(idUser);
    
    return Promise.all[currentCourse.save(), userService.joinCourse(idCourse,idUser)];
}

 function updateCourse(idCourse, data){
  return Course.updateOne({_id: idCourse}, data);
}

function deleteCourse(id){
    return Course.deleteOne({_id: id});
}

module.exports = {
    createCourse,
    getAll,
    getById,
    addUserToCourse,
    updateCourse,
    deleteCourse
}