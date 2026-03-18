const express = require("express");
const router = express.Router();
const db = require("../db");

/* generar codigo */
function generarCodigo() {
  return Math.random().toString(36).substring(2,8).toUpperCase();
}

/* =========================
   CREAR PAREJA
========================= */

router.post("/crear-pareja", async (req,res)=>{

  const { userId } = req.body;

  try{

    // ❌ evitar que ya tenga pareja
    const [existente] = await db.query(
      "SELECT * FROM parejas WHERE usuario1_id = ? OR usuario2_id = ?",
      [userId,userId]
    );

    if(existente.length > 0){
      return res.json({error:"Ya estás en una pareja"});
    }

    const codigo = generarCodigo();

    await db.query(
      "INSERT INTO parejas (usuario1_id,codigo) VALUES (?,?)",
      [userId,codigo]
    );

    res.json({codigo});

  }catch(error){
    console.error(error);
    res.status(500).json({error:"Error al crear pareja"});
  }

});


/* =========================
   UNIRSE A PAREJA
========================= */

router.post("/unirse", async (req,res)=>{

  const { userId,codigo } = req.body;

  try{

    const [rows] = await db.query(
      "SELECT * FROM parejas WHERE codigo = ?",
      [codigo]
    );

    if(rows.length === 0){
      return res.json({error:"Código inválido"});
    }

    const pareja = rows[0];

    // ❌ evitar unirse a su propio código
    if(pareja.usuario1_id === userId){
      return res.json({error:"No podés unirte a tu propio código"});
    }

    // ❌ evitar sobreescribir usuario2
    if(pareja.usuario2_id){
      return res.json({error:"Esta pareja ya está completa"});
    }

    // ❌ evitar que ya tenga pareja
    const [existente] = await db.query(
      "SELECT * FROM parejas WHERE usuario1_id = ? OR usuario2_id = ?",
      [userId,userId]
    );

    if(existente.length > 0){
      return res.json({error:"Ya estás en una pareja"});
    }

    await db.query(
      "UPDATE parejas SET usuario2_id = ? WHERE codigo = ?",
      [userId,codigo]
    );

    res.json({message:"Pareja vinculada ❤️"});

  }catch(error){
    console.error(error);
    res.status(500).json({error:"Error al unirse"});
  }

});

module.exports = router;

