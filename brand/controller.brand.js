import { Router } from "express";
import { createNewBrand, allBrands, brandById, updateBrandById, deleteBrandById } from './service.brand.js';

const router = Router();

/* router.get('/', (req, res) => {
    res.send('Lista de brandos');
});

// params
router.post('/params/:id', (req, res) => {
    const { id } = req.params;
    res.send('Traer brando en el id: ' + id);
});

// query
router.get('/estado', (req, res) => {
    const { estado } = req.query;
    res.send('Traer brandos con el estado: ' + estado);
})

//body
router.post('/new', (req, res) => {
    const { nombre, precio } = req.body;
    res.json({
        message: 'brando creado',
        nombre,
        precio
    });
}); */



// Createbrand (crear)
router.post('/', (req, res) => {
    const data = req.body;
    createNewBrand(data, res);
});


// allbrand (traer)
router.get('/', (req, res) => {
    allBrands(res);
});


// onebrand (traer uno)
router.get('/:id', (req, res) => {
    let params_id = +req.params.id
    brandById(params_id, res);
});


// updatebrand (actualizar)
router.put('/:id', (req, res) => {
    const id = +req.params.id
    const body = req.body;
    updateBrandById(id, body, res);
});


// deletebrand (eliminar)
router.delete('/:id', (req, res) => {
    const params_id = +req.params.id
    deleteBrandById(params_id, res);
});



export default router;