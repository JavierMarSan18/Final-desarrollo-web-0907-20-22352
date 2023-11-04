const productService= require('../services/productService');

const getProducts = async(req, res) => {
    const products = await productService.getProducts();
    res.status(200).json(products);
}

const getProductById = async(req, res) => {
    const product = await productService.getProductById(req.params.id)
    console.log(product);
    if(!product) {
        res.status(404).json({error: 'Product not found'});
        return;
    }else{
        res.status(200).send(product);
    }
}

const createProduct = async(req, res) => {
    const product = await productService.createProduct(req.body);
    res.status(201).json(product);
}

const updateProduct = async(req, res) => {
    const product = await productService.updateProduct(req.body);
    res.status(200).json(product);
}

const deleteProduct = async(req, res) => {
    const product = await productService.deleteProduct(req.params.id);
    res.status(200).json(product);
}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}