 const licenciaModel = require('../models/licencia');

 const createLicencia = async(req, res) =>{

     let file = req.file;
     const {
        created,
        message,
        img,
        coords,
        operadorId
      } = req.body;

     let newLicencia = new licenciaModel({
        created,
        message,
        img,
        coords,
        operadorId
     });

    const licenciaSaved = await newLicencia.save();
    res.status(200).json(licenciaSaved);
}

// const getCliente = async(req, res) =>{
//     let clientes = await clienteModel.find();
//     res.status(200).json(clientes);
// }

// const getClienteById = async(req, res) =>{
//     let id = req.params.id;
//     let cliente = await clienteModel.findById(id);
//     res.status(200).json(cliente);
// }

// const updateClientById = async (req, res) =>{
//     let id = req.params.id;
//     const updateCliente = await clienteModel.findByIdAndUpdate(id, req.body, {
//         new:true //Para actualizar y mostrarte los datos actualizados
//     });
//     res.status(200).json(updateCliente);
// }

// const deleteClientById = async(req, res) => {
//     let id = req.params.id;
//     const deleteClient = await clienteModel.findByIdAndDelete(id);
//     res.status(200).json(
//         deleteClient
//     )
// }

module.exports = {createLicencia};