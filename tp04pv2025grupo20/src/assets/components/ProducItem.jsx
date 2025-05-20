// Para representar cada producto individual.
import { useCallback } from "react";
import '../css/ProductItem.css'; // Importa el CSS para el item del producto

function ProductItem({ product, productos, setProductos, iniciarEdicion }) {

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

  // const iniciarEdicion = useCallback((producto) => {
  //   setEditingProduct(producto);
  //   setNombre(producto.nombre); 
  //   setMarca(producto.marca);   
  //   setPrecioUnitario(producto.precioUnitario);
  //   setDescuento(producto.descuento);
  //   setStock(producto.stock);

  // }, [product, setEditingProduct, setNombre, setMarca, setPrecioUnitario, setDescuento, setStock]);

  
  return (
    <tr className="product-table">
      <td>{product.id}</td>
      <td>{product.nombre}</td>
      <td>{product.marca}</td>
      <td>${product.precioUnitario}</td>
      <td>{product.descuento}%</td>
      <td>${product.precioConDescuento?.toFixed(2)}</td>
      <td>{product.stock}</td>
      <td className="actions">
        <button onClick={() => iniciarEdicion(product)} className="edit-button">Editar</button>
        <button onClick={() => eliminarProducto(product.id)} className="delete-button">Eliminar</button>
      </td>
    </tr>
  );
};

export default ProductItem;