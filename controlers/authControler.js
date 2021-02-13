const { Router } = require('express');

const router = Router();

router.get('/login', (req, res) => {
    res.render('user-pages/login');
})

router.get('/register', (req, res) => {
    res.render('user-pages/register');
})

module.exports = router;    