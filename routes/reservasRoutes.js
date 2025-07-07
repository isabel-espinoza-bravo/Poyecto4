const express = require('express');
const router = express.Router();
const {
  crearReserva,
  obtenerReservas,
  obtenerReservaPorId,
  actualizarReserva,
  eliminarReserva
} = require('../controllers/reservasController');

router.post('/api/reservas', crearReserva);
router.get('/api/reservas', obtenerReservas);
router.get('/api/reservas/:id', obtenerReservaPorId);
router.put('/api/reservas/:id', actualizarReserva);
router.delete('/api/reservas/:id', eliminarReserva);

module.exports = router;