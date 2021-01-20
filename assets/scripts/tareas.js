// Agregar el nombre en el perfil
const perfil = document.getElementById("perfilNombre");
perfil.innerHTML = localStorage.getItem("perfil");

//Agregar una lista en el perfil
const agregar = document.getElementById("agregar");
const agregarLista = document.getElementById("lista");
let iterador = 0;
//Evento para agregar la lista
agregarLista.addEventListener("click", () => {
  (async () => {
    const { value: text } = await Swal.fire({
      input: "textarea",
      inputLabel: "Lista",
      inputPlaceholder: "Escriba su lista aquí",
      inputAttributes: {
        "aria-label": "Type your message here",
      },
      showCancelButton: true,
    });
    if (text) {
      Swal.fire(text);
    }
    let lista = text;
    if (lista != undefined && lista != "") {
      if (iterador < 4) {
        
        agregar.innerHTML += `<li><p class="li" id="${iterador}"  onclick="tachar(${iterador})" >${lista}</p></li>`;
        iterador++;
      }
    }
  })();
});
//Eliminar las listas
const borrarListas = document.getElementById("borrarLista");
borrarListas.addEventListener("click",()=>{
  const agregar = document.getElementById("agregar");
  agregar.innerHTML = ""
})

//Agregar texto a la barrra
const letra = document.querySelectorAll(".letra");
const mensaje = document.getElementById("mensaje");
//Funcion del teclado para escribir
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
//Enviar cada tecla a la funcion teclado
for (let i = 0; i < letra.length; i++) {
  letra[i].addEventListener("click", teclado);
}

//Agregar la tarea a la barra inferior con el btn aceptar
const aceptar = document.getElementById("aceptar");
let id = 0;
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

//Tachar las tareas de la barra inferior
function tachar(id) {
  let tachar = document.getElementById(id);
  tachar.className = "tachar";
}

//Borrar las tareas

const btnBorrar = document.getElementById("borrar");
btnBorrar.addEventListener("click", () => {
  const tarea = document.getElementById("tarea");
  tarea.innerHTML = "";
});
