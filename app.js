const express = require('express');
const app = express();
const usuarioRoutes = require('./routes/sentenciadoRoutes');
require('dotenv').config();

app.use(express.json());
app.use('/sentenciado', sentenciadoRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando em http://localhost:${process.env.PORT}`);
});

app.listen(process.env.PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando...`);
  });

console.log('teste')