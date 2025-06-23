const mongoose = require('mongoose');

// Define o schema
const usuarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  }

});

// Exporta o model
module.exports = mongoose.model('Usuario', usuarioSchema);