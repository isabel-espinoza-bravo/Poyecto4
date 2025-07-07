const express = require('express');
const dotenv = require('dotenv');
const rutasReservas = require('./routes/reservasRoutes');

dotenv.config();
const app = express();

app.use(express.json());
app.use(rutasReservas);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor corriendo en el puerto " + PORT);
});