//Funcion 1. Cambiar color de fondo
function cambiarFondo() {
    document.body.style.backgroundColor = "yellow";
}

//Funcion 2. Cambiar textos
function cambiarTexto() {
    document.getElementById("texto").innerHTML = "Este es un nuevo texto";
    document.getElementById("texto").innerHTML = "Este es un nuevo texto";
    document.getElementById("texto").innerHTML = "Este es un nuevo texto";
}

//Funcion 3. Comprobar numeros
function comprobarNumero() {
    let numero = document.getElementById("numero").value;
    let resutado = document.getElementById("resultado");
    if (numero > 10 {
        resutado.innerHTML = "El número es mayor a 10";
    } else if (numero < 10) {
        resutado.innerHTML = "El número es menor a 10";
    } else if (numero == 10) {
        resutado.innerHTML = "El número es igual a 10";
    } else {
        resutado.innerHTML = "El valor ingresado no es un número";
    }
}

//Funcion 4. Mostrar un objeto con nombre, edad y correo.
function mostrarObjeto() {
    let objeto = {
        nombre: "Martin Ramirez",
        edad: 20,
        correo: "correoexample@correo.com"
    };
