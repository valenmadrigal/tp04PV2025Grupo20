// Para representar cada producto individual.
import { useCallback, useState } from "react";
import '../css/ProductItem.css'; // Importa el CSS para el item del producto

function ProductItem({ product, productos, setProductos }) {
  // guardamos por defecto el product a editar en productToEdit
  const [productToEdit, setProductToEdit] = useState(product)
  const [showInputs, setShowInputs] = useState(false)

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

  
  // Se puede hacer un service
  const calcularPrecioConDescuento = (precio, descuento) => {
    if (!precio || !descuento) {
      return 0;
    }
    return precio * (1 - descuento / 100);
  }

  const iniciarEdicion = () => {
    setShowInputs(!showInputs)

  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedValue = name === 'precioUnitario' || name === 'descuento' ? parseFloat(value) || 0 : value;
    const updatedProduct = {
      ...productToEdit,
      [name]: updatedValue,
    };
    updatedProduct.precioConDescuento = calcularPrecioConDescuento(
      parseFloat(updatedProduct.precioUnitario),
      parseFloat(updatedProduct.descuento)
    );
    setProductToEdit(updatedProduct);
  };


  const handleSubmit = () => {
    setProductos((prevProd) => prevProd.map((prod) => {
      if (prod.id === product.id) {
        return prod = productToEdit
      } else {
        return prod
      }
    }))
  }
  return (
    <>

      <tr className="product-table">
        <td>{product.id}</td>
        <td>{product.nombre}</td>
        <td>{product.marca}</td>
        <td>${product.precioUnitario}</td>
        <td>{product.descuento}%</td>
        <td>${product.precioConDescuento?.toFixed(2)}</td>
        <td>{product.stock}</td>
        <td className="actions">
          <button onClick={() => iniciarEdicion()} className="edit-button">Editar</button>
          <button onClick={() => eliminarProducto(product.id)} className="delete-button">Eliminar</button>
        </td>


      </tr>
      {showInputs && (

        <tr htmlFor="">
          <td htmlFor="">
            Nombre :
            <input onChange={handleChange} name="nombre" type="text" value={productToEdit.nombre} placeholder={product.nombre} />
          </td>
          <td htmlFor="">
            Marca :
            <input onChange={handleChange} name="marca" type="text" value={productToEdit.marca} placeholder={product.marca} />
          </td>
          <td htmlFor="">
            Precio :
            <input onChange={handleChange} name="precioUnitario" type="number" value={productToEdit.precioUnitario} placeholder={product.precioUnitario} />
          </td>
          <td htmlFor="">
            Descuento :
            <input onChange={handleChange} name="descuento" type="number" value={productToEdit.descuento} placeholder={product.descuento} />
          </td>
          <td htmlFor="">
            Stock :
            <input onChange={handleChange} name="stock" type="number" value={productToEdit.stock} placeholder={product.stock} />
          </td>
          <td>
            <button onClick={handleSubmit} > Guardar </button>
          </td>
        </tr>
      )}

    </>
  );
};

export default ProductItem;