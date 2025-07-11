const express = require('express');
const dotenv = require('dotenv');
const reservasRouter = require('./routes/reservasRoutes');

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api', reservasRouter); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor corriendo en el puerto " + PORT);
});
