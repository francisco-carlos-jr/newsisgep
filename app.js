const express = require('express');
const app = express();
const usuarioRoutes = require('./routes/sentenciadoRoutes');
require('dotenv').config();

app.use(express.json());
app.use('/sentenciado', sentenciadoRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando em http://localhost:${process.env.PORT}`);
});

console.log('teste')