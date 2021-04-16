var mongoose = require('mongoose'),
    Schema = mongoose.Schema; 

const operadorSchema = mongoose.Schema({
    nombre: String,
    apellidos: String,
    telefono: String,
    licencia: String,
    rfc: String,
    filename: {type: String},
    path:{type: String},
    originalname:{type: String},
    mimetype:{type: String},
    size:{type: Number},
     
},{
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('Operadores', operadorSchema);