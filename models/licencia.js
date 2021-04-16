const { Interface } = require('readline');

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const postLicenciaSchema = new Schema({
    title: {type:String},
    description: {type: String},
    filename: {type: String},
    path:{type: String},
    originalname:{type: String},
    mimetype:{type: String},
    size:{type: Number},
    created_at:{type: Date, default: Date.now()},
});
module.exports = mongoose.model('licecia', postLicenciaSchema);