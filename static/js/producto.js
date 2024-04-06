function crearProducto(producto) {
    const rutaBaseUpload = window.rutaStaticUpload; // Ruta relativa desde la ubicación del script hasta la carpeta upload
    const rutaBaseAssets = window.rutaStaticAssets; // Ruta relativa desde la ubicación del script hasta la carpeta upload
    // Obtener el contenedor principal existente
    const contenedorPrincipal = document.querySelector('.contenedor_pricipal');

    // Crear el contenedor de la imagen principal
    const contenedorImagen = document.createElement('div');
    contenedorImagen.classList.add('contenedor_principal_imgen');

    // Crear la imagen principal
    const img = document.createElement('img');
    img.classList.add('contenedor_principal_imgen_img');
    img.src = rutaBaseUpload + producto.img_producto; // Concatenar la ruta base con el nombre de la imagen
    img.alt = producto.nombre; // Suponiendo que en tu JSON cada producto tiene una propiedad "nombre" que contiene el nombre del producto

    // Agregar la imagen al contenedor de imagen principal
    contenedorImagen.appendChild(img);

    // Crear el contenedor de la información principal
    const contenedorInformacion = document.createElement('div');
    contenedorInformacion.classList.add('contenedor_principal_informacion');

    // Crear el contenedor de la descripción
    const contenedorDescripcion = document.createElement('div');
    contenedorDescripcion.classList.add('contenedor_principal_descripcion');

    // Crear el nombre del producto
    const nombreProducto = document.createElement('span');
    nombreProducto.classList.add('contenedor_principal_descripcion_nombre');
    nombreProducto.textContent = producto.nombre;

    // Crear el párrafo de descripción
    const descripcionProducto = document.createElement('p');
    descripcionProducto.classList.add('contendor_principal_descripcion_parrafo');
    descripcionProducto.textContent = producto.descripcion;

    // Crear el contenedor del contador
    const contenedorContador = document.createElement('div');
    contenedorContador.classList.add('contendor_principal_descripcion_contador');

    // Crear el contenedor del texto del contador
    const contenedorTextoContador = document.createElement('div');
    contenedorTextoContador.classList.add('contendor_principal_descripcion_contador_text');

    // Crear el span de cantidad
    const spanCantidad = document.createElement('span');
    spanCantidad.classList.add('contendor_principal_descripcion_contador_text_span');
    spanCantidad.textContent = `cantidad: ${producto.cantidad}`;

    // Agregar el span al contenedor del texto del contador
    contenedorTextoContador.appendChild(spanCantidad);

    // Crear el contenedor de los botones del contador
    const contenedorBotonesContador = document.createElement('div');
    contenedorBotonesContador.classList.add('contendor_principal_descripcion_contador_botones');

    // Crear el botón de subir
    const botonSubir = document.createElement('img');
    botonSubir.src = rutaBaseAssets + 'subir_boton.png';
    botonSubir.alt = 'subir';

    // Crear el botón de bajar
    const botonBajar = document.createElement('img');
    botonBajar.src = rutaBaseAssets + 'bajar_boton.png';
    botonBajar.alt = 'bajar';

    // Agregar los botones al contenedor de botones del contador
    contenedorBotonesContador.appendChild(botonSubir);
    contenedorBotonesContador.appendChild(botonBajar);

    // Agregar el contenedor del texto del contador y el contenedor de botones del contador al contenedor del contador
    contenedorContador.appendChild(contenedorTextoContador);
    contenedorContador.appendChild(contenedorBotonesContador);

    // Agregar los elementos de la descripción al contenedor de la descripción
    contenedorDescripcion.appendChild(nombreProducto);
    contenedorDescripcion.appendChild(descripcionProducto);
    contenedorDescripcion.appendChild(contenedorContador);

    // Crear el contenedor del botón de agregar al carrito
    const contenedorBotonAgregar = document.createElement('div');
    contenedorBotonAgregar.classList.add('contenedor_principal_descripcion_boton');

    // Crear el span del precio
    const spanPrecio = document.createElement('span');
    spanPrecio.classList.add('contenedor_principal_descripcion_boton_precio');
    spanPrecio.textContent = `Precio: ${producto.precio}`;

    // Crear el botón de agregar al carrito
    const botonAgregar = document.createElement('button');
    botonAgregar.classList.add('contenedor_principal_descripcion_boton_button');
    botonAgregar.textContent = 'agregar al carrito';

    // Agregar el span del precio y el botón de agregar al carrito al contenedor del botón de agregar al carrito
    contenedorBotonAgregar.appendChild(spanPrecio);
    contenedorBotonAgregar.appendChild(botonAgregar);

    // Agregar el contenedor de la descripción y el contenedor del botón de agregar al carrito al contenedor de la información principal
    contenedorInformacion.appendChild(contenedorDescripcion);
    contenedorInformacion.appendChild(contenedorBotonAgregar);

    // Agregar el contenedor de la imagen y el contenedor de la información principal al contenedor principal
    contenedorPrincipal.appendChild(contenedorImagen);
    contenedorPrincipal.appendChild(contenedorInformacion);
}

const pedirProductos = async () => {
        // Obtener la URL actual
    const url = window.location.href;

    // Dividir la URL en partes utilizando '/' como separador
    const partesURL = url.split('/');

    // Obtener el último elemento de las partes, que sería el número en la URL
    const id = partesURL[partesURL.length - 1];
    const respuesta = await fetch(`/api/get/productos/${id}`);
    const data = await respuesta.json();
    return data;
}

const mostrarImagenes = async () => {
    const productos = await pedirProductos();

    productos.forEach(producto => {
        crearProducto(producto)
       
    });
}

// Llama a la función mostrarImagenes para mostrar las imágenes en tu página
mostrarImagenes();
