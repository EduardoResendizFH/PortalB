
const productModel = require('../models/product');

const createProduct = async (req, res) =>{
   const {name, category, price} = req.body;
   let newProduct = new productModel({name, category, price});
   const productSaved = await newProduct.save();
   res.status(200).json(productSaved);
};

const getProduct = async (req, res) =>{
   const products = await productModel.find();
   res.json(products);
};

const getProductById = async (req, res) =>{
   let id = req.params.id;
   // console.log(id);
   let product = await productModel.findById(id);
   res.status(200).json(product);
};

const deleteProductById = async (req, res) =>{
    let id = req.params.id;
   await productModel.findByIdAndDelete(id);
   res.status(200).json;

   // await productModel.findById(id,(err, deleteProduct) =>{
   //    if (err) {
   //        res.status(400).json({
   //            message:'Error al almacenar',
   //            err
   //        });
   //    }

   //    res.status(200).json({
   //        ok:true,
   //        deleteProduct
   //    });
   // });
};

const updateProductById = async (req, res) =>{
   let id = req.params.id;
   const updateProduct = await productModel.findByIdAndUpdate(id, req.body, {
      new: true  //Es para actualizar y te muestra los datos actualizados
   })
   res.status(204).json(updateProduct,'Producto eliminado');
};

 module.exports = {getProduct, getProductById, createProduct, deleteProductById, updateProductById};