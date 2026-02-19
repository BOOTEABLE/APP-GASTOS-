const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Factura = require('./models/Factura'); // Importamos tu modelo

const app = express();

// --- CONFIGURACIÓN ---
app.use(express.json()); // Para que entienda los JSON que envía Angular
app.use(cors());         // Para dar permisos al Frontend

// --- CONEXIÓN A MONGODB ---
// 'practica1' será el nombre de tu base de datos en Mongo
mongoose.connect('mongodb://localhost:27017/practica1')
    .then(() => console.log('✅ Conectado a MongoDB'))
    .catch(err => console.error('❌ Error de conexión:', err));

// --- RUTAS (API) ---

// 1. Guardar factura (POST)
app.post('/api/facturas', async (req, res) => {
    try {
        console.log("Datos recibidos:", req.body);
        const nuevaFactura = new Factura(req.body);a
        await nuevaFactura.save();
        res.json({ status: 'Factura guardada en Mongo' });
    } catch (error) {
        console.error("Detalle del error en consola:", error);
        res.status(500).json({ error: 'No se pudo guardar', detalle: error.message });
    }
});

// 2. Obtener facturas (GET)
app.get('/api/facturas', async (req, res) => {
    const facturas = await Factura.find();
    res.json(facturas);
});

// --- ARRANCAR SERVIDOR ---
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor backend corriendo en http://localhost:${PORT}`);
});