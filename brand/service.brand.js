import { validateId, foundId, foundBrand } from './validation/validation.brand.js';

let brands = [];
let id = 0;

function createNewBrand(data, res) {
    const new_brand = {
        id: id++,
        ...data
    }
    brands.push(new_brand);
    res.json({
        message: 'new brand created',
        status: 200
    });
};


function allBrands(res) {
    res.json(brands);
}


function brandById(id, res) {
    const isInt = +id
    validateId(isInt, res);
    const brand = brands.find(brand => brand.id === isInt)
    foundBrand(brand, res);
    res.json(brand);
}


function updateBrandById(id, body, res) {
    const isInt = +id
    validateId(isInt, res);
    const brand = brands.findIndex(brand => brand.id === isInt);
    foundId(brand, res);
    brands[brand] = {...brands[brand], ...body}
    res.json({
        message: 'new brand updated',
        status: 200
    });
}


function deleteBrandById(id, res) {
    const isInt = +id;
    validateId(isInt, res);
    const brand = brands.findIndex(brand => brand.id === isInt);
    foundId(brand, res);
    brands.splice(brand, 1);
    res.json({
        message: 'brand deleted successfully',
        status: 200
    });
}

export {
    createNewBrand,
    allBrands,
    brandById,
    updateBrandById,
    deleteBrandById
}

