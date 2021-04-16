var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const autoTanqueSchema = Schema({
empresaFerroviaria:String,
nAutotanques:String,
capacidad: Array,
nEconomico:Array,
pesoTara:Array
});

module.exports = mongoose.model('AutoTanque', autoTanqueSchema);