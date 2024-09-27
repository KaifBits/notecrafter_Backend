const express = require('express');
const { addUser, loginUser } = require('../Controllers/usercontroller.js');

const router = express.Router();

// User registration route
router.post('/register', addUser);

// User login route
router.post('/login', loginUser);

module.exports = router;
