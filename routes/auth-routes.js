const express = require('express');
const userController = require('../app/api/controllers/auth-controller');

const router = express.Router();
router.post('/register', userController.create);
router.post('/login', userController.authenticate);

module.exports = router;