// Agregar el nombre en el perfil

const perfil = document.getElementById("perfilNombre");
perfil.innerHTML = localStorage.getItem("perfil");

//Agregar una lista en el perfil
const agregar = document.getElementById("agregar");
const agregarLista = document.getElementById("lista");
let i = 0;
agregarLista.addEventListener("click", () => {
  if (i < 4) {
    const agregar = document.getElementById("agregar");
    agregar.innerHTML += `<li><a href="" class="li" id="li">Lista</a></li>`;
    const li = document.getElementById("li");
    i++;
  }
});

//Agregar texto a la barrra
const letra = document.querySelectorAll(".letra");

const mensaje = document.getElementById("mensaje");

const teclado = (event) => {
  const texto = event.target.innerText;
  if (texto == "__") {
    mensaje.innerHTML += "&nbsp";
  } else if (texto == "-") {
    mensaje.innerHTML = mensaje.innerText.slice(0, -1);
  } else {
    mensaje.innerText += texto;
  }
};

for (let i = 0; i < letra.length; i++) {
  letra[i].addEventListener("click", teclado);
}

const aceptar = document.getElementById("aceptar");
let id=0;
aceptar.addEventListener("click", () => {
  let mensajeFinal = mensaje.innerHTML;
  if (mensajeFinal == "") {
    mensajeFinal = "Vacío";
  } else {
    const tarea = document.getElementById("tarea");
    tarea.innerHTML += `<li onclick="tachar(${id})"  id="${id}"> ${mensajeFinal} </li>`;
    mensaje.innerHTML = "";
    id++;
  }
});

function tachar(id){
  let tachar = document.getElementById(id);
  tachar.className = "tachar";
}

//Borrar las tareas

const btnBorrar = document.getElementById("borrar");
btnBorrar.addEventListener("click",()=>{
  const tarea = document.getElementById("tarea");
  tarea.innerHTML = "";
})