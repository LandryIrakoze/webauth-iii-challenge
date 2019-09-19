const secrets = require('./secrets');
const jwt = require('jsonwebtoken');

module.exports = {
    generateToken
}

function generateToken(user) {
    const payload = {
        username: user.username
    };
    const options = {
        expiresIn: '1d'
    };
    return jwt.sign(payload, secrets.jwtSecret, options);
}