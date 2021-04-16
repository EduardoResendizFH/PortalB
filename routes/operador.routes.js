const veryfiToken = require('../middlewares/authJwt'),
      express = require('express'),
      operadorCtrl = require('../controllers/operador.controller'),
      multer = require('multer'),
      path = require('path'),
      app = express();


      const uuid = require('uuid');
      const operador = require('../models/operador');

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

      app.post('/create/lic', (req, res) =>{
        let body = req.body;
        let file = req.file;
        //console.log(body,'este es el body');
            
        let newPhoto ={
            nombre: body.nombre,
            apellidos: body.apellidos,
            telefono: body.telefono,
            licencia: body.licencia,
            rfc: body.rfc,
            filename: file.filename,
            path: 'public/uploads/licenciaOperador' + req.file.filename,
            originalname: file.originalname,
            mimetype: file.mimetype,
            size: file.size,
            IdChofer:body.IdChofer
        };

        console.log(newPhoto);
    
    
        operador.create(newPhoto, (err, image) =>{
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



      app.post('/create',[veryfiToken.verifyToken], operadorCtrl.createOperador);
      app.get('/', operadorCtrl.getOperador);
      app.get('/:id', operadorCtrl.getOperadorById);
      app.put('/:id', [veryfiToken.verifyToken], operadorCtrl.updateOperadorById);
      app.delete('/:id', [veryfiToken.verifyToken], operadorCtrl.deleteOperadorById);
      
module.exports = app;