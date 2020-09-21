// Agregar el nombre en el perfil

const perfil = document.getElementById('perfilNombre')
perfil.innerHTML=localStorage.getItem('perfil')

//Agregar una lista en el perfil
const agregar=document.getElementById('agregar')
const agregarLista=document.getElementById('lista');
agregarLista.addEventListener('click',()=>{
    const agregar=document.getElementById('agregar')
    agregar.innerHTML+=`<li><a href="#" class="li">Lista</a></li>`
})

//Tachar las tareas hechas --> NO funcional
// const li =document.querySelectorAll(".li")

// const tachar=()=>{
//     li.className+= 'tachar'
// }


// for(let i=0;i<li.length;i++){
//     li[i].addEventListener('click',tachar)
// }



//Agregar texto a la barrra
const letra = document.querySelectorAll(".letra")

const mensaje = document.getElementById("mensaje")

const teclado = (event) =>{
    const texto=event.target.innerText
    if(texto == 'Espacio'){
        mensaje.innerHTML +='&nbsp'
    }else
    if(texto == '-'){
        mensaje.innerHTML = mensaje.innerText.slice(0,-1)
    }else{
        mensaje.innerText += texto
    }
}

for(let i=0; i<letra.length;i++){
    letra[i].addEventListener('click',teclado)
}

aceptar.addEventListener('click',()=>{
    const mensajeFinal=mensaje.innerHTML
    const tarea=document.getElementById('tarea')
    tarea.innerHTML+=`<li>`+mensajeFinal+`</li>`
    mensaje.innerHTML='';
})