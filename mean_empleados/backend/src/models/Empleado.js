const { Schema, model } = require('mongoose');

const empleadoSchema = new Schema({ 
    nombre: { type: String, required: true }, 
    cargo: { type: String, required: true }, 
    departamento: { type: String, required: true }, 
    sueldo: { type: Number, required: true } 
}, {
    timestamps: true, // Crea createdAt y updatedAt [cite: 263, 271]
    versionKey: false 
});

module.exports = model("Empleado", empleadoSchema); 