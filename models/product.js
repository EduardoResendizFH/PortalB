var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

    const productSchema = new Schema({
        name: String,
        category: String,
        price: Number
    },{
        timestamps: true,
        versionKey: false
    });
    
    module.exports = mongoose.model('Product', productSchema);

