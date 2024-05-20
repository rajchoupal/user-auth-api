const express = require('express');
const router = express.Router();
const { register, login, forgotPassword } = require('../controllers/authController');

// @route   POST api/auth/register
// @desc    Register user
// @access  Public
router.post('/register', register);

// @route   POST api/auth/login
// @desc    Authenticate user & get token
// @access  Public
router.post('/login', login);

// @route   POST api/auth/forgot-password
// @desc    Forgot password
// @access  Public
router.post('/forgot-password', forgotPassword);

module.exports = router;
