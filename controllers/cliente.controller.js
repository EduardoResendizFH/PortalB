const clienteModel = require('../models/cliente');

const createCliente = async(req, res) =>{
    const {
        nombre,
        cre,
        direccion,
        permiso,
        vigencia,
        rfc,
        operador,
        tracto
     } = req.body;

     let newCliente = new clienteModel({
        nombre,
        direccion,
        cre,
        permiso,
        vigencia,
        rfc,
        operador,
        tracto
    });

    const clienteSaved = await newCliente.save();
    res.status(200).json(clienteSaved);
}

const getCliente = async(req, res) =>{
    let clientes = await clienteModel.find();
    res.status(200).json(clientes);
}

const getClienteById = async(req, res) =>{
    let id = req.params.id;
    let cliente = await clienteModel.findById(id);
    res.status(200).json(cliente);
}

const updateClientById = async (req, res) =>{
    let id = req.params.id;
    const updateCliente = await clienteModel.findByIdAndUpdate(id, req.body, {
        new:true //Para actualizar y mostrarte los datos actualizados
    });
    res.status(200).json(updateCliente);
}

const deleteClientById = async(req, res) => {
    let id = req.params.id;
    const deleteClient = await clienteModel.findByIdAndDelete(id);
    res.status(200).json(
        deleteClient
    )
}

module.exports = {createCliente, getCliente, getClienteById, updateClientById, deleteClientById};
