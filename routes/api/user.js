const express = require('express');
const router = express.Router();

const authenticate = require('../controllers/auth/authenticateJWT');
const updateBalance = require('../controllers/user/updateBalance');
const getUserData = require('../controllers/user/getUserData');

router.get('/', authenticate, getUserData);

router.patch('/balance', authenticate, updateBalance);

module.exports = router;
