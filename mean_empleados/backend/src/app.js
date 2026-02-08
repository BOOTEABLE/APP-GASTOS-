const express = require('express'); 
const morgan = require('morgan'); 
const cors = require('cors'); // Agregado para conectar con Angular después [cite: 90]
const app = express(); 

// settings 
app.set('puerto', process.env.PORT || 3000); 
app.set('nombreApp', 'Gestión de empleados'); 

// middlewares
app.use(morgan('dev'));
app.use(express.json()); // ¡IMPORTANTE! Para recibir datos del formulario [cite: 154]
app.use(cors()); 

// routes
// Esta línea es la que mantiene vivo al servidor buscando tus rutas [cite: 143]
app.use('/api/empleados', require('./routes/empleados.routes')); 

module.exports = app; 