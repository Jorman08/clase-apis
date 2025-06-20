import { validateId, foundId, foundProduct } from './validation/validation.js';

let products = [];
let id = 0;

function createNewProduct(data, res) {
    const new_product = {
        id: id++,
        ...data
    }
    products.push(new_product);
    res.json({
        message: 'new product created',
        status: 200
    });
};


function allProducts(res) {
    res.json(products);
}


function productById(id, res) {
    const isInt = +id
    validateId(isInt, res);
    const product = products.find(product => product.id === isInt)
    foundProduct(product, res);
    res.json(product);
}


function updateProductById(id, body, res) {
    const isInt = +id
    validateId(isInt, res);
    const product = products.findIndex(product => product.id === isInt);
    foundId(product, res);
    products[product] = {...products[product], ...body}
    res.json({
        message: 'new product updated',
        status: 200
    });
}


function deleteProductById(id, res) {
    const isInt = +id;
    validateId(isInt, res);
    const product = products.findIndex(product => product.id === isInt);
    foundId(product, res);
    products.splice(product, 1);
    res.json({
        message: 'product deleted successfully',
        status: 200
    });
}

export {
    createNewProduct,
    allProducts,
    productById,
    updateProductById,
    deleteProductById
}

