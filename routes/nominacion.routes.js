const veryfiToken = require('../middlewares/authJwt'),
      express = require('express'),
      nominacionCtrl = require('../controllers/nominacion.controller'),
      app = express();

      app.post('/create',[veryfiToken.verifyToken], nominacionCtrl.createNominacion);
      app.get('/', nominacionCtrl.getNominacion);
      app.get('/:id', nominacionCtrl.getNominacionById);
      app.put('/:id', [veryfiToken.verifyToken], nominacionCtrl.updateNominacionById);
      app.delete('/:id', [veryfiToken.verifyToken], nominacionCtrl.deleteNominacionById);
      
module.exports = app;