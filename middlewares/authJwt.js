const jwt = require('jsonwebtoken'),
      config = require('../server/config'),
      userModel = require('../models/user'),
      Role = require('../models/Role');

const verifyToken = async (req, res, next) =>{
    try {
        const token = req.headers["x-access-token"];
        console.log(token);
    
        if (!token) return res.status(403).json({message: "No token provided"});
    
        const decode = jwt.verify(token, config.SECRET);
        req.id = decode.id;
    
        const user = await userModel.findById(req.id, {password: 0});
        if(!user) return res.status(404).json({message: 'No user found'});
        next();
    } catch (error) {
        return res.status(401).json({message: 'Unauthorized'});
    }
}

// const isMoredator = async (req, res, next) =>{
//         const user = await userModel.findById(req.id);
//         const roles = await Role.find({_id: {$in: user.roles}});
//        // console.log(roles);
    
//         for (let i = 0; i < roles.length; i++) {
//             if (roles[i].name === "moderator") {
//                 res.status(200).json({ message: "Exitoso!!!! Moderator"});
//                 next();
//                 return;
//             }
//         } 
    
//         return res.status(403).json({ message: "requieres ser moderador ROL"});
    
// };

const isAdmin = async (req, res, next) =>{

    const user = await userModel.findById(req.id);
    const roles = await Role.find({_id: {$in: user.roles}});
    //console.log(roles);
    
        for (let i = 0; i < roles.length; i++) {
            if (roles[i].name === "admin") {
                res.status(200).json({ message: "Exitoso!!!! Admin"});
                next();
                return;
            }
        }
    return res.status(202).json({ message: "requieres ser administrador"});
}

module.exports = {verifyToken, isAdmin};