function seleccionarFormulario(){
    let iniciarSesion = document.querySelector(".contenedor_iniciar_sesion")
    let crearUsuario = document.querySelector(".contenedor_crear_cuenta")
    let contenedorIniciarSesion = document.querySelector(".contenedor_formulario_iniciarSesion")
    let contenedorCrearUsuario = document.querySelector(".contenedor_formulario_crearUsuario")

    iniciarSesion.addEventListener("click", () =>{
        contenedorIniciarSesion.classList.remove("inactivo")
        crearUsuario.classList.remove("activo")
        contenedorCrearUsuario.classList.add("inactivo")
        iniciarSesion.classList.add("activo")
    })
    
    crearUsuario.addEventListener("click", () =>{
        contenedorCrearUsuario.classList.remove("inactivo")
        contenedorIniciarSesion.classList.add("inactivo")
        crearUsuario.classList.add("activo")
        iniciarSesion.classList.remove("activo")
    })
}

seleccionarFormulario()