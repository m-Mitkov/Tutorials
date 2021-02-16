const { Router } = require('express');

const router = Router();
 const courseService = require('../services/courseService');

// router.get('/', (req, res) => {
//     res.render('home-pages/guest-home.hbs');
// })

router.get('/', async (req, res, next) => {
    try {
        const courses = await courseService.getAll(req.params);
        console.log(courses);
        res.render('home-page/home-page', { courses })
        
    } catch (error) {
        next();
    }
})

module.exports = router;