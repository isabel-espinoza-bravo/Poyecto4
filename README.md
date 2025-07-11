# 🏨 Love Paris Hotel – Gestión de Reservas

Aplicación backend para la gestión de reservas de hotel, desarrollada con Node.js y Express. Permite realizar operaciones CRUD completas y aplicar filtros por fecha, tipo de habitación, estado y número de huéspedes.

---

## ✨ Funcionalidades

- Crear reservas
- Obtener todas las reservas
- Ver detalles de una reserva por ID
- Editar reservas existentes
- Eliminar reservas
- Filtrar reservas por:
  - Rango de fechas
  - Tipo de habitación
  - Estado
  - Número de huéspedes

---

## 📁 Estructura del proyecto

love-paris-hotel/
- controllers/
- └ reservasController.js
- routes/
- └ reservasRoutes.js
- .env
- .gitignore
- package.json
- server.js
- README.md


### 🛠 Endpoints disponibles


| Método | Endpoint                                                     | Descripción                     |
| ------ | ------------------------------------------------------------ | ------------------------------- |
| POST   | `/api/reservas`                                              | Crear una nueva reserva         |
| GET    | `/api/reservas`                                              | Listar todas las reservas       |
| GET    | `/api/reservas/:id`                                          | Obtener detalles de una reserva |
| PUT    | `/api/reservas/:id`                                          | Actualizar una reserva          |
| DELETE | `/api/reservas/:id`                                          | Eliminar una reserva            |
| GET    | `/api/reservas?hotel=HOTEL`                                  | Filtrar por hotel               |
| GET    | `/api/reservas?fecha_inicio=DD-MM-YYYY-fecha_fin=DD-MM-YYYY` | Filtrar por rango de fechas     |
| GET    | `/api/reservas?tipo_habitacion=TIPO`                         | Filtrar por tipo de habitación  |
| GET    | `/api/reservas?estado=ESTADO`                                | Filtrar por estado              |
| GET    | `/api/reservas?num_huespedes=N`                              | Filtrar por número de huéspedes |


### 🧪 Pruebas
Puedes probar la API con herramientas como:
- ThunderClient (VS Code)
- Postman
- Insomnia

### 📦 Tecnologías usadas
- Node.js
- Express.js
- Dotenv

