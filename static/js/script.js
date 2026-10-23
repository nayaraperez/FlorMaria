// 1. Al hacer click en "Iniciar Sesión", muestra la alerta con bienvenida
let botonLogin = document.getElementById("btn-login");

botonLogin.addEventListener("click", function () {
    alert("Bienvenido a la tienda de flores");
});


// 2. Al pasar el cursor sobre "Envía Flores", el texto cambia a "Envía Bouquets"
let enlaceEnviaFlores = document.getElementById("envia-flores");

enlaceEnviaFlores.addEventListener("mouseover", function () {
    this.innerText = "Envía Bouquets";
});

enlaceEnviaFlores.addEventListener("mouseout", function () {
    this.innerText = "Envía Flores";
});


// 3. Al hacer click en los botones "Comprar", desaparece ese botón
let botonesComprar = document.querySelectorAll(".btn_comprar");

for (let i = 0; i < botonesComprar.length; i++) {
    botonesComprar[i].addEventListener("click", function () {
        this.style.display = "none";
    });
}