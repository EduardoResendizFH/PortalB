

const express = require('express'),
      morgan = require('morgan'),
      pkg = require('../package.json'),
      products = require('../routes/products.routes'),
      createRoles = require('../libs/initialSetup'),
      userRoutes = require('../routes/user.routes'),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      authRoutes = require('../routes/auth.routes'),
      clienteRuta = require('../routes/cliente.routes'),
      operadorRuta = require('../routes/operador.routes'),
      nominacionRuta = require('../routes/nominacion.routes'),
      autotanqueRuta = require('../routes/autoTanque.routes'),
      productosStaticos = require('../routes/productsStaticts.routes'),
      licenciaRuta = require('../routes/licencia.routes'),
      saldoOperacionRuta = require('../routes/saldoOperacion.routes');
const app = express();
createRoles();

app.set('pkg', pkg);

app.use(morgan('dev'));
app.use(express.json());

app.use(cors({origin: true, credentials: true}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) =>{
    res.json({
        name:app.get('pkg').name,
        author:app.get('pkg').author,
        description:app.get('pkg').description,
        version:app.get('pkg').version
    })
});

//Mostrar imagenes de carpetas
app.use('/lic', express.static('public/uploads/licenciaOperador'));

app.use('/products', products);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/cliente', clienteRuta);
app.use('/api/operador', operadorRuta);
app.use('/api/nominacion', nominacionRuta);
app.use('/api/autotanque', autotanqueRuta);
app.use('/api/productos', productosStaticos);
app.use('/api/licencia', licenciaRuta);
app.use('/api/saldo', saldoOperacionRuta);

module.exports = app;