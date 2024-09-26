const express = require('express');
const router = express.Router();

const authenticate = require('../controllers/auth/authenticateJWT');
const updateBalance = require('../controllers/user/updateBalance');
const getUserData = require('../controllers/user/getUserData');
const getAvatar = require('../controllers/user/getAvatar');

router.get('/', authenticate, getUserData);

router.patch('/balance', authenticate, updateBalance);

router.get('/avatar', authenticate, getAvatar);

module.exports = router;
