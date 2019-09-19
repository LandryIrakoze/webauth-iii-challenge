const express = require('express');
const router = express.Router();
const Users = require('../users/userModel');

router.get('/', (req, res) => {
    Users.find()
        .then(users => {
            res.json({ users, loggedInUser: req.user.username })
        })
        .catch(err => {
            res.send(err)
        })
})

module.exports = router;