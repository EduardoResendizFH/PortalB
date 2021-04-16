const operadorModel = require('../models/operador');

const createOperador = async(req, res) =>{
    
    let file = req.file;
    
    const {
        nombre,
        apellidos,
        telefono,
        licencia,
        rfc,
        id_fichero 
    } = req.body;


    let newOperador = new operadorModel({
        nombre,
        apellidos,
        telefono,
        licencia,
        rfc,
        id_fichero 
    });

    const operadorSaved = await newOperador.save();
    res.status(200).json(operadorSaved);
}

const getOperador = async(req, res) =>{ 
    let operadores = await operadorModel.find();
    res.status(200).json(operadores);
}

const getOperadorById = async(req, res) =>{
    let id = req.params.id;
    let operador = await operadorModel.findById(id);
    res.status(200).json(operador);
}

const updateOperadorById = async (req, res) =>{
    let id = req.params.id;
    const updateOperador= await operadorModel.findByIdAndUpdate(id, req.body, {
        new:true //Para actualizar y mostrarte los datos actualizados
    });
    res.status(200).json(updateOperador);
}

const deleteOperadorById = async(req, res) => {
    let id = req.params.id;
    const deleteOperador = await operadorModel.findByIdAndDelete(id);
    res.status(200).json(
        deleteOperador
    )
}

module.exports = {createOperador, getOperador, getOperadorById, updateOperadorById, deleteOperadorById};