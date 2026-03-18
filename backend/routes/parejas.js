const express = require("express");
const router = express.Router();
const db = require("../db");

function generarCodigo() {
  return Math.random().toString(36).substring(2,8).toUpperCase();
}

/* crear pareja */

router.post("/crear-pareja", async (req,res)=>{

  const { userId } = req.body;

  const codigo = generarCodigo();

  await db.query(
    "INSERT INTO parejas (usuario1_id,codigo) VALUES (?,?)",
    [userId,codigo]
  );

  res.json({codigo});

});


/* unirse a pareja */

router.post("/unirse", async (req,res)=>{

  const { userId,codigo } = req.body;

  const [rows] = await db.query(
    "SELECT * FROM parejas WHERE codigo = ?",
    [codigo]
  );

  if(rows.length === 0){
    return res.json({error:"Codigo invalido"});
  }

  await db.query(
    "UPDATE parejas SET usuario2_id = ? WHERE codigo = ?",
    [userId,codigo]
  );

  res.json({message:"Pareja vinculada ❤️"});

});

module.exports = router;

