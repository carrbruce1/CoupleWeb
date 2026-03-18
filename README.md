# ❤️ Couple App

Aplicación web pensada para parejas, donde dos usuarios pueden conectarse mediante un código único y compartir una experiencia personalizada.

---

## 🚀 Funcionalidades

* ✅ Registro de usuario
* ✅ Login con autenticación
* ✅ Guardado de sesión con LocalStorage
* ✅ Generación de código de pareja
* ✅ Unión a una pareja mediante código
* 🔜 Perfil personalizado (en desarrollo)
* 🔜 Juegos y dinámicas para parejas

---

## 🧠 Cómo funciona

1. Un usuario se registra o inicia sesión
2. Puede generar un código único de pareja
3. Comparte ese código con su pareja
4. La otra persona lo ingresa
5. Ambos quedan vinculados en el sistema

---

## 🛠️ Tecnologías utilizadas

### Frontend

* HTML
* CSS
* JavaScript (Vanilla)
* LocalStorage

### Backend

* Node.js
* Express
* MySQL
* bcrypt

---

## 📂 Estructura del proyecto

```
/proyecto
│
├── /frontend
│   ├── index.html
│   ├── dashboard.html
│   └── /js
│       ├── auth.js
│       └── dashboard.js
│
├── /backend
│   ├── app.js
│   ├── db.js
│   └── /routes
│       ├── auth.js
│       └── parejas.js (en desarrollo)
```

---

## ⚙️ Instalación

### 1. Clonar el proyecto

```
git clone https://github.com/tu-usuario/couple-app.git
cd couple-app
```

---

### 2. Backend

```
cd backend
npm install
node app.js
```

---

### 3. Base de datos (MySQL)

Crear base de datos:

```
CREATE DATABASE couple_app;
```

Tabla de usuarios:

```
CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  email VARCHAR(100),
  password VARCHAR(255)
);
```

---

### 4. Frontend

Abrir:

```
index.html
```

---

## 🔐 Autenticación

* Las contraseñas se encriptan con bcrypt
* El usuario se guarda en LocalStorage tras login
* Se mantiene la sesión activa en el dashboard

---

## 🧪 Cómo probar

* Crear dos cuentas distintas
* Abrir una en modo incógnito
* Generar código en una cuenta
* Ingresarlo en la otra

---

## ❗ Problemas comunes

### "unirse is not defined"

➡️ La función no está definida en `dashboard.js`

### "undefined is not valid JSON"

➡️ No hay usuario en LocalStorage

### 404 en rutas

➡️ La ruta no existe en el backend

---

## 🔥 Próximas mejoras

* 💑 Sistema completo de parejas en base de datos
* 🎮 Juegos interactivos
* 💌 Cartas y mensajes
* 📱 Diseño tipo app
* 🔔 Notificaciones en tiempo real

---

## 👨‍💻 Autor

Proyecto desarrollado por Bruce Carr

---

## 💡 Idea

Este proyecto nace como una app personal para parejas, pero puede escalar a un producto real con múltiples funcionalidades sociales.

---

## ⭐ Recomendación

Si estás viendo este proyecto, podés usarlo como base para:

* apps sociales
* sistemas con login
* proyectos con frontend + backend
* portfolio profesional

---
