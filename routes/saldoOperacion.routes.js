const veryfiToken = require('../middlewares/authJwt'),
      express = require('express'),
      saldoOperacionCtrl = require('../controllers/saldoOperacion.controller'),
      app = express();

      app.post('/create',[veryfiToken.verifyToken], saldoOperacionCtrl.createsaldoOperacion);
      app.get('/', saldoOperacionCtrl.getSaldoOperacion);
      app.get('/:id', saldoOperacionCtrl.getSaldoOperacionById);
      app.put('/:id', [veryfiToken.verifyToken], saldoOperacionCtrl.updateSaldoOperacionById);
      app.delete('/:id', [veryfiToken.verifyToken], saldoOperacionCtrl.deleteSaldoOperacion);
module.exports = app;