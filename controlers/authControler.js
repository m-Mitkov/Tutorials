const { Router } = require('express');

const authService = require('../services/authService');
const { COOKIE_NAME } = require('../config/config');

const router = Router();

router.get('/login', (req, res) => {
    console.log(res.locals);
    res.render('user-pages/login');
})

router.post('/login', async (req, res, next) => {
    try {
        const token = await authService.login(req.body)
        res.cookie(COOKIE_NAME, token);
        res.redirect('/home')
    } catch (error) {
        res.render('user-pages/login', { error: { message: 'Invalid username or password' } });
    }
})

router.get('/register', (req, res) => {
    res.render('user-pages/register');
})

router.post('/register', async (req, res) => {
    try {
        await authService.registerUser(req.body);
        res.redirect('/auth/login')
    } catch (error) {
        res.render('user-pages/register', { error: { message: 'Invalid username or password' } });
    }
})

router.get('/logout', (req, res) => {
    res.clearCookie(COOKIE_NAME);
    res.redirect('/home')
})

module.exports = router;    