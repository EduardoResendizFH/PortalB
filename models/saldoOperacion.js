var mongoose = require('mongoose'),
    Schema = mongoose.Schema; 

const saldoOperacionSchema = new Schema({
    noBol: String,
    litros: Number,
    ct: String,
     
},{
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('Saldo Operacion', saldoOperacionSchema);