const express = require('express');
const { register, login, getProfile } = require('../controllers/userController');
const { authenticate } = require('../middleware/authMiddleware');
const router = express.Router();

// Register route
router.post('/register', register);

// Login route
router.post('/login', login);

// Profile route (requires authentication)
router.get('/profile', authenticate, getProfile);

module.exports = router;