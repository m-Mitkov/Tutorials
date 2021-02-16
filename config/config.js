const config = {
    development: {
        PORT: 7070, 
        DB_CONECTION: 'mongodb://localhost/*use your own DB*',
        SALT_ROUNDS: 7,
        SECRET: '*write a 'secret' string for jwt validation*',
        COOKIE_NAME: 'USER_SESSION',
    },

    production: {}
}

module.exports = config[process.env.NODE_ENV.trim()];
