const autoTanqueModel = require('../models/autoTanque');

const createAutoTanque = async(req, res) =>{
    const {
        empresaFerroviaria,
        nAutotanques,
        capacidad,
        nEconomico,
        pesoTara
     } = req.body;

    let newAutoTanque = new autoTanqueModel({
        empresaFerroviaria,
        nAutotanques,
        capacidad,
        nEconomico,
        pesoTara
    });

    const autoTanqueSaved = await newAutoTanque.save();
    res.status(200).json(autoTanqueSaved);

}

const getAutotanque = async(req, res) =>{
    let autoTanque = await autoTanqueModel.find();
    res.status(200).json(autoTanque);
}

const getAutotanqueById = async(req, res) =>{
    let id = req.params.id;
    let autoTanque = await autoTanqueModel.findById(id);
    res.status(200).json(autoTanque);
}

const updateAutotanqueById = async(req, res) =>{
    let id = req.params.id;
    let autoTanque = await autoTanqueModel.findByIdAndUpdate(id, req.body, {
        new: true
    });
    res.status(200).json(autoTanque);

}
const deleteAutotanqueById = async(req, res) =>{
    let id = req.params.id;
    let deleteautoTanque = await autoTanqueModel.findByIdAndDelete(id);
    res.status(200).json(deleteautoTanque);
}
module.exports = {createAutoTanque, getAutotanque, getAutotanqueById, updateAutotanqueById, deleteAutotanqueById};