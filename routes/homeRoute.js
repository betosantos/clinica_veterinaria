const express = require("express");
const router = express.Router();



router.get("/", async (request, response) => {
  response.send("Bem-vindo à Página Home");
});


module.exports = router;
