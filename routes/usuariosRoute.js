const express = require("express");
const router = express.Router();
const Usuario = require("../models/Usuario");

// Criar usuário
router.post("/", async (req, res) => {
  try {
    const usuario = await Usuario.create(req.body);
    res.json(usuario);    
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
});


// Listar usuários
router.get("/", async (req, res) => {
  let usuarios = await Usuario.findAll();    
  res.json(usuarios);    
});


router.get("/beto", async (request,response) => {
  await response.send("Olá Beto, tudo bem?");
});


module.exports = router;
