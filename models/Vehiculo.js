const mongoose = require("mongoose");

const VehiculoSchema = mongoose.Schema({
  marca: {
    type: String,
    required: true,
    trim: true,
  },
  modelo: {
    type: String,
    required: true,
    trim: true,
  },
  placa: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  color: {
    type: String,
    required: true,
    trim: true,
  },
  transportista: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Transportista",
  },

  creado: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Vehiculo", VehiculoSchema);
