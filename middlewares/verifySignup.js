const userModel = require('../models/user');

const checkDuplicateUsernameOrEmail = async (req, res, next) =>{
    const user = await userModel.findOne({username: req.body.username});

    if (user) return res.status(400).json({message:"The user already exist"});

    const email = await userModel.findOne({email: req.body.email});
    if (email) return res.status(400).json({message:"The email already exist"});
    next();
}

const checkRolesExisted = (req, res, next) =>{

    const ROLES = ["user", "admin", "moderator"];
    if( req.body.roles){
        for (let i = 0; i < req.body.roles.length; i++) {
            if (!ROLES.includes(req.body.roles[i])) {
                return res.status(400).json({
                    message: `Role ${req.body.roles[i]} no existe`
                });
            }
        }
    }
    next();
}

module.exports = {checkRolesExisted, checkDuplicateUsernameOrEmail};