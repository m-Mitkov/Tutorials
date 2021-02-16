const { Router } = require('express');

const router = Router();
const courseService = require('../services/courseService');
const { COOKIE_NAME } = require('../config/config');
const isCreator = require('../middlewares/isCreator');
const isEnrolled = require('../middlewares/isEnrolled');

router.get('/create', (req, res) => {
  res.render('course-pages/create-course');
})

router.post('/create', async (req, res) => {
  try {
    const userId = req.cookies[COOKIE_NAME]._id;
    await courseService.createCourse(req.body, userId);
    res.redirect('/home');
  } catch (error) {
    next();
  }
})

router.get('/:id/details', isCreator, isEnrolled, async (req, res) => {
  try {
    const course = await courseService.getById(req.params.id);
    res.render('course-pages/details', { ...course });
  } catch (error) {
    console.log(error);
    next();
  }
})

router.post('/search', async (req, res) => {
  try {
    const courses = await courseService.getAll(req.body.title);
    res.render('home-page/home-page', { courses })

  } catch (error) {
    console.log(error);
    next();
  }
})

router.get('/:id/enroll', (req, res) => {
  const idUser = req.cookies[COOKIE_NAME]._id;
  const courseId = req.params.id;
  try {
    courseService.addUserToCourse(idUser, courseId);
    res.redirect(`/course/${courseId}/details`)
  } catch (error) {
    console.log(error);
    next();
  }
})

router.get('/:id/edit', async (req, res) => {
  try {
    const course = await courseService.getById(req.params.id);
    res.render('course-pages/edit-course', { ...course })
  } catch (error) {
    console.log(error);
    next();
  }
})

router.post('/:id/edit', async (req, res) => {
  try {
    const idCourse = req.params.id;
    await courseService.updateCourse(idCourse, req.body)
    res.redirect(`/course/${idCourse}/details`)
  } catch (error) {
    console.log(error);
    next();
  }
})

router.get('/:id/delete', async (req, res) => {
  try {
    await courseService.deleteCourse(req.params.id);
    res.redirect('/home/')
  } catch (error) {
    console.log(error);
    next();
  }
})

module.exports = router;