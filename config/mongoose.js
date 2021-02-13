const mongoose = require('mongoose');

const config = require('./config');

module.exports = (app) => {

    mongoose.connect(config.DB_CONECTION, {useNewUrlParser: true, useUnifiedTopology: true,
        useFindAndModify: false,  useCreateIndex: true});

        const db = mongoose.connection;

        db.on(open, () => console.log.bind(console, 'DB successfully conected!'));
        db.on(error, () => console.log.bind(console, 'Mongo could not connect'));
};