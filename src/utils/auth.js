const User = require('../resources/User/user.model');
const jwt = require('jsonwebtoken');

const newToken = user => {
    return jwt.sign({ id: user.id }, process.env.JWT, {
        expiresIn: process.env.JWT_EXP
    });
}

const verifyToken = token =>
    new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT, (err, payload) => {
            if (err) return reject(err)
            resolve(payload);
        });
    });

module.exports.signup = async (req, res) => {

}

module.exports.signin = async (req, res) => {

}

module.exports.protect = async (req, res, next) => {
    //secure routes
    next();
}


