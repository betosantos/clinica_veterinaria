const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Importa a conexão com o banco de dados


const Usuario = sequelize.define('Usuario', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  idade: {
    type: DataTypes.INTEGER
  }
}, {
  tableName: 'usuarios',
  timestamps: false
});


module.exports = Usuario;