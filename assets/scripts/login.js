//Traer formulario de login DOM
const form = document.getElementById("form");
let lista = [];
lista = JSON.parse(localStorage.getItem("usuario"));
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const Lcorreo = document.getElementById("Lcorreo").value;
  const Lcontraseña = document.getElementById("Lcontraseña").value;

  const alertCorreo = document.getElementById("alertCorreo");
  const alertContraseña = document.getElementById("alertContraseña");

  if (Lcorreo == "") {
    alertCorreo.innerText = "Por favor llene el campo";
  }
  if (Lcontraseña == "") {
    alertContraseña.innerText = "Por favor llene el campo";
  }
  if (Lcorreo != "" && Lcontraseña != "") {
    validardatos(Lcorreo, Lcontraseña);
  }
});
//Comparar los datos con los del localStorage
const validardatos = (Lcorreo, Lcontraseña) => {
  for (let i = 0; i <= lista.length; i++) {
    const correo = lista[i].correo;
    const contraseña = lista[i].contraseña;
    const nombre = lista[i].nombre;
    if (correo == Lcorreo && contraseña == Lcontraseña) {
      localStorage.setItem("perfil", nombre);
      document.getElementById("alert").innerText = "Hecho";
      window.location = "../html/to-do.html";
      agregarnombre(nombre);
    } else {
      document.getElementById("alert").innerText = "Verifique crendenciales";
    }
  }
};
