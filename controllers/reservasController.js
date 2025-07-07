const fs = require('fs');
const path = './data/reservas.json';

function leerReservas() {
  const data = fs.readFileSync(path, 'utf-8');
  return JSON.parse(data);
}

function guardarReservas(reservas) {
  fs.writeFileSync(path, JSON.stringify(reservas, null, 2));
}

function crearReserva(req, res) {
  const reservas = leerReservas();
  const nueva = {
    id: Date.now().toString(),
    hotel: "Love Paris",
    tipo_habitacion: req.body.tipo_habitacion,
    num_huespedes: req.body.num_huespedes,
    fecha_inicio: req.body.fecha_inicio,
    fecha_fin: req.body.fecha_fin,
    estado: req.body.estado || "pendiente"
  };
  reservas.push(nueva);
  guardarReservas(reservas);
  res.status(201).json(nueva);
}

function obtenerReservas(req, res) {
  let reservas = leerReservas();
  const { hotel, tipo_habitacion, estado, num_huespedes, fecha_inicio, fecha_fin } = req.query;

  if (hotel) reservas = reservas.filter(r => r.hotel === hotel);
  if (tipo_habitacion) reservas = reservas.filter(r => r.tipo_habitacion === tipo_habitacion);
  if (estado) reservas = reservas.filter(r => r.estado === estado);
  if (num_huespedes) reservas = reservas.filter(r => r.num_huespedes == num_huespedes);
  if (fecha_inicio && fecha_fin) {
    reservas = reservas.filter(r =>
      r.fecha_inicio >= fecha_inicio && r.fecha_fin <= fecha_fin
    );
  }

  res.json(reservas);
}

function obtenerReservaPorId(req, res) {
  const reservas = leerReservas();
  const reserva = reservas.find(r => r.id === req.params.id);
  if (reserva) {
    res.json(reserva);
  } else {
    res.status(404).json({ mensaje: "No se encontró la reserva" });
  }
}

function actualizarReserva(req, res) {
  const reservas = leerReservas();
  const index = reservas.findIndex(r => r.id === req.params.id);
  if (index !== -1) {
    reservas[index] = { ...reservas[index], ...req.body };
    guardarReservas(reservas);
    res.json(reservas[index]);
  } else {
    res.status(404).json({ mensaje: "No se encontró la reserva" });
  }
}

function eliminarReserva(req, res) {
  const reservas = leerReservas();
  const filtradas = reservas.filter(r => r.id !== req.params.id);
  if (reservas.length === filtradas.length) {
    res.status(404).json({ mensaje: "No se encontró la reserva" });
  } else {
    guardarReservas(filtradas);
    res.json({ mensaje: "Reserva eliminada" });
  }
}

module.exports = {
  crearReserva,
  obtenerReservas,
  obtenerReservaPorId,
  actualizarReserva,
  eliminarReserva
};