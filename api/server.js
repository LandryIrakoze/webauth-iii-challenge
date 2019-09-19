const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

const AuthRouter = require('../entities/auth/authRoutes');
const UserRouter = require('../entities/users/userRoutes');

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', AuthRouter);
server.use('/api/users', UserRouter);

server.get('/', (req, res) => {
    res.status(200).json({ message: 'server up' })
});

module.exports = server;