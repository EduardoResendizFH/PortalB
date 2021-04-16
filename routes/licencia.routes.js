const veryfiToken = require('../middlewares/authJwt'),
      express = require('express'),
      licenciaCtrl = require('../controllers/licencia.controller'),
      multer = require('multer'),
      path = require('path'),
      app = express();

      const uuid = require('uuid');
const licencia = require('../models/licencia');

      const storage = multer.diskStorage({
        destination: path.join('public/uploads/licenciaOperador'),
        filename: (req, file, cb) =>{
            //console.log(uuid.v4());
           cb(null, uuid.v4() + path.extname(file.originalname));
        }
      });

      //Settings 
      app.set('Views', path.join(__dirname,'views'));
      app.set('View engine', 'ejs');
      
      //Middlewares
      app.use(multer({storage}).single('myfile'));

      app.post('/create', (req, res) =>{
        let body = req.body;
        let file = req.file;
        //console.log(body,'este es el body');
            
        let newPhoto ={
            title: body.title,
            description: body.description,
            filename: file.filename,
            path: 'public/uploads/licenciaOperador' + req.file.filename,
            originalname: file.originalname,
            mimetype: file.mimetype,
            size: file.size,
            IdChofer:body.IdChofer
        };
    
    
        licencia.create(newPhoto, (err, image) =>{
            if (err) {
                res.status(404).json({
                    ok:false,
                    message: ' Error al subir la imagen'
                })
            }
            res.json({
                ok:true,
                image
            })
        })
      });
    //   app.get('/', clienteCtrl.getCliente);
    //   app.get('/:id', clienteCtrl.getClienteById);
    //   app.put('/:id', [veryfiToken.verifyToken], clienteCtrl.updateClientById);
    //   app.delete('/:id', [veryfiToken.verifyToken], clienteCtrl.deleteClientById);

module.exports = app;