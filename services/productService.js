const productRepository = require('../repositories/productRepository');

const getProducts = async() => {
    return await productRepository.getProducts();
}

const getProductById = async(id) => {
    return await productRepository.getProductById(id);
}

const createProduct = async(product) => {
    return await productRepository.createProduct(product);
}

const updateProduct = async(product) => {
    return await productRepository.updateProduct(product);
}

const deleteProduct = async(id) => {
    return await productRepository.deleteProduct(id);
}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}