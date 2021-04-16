const veryfiToken = require('../middlewares/authJwt'),
      express = require('express'),
      autoTanqueCtrl = require('../controllers/autoTanque.controller'),
      app = express();

      app.post('/create',[veryfiToken.verifyToken], autoTanqueCtrl.createAutoTanque);
      app.get('/', autoTanqueCtrl.getAutotanque);
      app.get('/:id', autoTanqueCtrl.getAutotanqueById);
      app.put('/:id', [veryfiToken.verifyToken], autoTanqueCtrl.updateAutotanqueById);
      app.delete('/:id', [veryfiToken.verifyToken], autoTanqueCtrl.deleteAutotanqueById);
      
module.exports = app;