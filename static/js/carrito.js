function toggleDropdown() {
    document.getElementById("header_carrito").classList.toggle("inactivo");
  }
  
const btnCarrito = document.querySelector(".header_botones_menuCarrito")

btnCarrito.addEventListener("click", () => {
    toggleDropdown()
})