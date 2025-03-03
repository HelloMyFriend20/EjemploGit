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
    if (numero > 10) {
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
    let info = `Nombre: ${objeto.nombre} <br> Edad: ${objeto.edad} <br> Correo: ${objeto.correo}`;
    document.getElementById("informacionObjeto").innerHTML = info;
}

//Funcion 5. Mostrar una lista de 5 nombres
function mostrarLista() {
    let nombres = ["Martin", "Sofia", "Pedro","Andres","Daniel"];
    let lista = document.getElementById("listaNombres");
    lista.innerHTML = "";

    nombres.forEach((nombre) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}