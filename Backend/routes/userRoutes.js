// routes/userRoutes.js
const express = require('express');
const { register } = require('../Controllers/userController');
const { validateRegisterInput } = require('../middleware/validation');

const router = express.Router();

router.post('/register', validateRegisterInput, register);

module.exports = router;
