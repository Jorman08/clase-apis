import express from 'express';
import controller from './product/controller.js';
import brand from './brand/controller.brand.js';

const app = express();

app.use(express.json()); 
app.use( '/controller', controller);
app.use( '/brand', brand);

// PROTOCOLOS: get, path, delete, put, post

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

