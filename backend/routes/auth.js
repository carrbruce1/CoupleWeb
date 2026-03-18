const express = require("express");
const router = express.Router();

const db = require("../db");
const bcrypt = require("bcrypt");

/* =========================
   REGISTRO
========================= */

router.post("/register", async (req, res) => {

  const { nombre, email, password } = req.body;

  if(!nombre || !email || !password){
    return res.status(400).json({
      error: "Faltan datos"
    });
  }

  try {

    const hashedPassword = await bcrypt.hash(password, 10);

    const [result] = await db.query(
      "INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)",
      [nombre, email, hashedPassword]
    );

    // DEVOLVER USER
    res.json({
      message: "Usuario creado correctamente",
      user: {
        id: result.insertId,
        nombre,
        email
      }
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      error: "Error al registrar usuario"
    });

  }

});


/* =========================
   LOGIN
========================= */

router.post("/login", async (req, res) => {

  const { email, password } = req.body;

  try {

    const [rows] = await db.query(
      "SELECT * FROM usuarios WHERE email = ?",
      [email]
    );

    if (rows.length === 0) {
      return res.status(404).json({
        error: "Usuario no encontrado"
      });
    }

    const user = rows[0];

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      return res.status(401).json({
        error: "Contraseña incorrecta"
      });
    }

    // DEVOLVER USER CORRECTO
    res.json({
      message: "Login exitoso",
      user: {
        id: user.id,
        nombre: user.nombre,
        email: user.email
      }
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      error: "Error en el servidor"
    });

  }

});

module.exports = router;