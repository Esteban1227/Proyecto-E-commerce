export const formatoPrecio = (precio) =>{
    return precio.toLocaleString('es-CO', {
        style: 'currency',
        currency: 'COP'
      });
}