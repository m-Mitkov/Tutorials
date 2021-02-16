const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const { SALT_ROUNDS, SECRET } = require('../config/config');

const User = require('../models/User');

async function registerUser(data) {
    const { username, password, rePassword } = { ...data };
    const user = await User.findOne({ username });

    if (password !== rePassword || user) throw ({ message: 'Invalid username or password!' });

    const hashedPass = bcrypt.hashSync(password, SALT_ROUNDS);

    const userObj = { username: username, password: hashedPass };
    const newUser = new User(userObj)
    return newUser.save();
}

async function login(data) {
    const { username, password } = { ...data };
    const user = await User.findOne({ username: data.username });

    if (!user) throw {message: 'Invalid username or password!'};

    if(!bcrypt.compareSync(password, user.password)) throw {message: 'Invalid username or password!'};
    
    return {
        username: username,
        _id: user._id
    }
}

module.exports = {
    registerUser,
    login
}