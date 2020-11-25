const { log } = require('console');
const Role = require('../models/Role');
const user = require('../models/user'),
      userModel = require('../models/user'),
      config = require('../server/config'),
      RoleModel = require('../models/Role'),
      jwt = require('jsonwebtoken');

const signup = async (req, res) =>{
    const {username, email, password, roles} = req.body;

  const newUser =  new user({ 
        username,
        email,
        password: await userModel.encryptPassword(password)
    });

    if (roles) {
        const foundRoles = await RoleModel.find({name: {$in: roles}});
        newUser.roles = foundRoles.map(role => role._id);
    } else {
        const role = await RoleModel.findOne({name: "user"});
        newUser.roles = [role._id];
    }

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
   
   res.json({token});
};

module.exports = {signup, signin};