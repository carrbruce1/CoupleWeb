const API = "http://localhost:3000";

let user = null;

// traer user seguro
const storedUser = localStorage.getItem("user");

if (!storedUser || storedUser === "undefined") {
  alert("Tenés que iniciar sesión");
  window.location.href = "login.html";
} else {
  try {
    user = JSON.parse(storedUser);
  } catch (e) {
    console.error("JSON roto:", e);
    localStorage.clear();
    window.location.href = "login.html";
  }
}


// cuando carga la página
window.onload = () => {
  if (user) {
    document.getElementById("bienvenida").innerText =
      "Hola " + (user.apodo || user.nombre) + " ❤️";
  }
};


/* ================= CREAR PAREJA ================= */
async function crearPareja(){

if(!user){
alerta("error", "Usuario no válido");
return;
}

try{

const res = await fetch(API + "/parejas/crear-pareja",{
method:"POST",
headers:{ "Content-Type":"application/json" },
body: JSON.stringify({
userId: user.id
})
});

const data = await res.json();

document.getElementById("codigo").innerText =
"Tu código es: " + data.codigo;

alerta("success", "Código generado ❤️");

}catch(error){
console.error(error);
alerta("error", "Error al crear código");
}

}


/* ================= GUARDAR PERFIL ================= */
async function guardarPerfil(){

if(!user){
alerta("error", "Usuario no válido");
return;
}

const apodo = document.getElementById("apodo").value;
const fechaRelacion = document.getElementById("fechaRelacion").value;

try{

await fetch(API + "/users/update",{
method:"PUT",
headers:{ "Content-Type":"application/json" },
body: JSON.stringify({
id: user.id,
apodo,
fechaRelacion
})
});

// actualizar local
user.apodo = apodo;
user.fechaRelacion = fechaRelacion;
localStorage.setItem("user", JSON.stringify(user));

alerta("success", "Perfil actualizado ❤️");

document.getElementById("bienvenida").innerText =
"Hola " + (user.apodo || user.nombre) + " ❤️";

}catch(error){
console.error(error);
alerta("error", "Error al guardar");
}

}


// UNIRSE ASHEEE

async function unirse(){

const codigo = document.getElementById("codigoPareja").value;

if(!codigo){
alert("Ingresá un código");
return;
}

const user = JSON.parse(localStorage.getItem("user"));

try{

const res = await fetch("http://localhost:3000/parejas/unirse",{
method:"POST",
headers:{ "Content-Type":"application/json" },
body: JSON.stringify({
userId: user.id,
codigo: codigo
})
});

const data = await res.json();

if(data.error){
alert(data.error);
}else{
alert("Te uniste correctamente ❤️");
}

}catch(error){

console.error(error);
alert("Error al unirse");

}

}