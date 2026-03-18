const API = "http://localhost:3000/auth";

/* ================= REGISTER ================= */
async function register(){

const nombre = document.getElementById("nombre").value.trim();
const email = document.getElementById("email").value.trim();
const password = document.getElementById("password").value.trim();

if(!nombre || !email || !password){
alerta("error", "Completa todos los campos ⚠️");
return;
}

if(!email.includes("@")){
alerta("error", "Email inválido ❌");
return;
}

if(password.length < 4){
alerta("error", "Contraseña muy corta 🔒");
return;
}

try{

toast("info", "Creando cuenta...");

const res = await fetch(API + "/register",{
method:"POST",
headers:{ "Content-Type":"application/json" },
body: JSON.stringify({nombre,email,password})
});

const data = await res.json();

if(data.error){
alerta("error", data.error);
return;
}

// GUARDAR USER CORRECTAMENTE
localStorage.setItem("user", JSON.stringify(data.user));

alerta("success", "Cuenta creada ❤️");

setTimeout(()=>{
window.location.href = "dashboard.html";
},1000);

}catch(error){
console.error(error);
alerta("error", "Error de conexión");
}

}


/* ================= LOGIN ================= */
async function login(){

const email = document.getElementById("email").value.trim();
const password = document.getElementById("password").value.trim();

if(!email || !password){
alerta("error", "Completa los campos ⚠️");
return;
}

try{

toast("info", "Ingresando...");

const res = await fetch(API + "/login",{
method:"POST",
headers:{ "Content-Type":"application/json" },
body: JSON.stringify({email,password})
});

const data = await res.json();

if(data.error){
alerta("error", data.error);
return;
}

// GUARDAR USER CORRECTAMENTE
localStorage.setItem("user", JSON.stringify(data.user));

alerta("success", "Bienvenido ❤️");

setTimeout(()=>{
window.location.href = "dashboard.html";
},1000);

}catch(error){
console.error(error);
alerta("error", "Error del servidor");
}

}