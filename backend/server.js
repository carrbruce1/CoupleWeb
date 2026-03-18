const express = require("express");
const cors = require("cors");
const path = require("path");

const authRoutes = require("./routes/auth");
const parejasRoutes = require("./routes/parejas");

const app = express();

app.use(cors());
app.use(express.json());

/* Rutas de la API */
app.use("/auth", authRoutes);
app.use("/parejas", parejasRoutes);

/* Servir el frontend */
app.use(express.static(path.join(__dirname, "../frontend")));

app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000");
  console.log("Abrir en navegador: http://localhost:3000");
});