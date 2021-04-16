const veryfiToken = require('../middlewares/authJwt'),
      express = require('express'),
      clienteCtrl = require('../controllers/cliente.controller'),
      app = express();

      app.post('/create',[veryfiToken.verifyToken], clienteCtrl.createCliente);
      app.get('/', clienteCtrl.getCliente);
      app.get('/:id', clienteCtrl.getClienteById);
      app.put('/:id', [veryfiToken.verifyToken], clienteCtrl.updateClientById);
      app.delete('/:id', [veryfiToken.verifyToken], clienteCtrl.deleteClientById);
module.exports = app;