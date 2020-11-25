
const express = require('express'),
      userCtrl = require('../controllers/user.controller'),
      {verifyToken, verifySignup }= require('../middlewares')
      app = express();

      app.post('/',[
        verifyToken.verifyToken,
        verifyToken.isAdmin,
        verifySignup.checkRolesExisted,
      ],userCtrl.createUser
      );


      module.exports = app;