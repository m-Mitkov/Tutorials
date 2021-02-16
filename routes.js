const { Router } = require('express');

const homeControler = require('./controlers/homeControler');
const authControler = require('./controlers/authControler');
const courseControler = require('./controlers/courseControler');

const router = Router();

router.use('/auth', authControler);
router.use('/home', homeControler);
router.use('/course', courseControler);
router.use('*', (req, res) => {
    next()
});

module.exports = router;