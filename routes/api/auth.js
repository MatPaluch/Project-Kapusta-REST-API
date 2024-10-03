const express = require('express');
const router = express.Router();

const controllersAuthRegister = require('../controllers/auth/register');
const controllersAuthLogin = require('../controllers/auth/login');
const controllersAuthLogout = require('../controllers/auth/logout');

const authenticate = require('../controllers/auth/authenticateJWT');
require('./swagger/1.3LogoutDesc');
router.post('/register', controllersAuthRegister);

router.post('/login', controllersAuthLogin);

router.post('/logout', authenticate, controllersAuthLogout);

module.exports = router;
