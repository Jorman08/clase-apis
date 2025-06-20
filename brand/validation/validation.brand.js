const validateId = (int, res) => {
    if (isNaN(int)) {
        res.json({
            message: 'Error id is string',
            status: 404
        })
    }
};

const foundId = (id, res) => {
    if (id == -1) {
        res.json({
            message: 'Error id not found',
            status: 404
        })
    }
};

const foundBrand = (brand, res) => {
    if (!brand) {
        res.json({
            message: 'Error brand not found',
            status: 404
        })
    }
};

export {
    validateId,
    foundId,
    foundBrand
}