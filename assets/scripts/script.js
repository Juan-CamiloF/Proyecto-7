//Traer el formulario de regristro
const form = document.getElementById("form");
let lista = [];
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const inombre = document.getElementById("nombre").value;
  const icorreo = document.getElementById("correo").value;
  const icontraseña = document.getElementById("contraseña").value;

  const alertNombre = document.getElementById("alertNombre");
  const alertCorreo = document.getElementById("alertCorreo");
  const alertContraseña = document.getElementById("alertContraseña");

  if (inombre == "") {
    alertNombre.innerText = "Por favor llene el campo";
  }
  if (icorreo == "") {
    alertCorreo.innerText = "Por favor llene el campo";
  }
  if (icontraseña == "") {
    alertContraseña.innerText = "Por favor llene el campo";
  }
  if (inombre != "" && icorreo != "" && icontraseña != "") {
    let listaDeLocalS = JSON.parse(localStorage.getItem("usuario"));
    if(!listaDeLocalS){
        swal("Registro exitoso!", "", "success");
          const usuario = {
            nombre: inombre,
            correo: icorreo,
            contraseña: icontraseña,
          };
          guardarStorage(usuario);
          setTimeout(llevarAInicio,3000);
    }
    if(listaDeLocalS) {
      for (let i = 0; i < listaDeLocalS.length; i++) {
        if (icorreo == listaDeLocalS[i].correo) {
            swal("El correo ya existe!", "", "error");
        }else{
          swal("Registro exitoso!", "", "success");
          const usuario = {
            nombre: inombre,
            correo: icorreo,
            contraseña: icontraseña,
          };
          guardarStorage(usuario);
          setTimeout(llevarAInicio,2000);
        }
      }
    }
  }
});

//Guardar en el LS
const guardarStorage = (usuario) => {
  if (localStorage.getItem("usuario") == null) {
    lista.push(usuario);
    const usuarioStorage = JSON.stringify(lista);
    localStorage.setItem("usuario", usuarioStorage);
  } else {
    lista = JSON.parse(localStorage.getItem("usuario"));
    lista.push(usuario);
    const usuarioStorage = JSON.stringify(lista);
    localStorage.setItem("usuario", usuarioStorage);
  }
};

//Levar al inicio de sesion
function llevarAInicio(){
    window.location.href = "./assets/html/login.html";
}