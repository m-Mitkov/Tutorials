const config = {
    development: {
        PORT: 7070,
        DB_CONECTION: 'mongodb://localhost/tutorials',
        SALT_ROUNDS: 7,
        SECRET: 'the secret secret',
        COOKIE_NAME: 'USER_SESSION',
    },

    production: {}
}

module.exports = config[process.env.NODE_ENV.trim()];