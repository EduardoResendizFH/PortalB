const mongoose = require('mongoose'),
       Schema = mongoose.Schema; 

    const ROLES = ["user", "admin", "moderator"];

    const roleSchema = new Schema({
        name: String
    },{
        versionKey: false
    });


    
    module.exports = mongoose.model('Role', roleSchema);