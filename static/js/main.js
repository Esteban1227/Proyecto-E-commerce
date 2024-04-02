const pedirProductos = async () => {
    const respuesta = await fetch('/api/get/productos');
    const data = await respuesta.json();
    return data;
}

function crearCard(producto) {
    const rutaBaseUpload = window.rutaStaticUpload; // Ruta relativa desde la ubicación del script hasta la carpeta upload
    const rutaBaseAssets = window.rutaStaticAssets; // Ruta relativa desde la ubicación del script hasta la carpeta upload
    // Crear el contenedor principal
    const contenedorProducto = document.createElement('div');
    contenedorProducto.classList.add('contenedor_producto');

    // Crear el contenedor de la imagen
    const contenedorImagen = document.createElement('div');
    contenedorImagen.classList.add('contenedor_producto_imagen');
    
    // Crear la imagen
    const img = document.createElement('img');
    img.classList.add('contenedor_producto_imagen_img');
    img.src = rutaBaseUpload + producto.img_producto; // Concatenar la ruta base con el nombre de la imagen
    img.alt = producto.nombre; // Suponiendo que en tu JSON cada producto tiene una propiedad "nombre" que contiene el nombre del producto
    contenedorImagen.appendChild(img); // Agregar la imagen al contenedor de la imagen

    // Crear el contenedor del nombre del producto
    const contenedorNombre = document.createElement('div');
    contenedorNombre.classList.add('contenedor_producto_nombre');

    // Crear el span para el nombre del producto
    const nombreAncla = document.createElement('a');
    nombreAncla.href =`/producto/${producto.id}`
    const nombreSpan = document.createElement('span');
    nombreSpan.classList.add('contenedor_producto_nombre_span');
    nombreSpan.textContent = producto.nombre; // Asignar el nombre del producto
    nombreAncla.appendChild(nombreSpan)
    contenedorNombre.appendChild(nombreAncla); // Agregar el span al contenedor del nombre del producto

    // Crear el contenedor de la compra
    const contenedorCompra = document.createElement('div');
    contenedorCompra.classList.add('contenedor_producto_compra');

    // Crear el span para el precio
    const precioSpan = document.createElement('span');
    precioSpan.classList.add('contenedor_producto_compra_precio');
    precioSpan.textContent = producto.precio; // Asignar el precio del producto
    contenedorCompra.appendChild(precioSpan); // Agregar el span al contenedor de la compra

    // Crear la imagen del carrito
    const carritoImg = document.createElement('img');
    carritoImg.classList.add('contenedor_producto_compra_carrito_img');
    carritoImg.src = rutaBaseAssets + "btnCarrito.png"; // Asignar la URL de la imagen del carrito
    carritoImg.alt = 'carrito'; // Texto alternativo
    contenedorCompra.appendChild(carritoImg); // Agregar la imagen del carrito al contenedor de la compra

    // Agregar todos los elementos al contenedor principal
    contenedorProducto.appendChild(contenedorImagen);
    contenedorProducto.appendChild(contenedorNombre);
    contenedorProducto.appendChild(contenedorCompra);

    // Devolver la card completa
    return contenedorProducto;
}

const mostrarImagenes = async () => {
    const productos = await pedirProductos();
    const contenedor = document.getElementById('contedor_productos'); // Supongamos que tienes un div con id "contenedor-imagenes" donde quieres mostrar las imágenes
    

    productos.forEach(producto => {
        cardProducto = crearCard(producto)
       
        contenedor.appendChild(cardProducto); // Agregar la imagen al contenedor
    });
}

// Llama a la función mostrarImagenes para mostrar las imágenes en tu página
mostrarImagenes();

