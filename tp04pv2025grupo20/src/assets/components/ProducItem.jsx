
// Para representar cada producto individual.
import { useCallback } from "react";


function ProductItem({ product, productos, setProductos }) {

const eliminarProducto = useCallback((id) => {
    const productsSinElElementoConId = productos.map((prod) => {
      if (prod.id === id) {
        return { ...prod, show: false };
      } else {
        return prod;
      }
    });
    setProductos(productsSinElElementoConId);
  }, [productos, setProductos]);

  //SE EJECUTA AL hacer CLICK en el botón "Editar" de un producto específico en la lista de productos.
    const iniciarEdicion = useCallback((producto) => {
      setEditingProduct(producto);
      setDescripcion(producto.descripcion);
      setPrecioUnitario(producto.precioUnitario);
      setDescuento(producto.descuento);
      setStock(producto.stock);
      
    }, [product]);
  
  
  
return (
<div> 
    
        {product.descripcion} - Precio: ${product.precioUnitario} - Descuento: {product.descuento}% - Precio con Descuento: ${product.precioConDescuento.toFixed(2)} - Stock: {product.stock}


         <button onClick={() => iniciarEdicion(product)}>Editar</button>
      <button onClick={() => eliminarProducto(product.id)}>Eliminar</button> 
</div>

);s



};
 export default ProductItem;