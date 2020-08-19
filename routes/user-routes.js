const express = require('express');
const userController = require('../app/api/controllers/user-controller');
const authTokenValid = require('../app/config/auth-token-validate');

const router = express.Router();
router.get('/:id', authTokenValid, userController.getById);
router.get('/', userController.getAll);

module.exports = router;