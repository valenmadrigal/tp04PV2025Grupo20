
// Para representar cada producto individual.


function ProductItem (props) {

const eliminarProducto = useCallback((id) => {
    const nuevosProductos = products.filter((producto) => producto.id !== id);
    setProducts(nuevosProductos);
  }, [products]);


  //CUANDO SE AACTUALIZA EL ESTADO, SE VUELVE A RENDERIZAR
  // const handleSearchChange = (event) => {
  //   setSearchTerm(event.target.value);

     //CALCULA EL DESCUENTO
  // const calcularPrecioConDescuento = (precio, descuento) => {
  //   if (!precio || !descuento) {
  //     return 0;
  //   }
  //   return precio * (1 - descuento / 100);
  // };
return (
<div> 
    
            {producto.descripcion} - Precio: ${producto.precioUnitario} - Descuento: {producto.descuento}% - Precio con Descuento: ${producto.precioConDescuento.toFixed(2)} - Stock: {producto.stock}
            <button onClick={() => iniciarEdicion(producto)}>Editar</button>
            <button onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
          
</div>

);



};
 export default ProductItem;