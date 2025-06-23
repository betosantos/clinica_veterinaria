const sequelize= require('../config/db');
require('../models/Usuario'); 



async function initDB() {
  try {
    await sequelize.authenticate();
    console.log('🟢 Conectado ao PostgreSQL com Sequelize');
    
    await sequelize.sync({ alter: true }); // ou sync({ force: true }) para recriar tabelas
    console.log('✅ Tabelas sincronizadas');
  } 
  catch (error) {
    console.error('🔴 Erro ao conectar ou sincronizar o banco:', error);
    process.exit(1);
  }
}

module.exports = initDB;