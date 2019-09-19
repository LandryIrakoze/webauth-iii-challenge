const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const generateToken = require('../../config/tokenGenerator');
const Users = require('../users/userModel');

router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    Users.add(user)
        .then(saved => {
            res.status(200).json(saved)
        })
        .catch(error => {
            res.status()
        })
})

router.post('/login', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);
                res.status(200).json({ token })
            } else {
                res.status(401).json({ message:'Invalid Credentials' })
            }
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

module.exports = router;