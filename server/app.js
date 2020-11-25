

const express = require('express'),
      morgan = require('morgan'),
      pkg = require('../package.json'),
      products = require('../routes/products.routes'),
      createRoles = require('../libs/initialSetup'),
      userRoutes = require('../routes/user.routes'),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      authRoutes = require('../routes/auth.routes') ;
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

app.use('/products', products);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

module.exports = app;