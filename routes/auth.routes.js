const express = require('express'),
      authController = require('../controllers/auth.controller'),
      verifySignup = require('../middlewares/verifySignup'),
      app = express();

      app.post('/signup', [
          verifySignup.checkDuplicateUsernameOrEmail, verifySignup.checkRolesExisted
      ], authController.signup);

      app.post('/signin', authController.signin);

      app.get('/readUser', authController.verifyToken);

      module.exports = app;