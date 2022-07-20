const { createStore } = require("redux");
const contador = require("./reducer");
// import las actions
const { incremento, decremento, impar, async } = require("./actions");

// En esta linea creamos nuestro store. Pasandole como parametro nuestro Reducer
var store = createStore(contador);

// Obtenemos el elemento con el id `valor`.
var span = document.getElementById("valor");

// Esta funcion nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:
  var num = store.getState().contador; // getState = {contador:0}
  // Seteamos el numero obtenido como texto dentro del elemento con id 'valor':
  span.innerHTML = num;
}

// Ejecutamos la funcion 'renderContador':
renderContador();
// Nos subscribimos al store pasandole la misma funcion. Asi cada vez que llegue una accion, ejecutamos la funcion:
store.subscribe(() => renderContador());
// Por ultimo, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la accion correspondiente:

var btnIncrement = document.getElementById("incremento");
btnIncrement.onclick = () => store.dispatch(incremento());

var bntDecrement = document.getElementById("decremento");
bntDecrement.onclick = () => store.dispatch(decremento());

var incrementoImpar = document.getElementById("incrementoImpar");
incrementoImpar.onclick = () => store.dispatch(impar());

var incrementoAsync = document.getElementById("incrementoAsync");
incrementoAsync.onclick = () => setTimeout(() => store.dispatch(async()), 1000);

// store ---> state
// reducer ---> fn --> logica --> hace los cambios en el state
// actions ---> objetos ---> describe lo que queremos hacer
// {type: "", payload:} payload por convencion

// btn -->emitir action --> reducer --> cambios en state --> obtenemos un nuevo state
// ---> impacta (o no) en la UI
