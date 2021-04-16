var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

    const clienteSchema = new Schema({
        nombre: String,
        direccion: String,
        cre: String,
        rfc:String,
        permiso: String,
        vigencia: String,
        // operador:[
        //     {
        //         type: Schema.ObjectId,
        //         ref:'operador'
        //     }
        // ],
        // tracto:[
        //     {
        //         type: Schema.ObjectId,
        //         ref:'tracto'
        //     }
        // ]
        
    },{
        timestamps: true,
        versionKey: false
    });
    
    module.exports = mongoose.model('Cliente', clienteSchema);