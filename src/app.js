/* /* eslint-disable */
/* import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico"; */
const form = document.querySelector("#formulario1");
let arr = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  
  if (form.textCarta.value > 20) {
    form.textCarta.classList.add("is-invalid");
    document.getElementById("error").innerHTML =
      "Máximo 20 cartas";
  } else {
    document.querySelector("body").style.background = colorHEX();
    form.textCarta.classList.remove("is-invalid");
    document.getElementById("espacioCartas").innerHTML = '';
    arr = [];
    document.getElementById("cartasOrdenadasBubbleSort").innerHTML = '';
    for (let index = 0; index < form.textCarta.value; index++) {
      
      let simbolo = generarSimbolo();
      var numeroAletorio = Math.floor(Math.random() * 13) + 1;
      let numeroSimbolo = {"numero": numeroAletorio, "simbolo": simbolo};
      let espacio ="espacioCartas";

      arr.push(numeroSimbolo);
      
      crearCarta(numeroAletorio,simbolo,espacio);
    }
  }
});

function crearCarta (numero,simbolo,espacio){ // 9  // "♥" // "espacioCartas"
  let espacioCartas = document.getElementById(espacio);
  let divCarta = document.createElement("div");
  divCarta.classList.add("card");

  let iconoArriba = document.createElement("div");
  iconoArriba.classList.add("top","icono");
  iconoArriba.innerHTML = simbolo;
  divCarta.appendChild(iconoArriba);

  let valorMedio = document.createElement("div");
  valorMedio.classList.add("center");
  valorMedio.innerHTML = cambiarValor(numero);
  divCarta.appendChild(valorMedio);

  let iconoAbajo = document.createElement("div");
  iconoAbajo.classList.add("bottom","icono");
  iconoAbajo.innerHTML = simbolo;
  divCarta.appendChild(iconoAbajo);
  
  if ( simbolo === "♥" || simbolo === "♦"){
    iconoArriba.classList.add("text-danger");
    valorMedio.classList.add("text-danger");
    iconoAbajo.classList.add("text-danger");
  }

  espacioCartas.appendChild(divCarta);
}

function generarSimbolo (){
  let simbolos = ["♦", "♥", "♠", "♣"];
  var numeroAleatorio = Math.floor(Math.random() * 4);
  var simbolo = simbolos[numeroAleatorio];
  return simbolo;
}

function cambiarValor (valor){
  switch (valor) {
    case 1: return "A";
    case 11: return "J";
    case 12: return "Q";
    case 13: return "K";
    default: return valor;
  }
}

function ordernarCartas(){
  for (let i = arr.length - 1; i > 0; i--) { // hasta que posicion voy a validar
    for (let j = 0; j < i; j++) { // es recorrer el arreglo para validar
      if (arr[j].numero > arr[j + 1].numero) {
        let aux = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = aux;
      }
    }
  }

  document.getElementById("cartasOrdenadasBubbleSort").innerHTML = '';
  for (let i = 0; i < arr.length; i++) {
    const numeroSimbolo = arr[i];
    crearCarta(numeroSimbolo.numero,numeroSimbolo.simbolo,"cartasOrdenadasBubbleSort");
  }
}

function generarLetra(){
	var letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
	var numero = (Math.random()*15).toFixed(0);
	return letras[numero];
}
	
function colorHEX(){
	var color = "";
	for(var i=0;i<6;i++){
		color = color + generarLetra() ;
	}
	return "#" + color;
}

