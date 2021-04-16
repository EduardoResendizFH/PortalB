const mongoose = require('mongoose'),
     Schema = mongoose.Schema;

const nominacionSchema = new Schema({
    nTracto: {type:String},
    fecha:{type:String},
    tipoCombustible:{type:String},
    placaTracto: {type:String},
    tipo: {type:String},
    capacidad1: {type:String}, 
    capacidad2: {type:String}, 
    nEco1: {type:String}, 
    nEco2: {type:String}, 
    placa1: {type:String}, 
    placa2: {type:String}, 
    empresaId:{
        type: Schema.ObjectId,
        ref:"empresaIds",
        //required:[true, 'La contraseña es obligatoria']
    } ,
    operadorId:{
        type: mongoose.Schema.ObjectId,
        ref:"operadorIds",
        //required:[true, 'La contraseña es obligatoria']
    } 

},{
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('Nominacion_Hidromex', nominacionSchema);