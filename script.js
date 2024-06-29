let intentos = 6;
let diccionario = ['PERRO', 'PASTA', 'SUPER', 'SABIO'];
let palabra = diccionario[Math.floor(Math.random() * diccionario.length)];
function init(){
    console.log('Esto se ejecuta solo cuando se carga la pagina web')
}
function intento(){
    console.log("se intento");
}
const button = document.getElementById("guess-button");
button.addEventListener("click", intentar);
for (let i in palabra){
	console.log(palabra[i]);
}
function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase(); 
    return intento;
}
function intentar(){
    const INTENTO = leerIntento();
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';
    if (INTENTO === palabra ) {
        terminar("<h1>GANASTE!😀</h1>")
        return
    }
    for (let i in palabra){
        if(INTENTO.length!=5){
            terminar("<h1>El intento debe tener 5 letras</h1>")
            return

        }
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i]===palabra[i]){
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'green';
            console.log(INTENTO[i], "VERDE")
        } else if( palabra.includes(INTENTO[i]) ) {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'yellow';
            console.log(INTENTO[i], "AMARILLO")
        } else {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'grey';
            console.log(INTENTO[i], "GRIS")
        }
        ROW.appendChild(SPAN)
    }
		intentos--
        GRID.appendChild(ROW)
    if (intentos==0){
        terminar("<h1>PERDISTE!😖</h1>")
    }
}
function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
  //  INPUT.disabled = true;
   // BOTON.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}



