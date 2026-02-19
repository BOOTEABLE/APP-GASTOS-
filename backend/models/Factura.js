const mongoose = require('mongoose');

const FacturaSchema = new mongoose.Schema({
  ruc: String,
  valor: Number,
  gasto: String,
  fecha: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Factura', FacturaSchema);