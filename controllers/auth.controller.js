const user = require('../models/user'),
      userModel = require('../models/user'),
      config = require('../server/config'),
      RoleModel = require('../models/Role'),
      jwt = require('jsonwebtoken');

const signup = async (req, res) =>{
    const {username, email, password, role} = req.body;

  const newUser =  new user({ 
        username,
        email,
        password: await userModel.encryptPassword(password),
        role
    });

   

    const savedUser = await newUser.save();
    console.log(savedUser);

    const token = jwt.sign({id: savedUser._id}, config.SECRET, {
        expiresIn: 86400 //24Horas
    })

     res.status(200).json({token});
};

const signin = async (req, res) =>{
     //console.log(req.body);
    let userFound = await userModel.findOne({email: req.body.email}).populate("roles");

    if (!userFound) return res.status(200).json({message: "User not found"});


    let matchPassword = await userModel.comparePassword(req.body.password, userFound.password);

    if (!matchPassword) return res.status(201).json({token: null, message: 'Invalid password'});


    const token = jwt.sign({id: userFound._id}, config.SECRET, {
        expiresIn: 86400 //24Horas
    })
   
   res.json({token, userFound});
};

const verifyToken = async (req, res) =>{
    try {
        const token = req.headers["x-access-token"];
        console.log(token);
    
        if (!token) return res.status(403).json({message: "No token provided"});
    
        const decode = jwt.verify(token, config.SECRET);
        req.id = decode.id;
    
        const user = await userModel.findById(req.id, {password: 0});
        if(!user) return res.status(404).json({message: 'No user found'});
        res.status(200).json({
            ok:true,
            user,
            message:'exitoso'
        })
    } catch (error) {
        return res.status(401).json({message: 'Unauthorized'});
    }
}

module.exports = {signup, signin, verifyToken};