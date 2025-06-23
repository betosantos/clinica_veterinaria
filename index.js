const express = require("express");
const dotenv = require('dotenv');
const cors = require('cors');
const conectarDB = require('./config/db');

dotenv.config();        // Carrega variáveis do .env
conectarDB();           // Conecta ao banco de dados

const app = express();
app.use(express.json());
app.use(cors());         // Habilita CORS para todas as rotas



// Rotas
const usuariosRoutes = require('./routes/usuariosRoute');
app.use('/usuarios', usuariosRoutes);

const homeRoutes = require('./routes/homeRoute');
app.use('/', homeRoutes);




app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
