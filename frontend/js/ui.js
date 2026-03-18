function alerta(tipo, mensaje){

Swal.fire({
icon: tipo,
title: mensaje,
background: "#1f1f1f",
color: "#fff",
confirmButtonColor: "#ec4899",
confirmButtonText: "Ok ❤️"
});

}

function toast(tipo, mensaje){

Swal.fire({
toast: true,
position: "top-end",
icon: tipo,
title: mensaje,
showConfirmButton: false,
timer: 2000,
timerProgressBar: true,
background: "#1f1f1f",
color: "#fff"
});

}

function alerta(tipo, mensaje){

Swal.fire({
icon: tipo,
title: mensaje,
background: "#1f1f1f",
color: "#fff",
confirmButtonColor: "#ec4899"
});

}

function toast(tipo, mensaje){

Swal.fire({
toast: true,
position: "top-end",
icon: tipo,
title: mensaje,
showConfirmButton: false,
timer: 2000,
timerProgressBar: true,
background: "#1f1f1f",
color: "#fff"
});

}