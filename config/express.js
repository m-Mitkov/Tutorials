const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path')

function setUpExpress(app){

    app.engine('hbs', handlebars({
        extname: 'hbs',
        partialsDir: path.join(__dirname, "../views/partials/")
    }));

    app.set('view engine', 'hbs');

    app.use(express.static('public'));
 
    app.use(express.urlencoded({
        extended: true,
    }));

    app.use(bodyParser.json());

    app.use(cookieParser());
}

module.exports = setUpExpress;