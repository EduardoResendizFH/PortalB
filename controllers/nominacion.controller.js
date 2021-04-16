const nominacionModel = require('../models/nominacion'),
      operadorModel = require('../models/operador'),
      clienteModel = require('../models/cliente');

const createNominacion = async(req, res) =>{
    const {
        nTracto,
        fecha,
        tipoCombustible,
        placaTracto,
        tipo,
        capacidad1, 
        capacidad2, 
        nEco1, 
        nEco2, 
        placa1, 
        placa2, 
        empresaId,
        operadorId
    } = req.body;

    let newNominacion = new nominacionModel({
        nTracto,
        fecha,
        tipoCombustible,
        placaTracto,
        tipo,
        capacidad1, 
        capacidad2, 
        nEco1, 
        nEco2, 
        placa1, 
        placa2, 
        empresaId,
        operadorId
    });

    const nominacionSaved = await newNominacion.save();
    res.status(200).json(nominacionSaved);
}

const getNominacion = async(req, res) =>{ 
    let nominaciones = await nominacionModel.find({}, (err, nominaciones) =>{
        operadorModel.populate(nominaciones, {path:"operadorId"}, (err, nominaciones) =>{
            // res.status(200).send(nominaciones);
            clienteModel.populate(nominaciones, {path:"empresaId"}, (err, nominaciones) =>{
                res.status(200).send(nominaciones);
            });
        });
    });
}

const getNominacionById = async(req, res) =>{
    let id = req.params.id;
    let nominacion = await nominacionModel.findById(id);
    res.status(200).json(nominacion);
}

const updateNominacionById = async (req, res) =>{
    let id = req.params.id;
    const updateNominacion= await nominacionModel.findByIdAndUpdate(id, req.body, {
        new:true //Para actualizar y mostrarte los datos actualizados
    });
    res.status(200).json(updateNominacion);
}

const deleteNominacionById = async(req, res) => {
    let id = req.params.id;
    const deleteNominacion = await nominacionModel.findByIdAndDelete(id);
    res.status(200).json(
        deleteNominacion
    )
}

module.exports = {createNominacion, getNominacion, getNominacionById, updateNominacionById, deleteNominacionById};