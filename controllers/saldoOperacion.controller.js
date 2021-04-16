const saldoOperacionModel = require('../models/saldoOperacion');

const createsaldoOperacion = async(req, res) =>{
    const {
        noBol,
        litros,
        ct
     } = req.body;

     let newSaldoOperacion = new saldoOperacionModel({
        noBol,
        litros,
        ct
    });

    const saldoOperacionSaved = await newSaldoOperacion.save();
    res.status(200).json(saldoOperacionSaved);

}

const getSaldoOperacion = async(req, res)=>{
    let saldoOperacion = await saldoOperacionModel.find();
    res.status(200).json(saldoOperacion);
}

const getSaldoOperacionById = async(req, res) =>{
    let id = req.params.id;
    let saldoOperacion = await saldoOperacionModel.findById(id);
    res.status(200).json(saldoOperacion);
}

const updateSaldoOperacionById = async(req, res) =>{
    let id = req.params.id;
    let saldoOperacion = await saldoOperacionModel.findByIdAndUpdate(id, req.body, {
        new:true //Para actualizar y mostrarte los datos actualizados
    });
    res.status(200).json(saldoOperacion);
}

const deleteSaldoOperacion = async (req, res) =>{
    let id = req.params.id;
    const deleteSaldo = await saldoOperacionModel.findByIdAndDelete(id);
    res.status(200).json(deleteSaldo);
}

module.exports = {createsaldoOperacion, getSaldoOperacion, getSaldoOperacionById, updateSaldoOperacionById, deleteSaldoOperacion};