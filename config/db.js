require('dotenv').config();
const { Sequelize } = require('sequelize');



const sequelize = new Sequelize({  
  host: 'dpg-d1clkcvdiees73c7b4b0-a.oregon-postgres.render.com',  
  username: 'clinica_veterinaria_kaw4_user',
  database: 'clinica_veterinaria_kaw4',
  password: 'UOpjaOAQsbhLBwjLnWNiDu5yuys7v0zU',
  port: 5432,   
  dialect: 'postgres', 
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  logging: false
});

sequelize.authenticate()
  .then(() => console.log('🟢 Conectado ao PostgreSQL!'))
  .catch(err => console.error('🔴 Erro ao conectar:', err));

module.exports = sequelize;