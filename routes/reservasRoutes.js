const express = require('express');
const router = express.Router();
const {
  crearReserva,
  obtenerReservas,
  obtenerReservaPorId,
  actualizarReserva,
  eliminarReserva
} = require('../controllers/reservasController');

router.post('/reservas', crearReserva);
router.get('/reservas', obtenerReservas);
router.get('/reservas/:id', obtenerReservaPorId);
router.put('/reservas/:id', actualizarReserva);
router.delete('/reservas/:id', eliminarReserva);

module.exports = router;
