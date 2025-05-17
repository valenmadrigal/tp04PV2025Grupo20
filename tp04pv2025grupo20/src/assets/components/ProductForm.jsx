import React, { useState, useEffect, useMemo, useCallback } from 'react';
import '../css/productForm.css'
//AGREGAR , MODIFICAR
 function ProductForm({setProductos , productos}) {
  const [editingProduct, setEditingProduct] = useState(null);
  const [descripcion, setDescripcion] = useState('');
  const [precioUnitario, setPrecioUnitario] = useState('');
  const [descuento, setDescuento] = useState('');
  const [stock, setStock] = useState('');
//Una vez, después de que el componente ProductForm se renderice por primera vez.
//En cada renderizado posterior del componente solo si el array products ha sido modificado 
// (es decir, se ha creado un nuevo array products a través de setProducts). Esto ocurrirá después de agregar, editar o eliminar un producto
  // useEffect(() => {
  //  alert('La lista de productos ha cambiado:', products);
  //     console.log('La lista de productos ha cambiado:', products);
  // }, [productos]);

  //CALCULA EL DESCUENTO
  const calcularPrecioConDescuento = (precio, descuento) => {
    if (!precio || !descuento) {
      return 0;
    }
    return precio * (1 - descuento / 100);
  }
// actualizar el estado correspondiente cada vez que el usuario escribe algo en alguno de los campos del formulario 
// (Descripción, Precio Unitario, Descuento, Stock).
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    //de acuerdo al name busca lo que debe actualizar
    // por value cambia su valor
    switch (name) {
      case 'descripcion':
        setDescripcion(value);
        break;
      case 'precioUnitario':
        setPrecioUnitario(value ? parseFloat(value) : '');
        break;
      case 'descuento':
        setDescuento(value ? parseFloat(value) : '');
        break;
      case 'stock':
        setStock(value ? parseInt(value) : '');
        break;
      default:
        break;
    }
  };

  const agregarProducto = useCallback(() => {
    //Validar que todos los campos requeridos estén llenos.
    if (!descripcion || !precioUnitario || descuento === '' || stock === '') {
      alert('Por favor, completa todos los campos.');
      return;
    }
    //Crear un nuevo objeto de producto con los datos del formulario,
    //  generando un id único y calculando el precio con descuento.
    const nuevoProducto = {
      id: Date.now(),
      descripcion,
      precioUnitario: parseFloat(precioUnitario),
      descuento: parseFloat(descuento),
      precioConDescuento: calcularPrecioConDescuento(parseFloat(precioUnitario), parseFloat(descuento)),
      stock: parseInt(stock),
       show: true, //VALOR AGREGADO A CADA PRODUCTO AL AGREGARLO
    };
    //se actualiza el estado que contiene la lista de productos (products).
    //Se utiliza el operador spread (...) para crear una nueva copia del array products existente. 
    // Luego, se agrega el nuevoProducto al final de esta nueva copia.
    setProductos([...productos, nuevoProducto]);//SE RENDERIZA POR EL SetProducts
    setDescripcion('');//se limpia todas los imputs
    setPrecioUnitario('');
    setDescuento('');
    setStock('');
  }, [descripcion, precioUnitario, descuento, stock, productos, calcularPrecioConDescuento]);

//
// //SE EJECUTA AL hacer CLICK en el botón "Editar" de un producto específico en la lista de productos.
//   const iniciarEdicion = useCallback((producto) => {
//     setEditingProduct(producto);
//     setDescripcion(producto.descripcion);
//     setPrecioUnitario(producto.precioUnitario);
//     setDescuento(producto.descuento);
//     setStock(producto.stock);
    
//   }, []);


  //GUARDA LA EDICION
  const guardarEdicion = useCallback(() => {
    //VERIFICA Q NO ESTEN VACIOS
    if (!editingProduct || !descripcion || !precioUnitario || descuento === '' || stock === '') {
      alert('Por favor, completa todos los campos.');
      return;
    }
    // SE INCLUYE DE NUEVO EL PRODUCTO MODIFICADO 
    const nuevosProductos = productos.map((producto) =>
      //MANTENIENDO IGUAL EL ID
      producto.id === editingProduct.id
        ? {
            ...producto,
            descripcion,
            precioUnitario: parseFloat(precioUnitario),
            descuento: parseFloat(descuento),
            precioConDescuento: calcularPrecioConDescuento(parseFloat(precioUnitario), parseFloat(descuento)),
            stock: parseInt(stock),
          }
        : producto
    );
    // SE SETEAN LOS IMPUTS A VACIO Y SE VUELVE A RENDERIZAR
    setProductos(nuevosProductos);
    setEditingProduct(null);
    setDescripcion('');
    setPrecioUnitario('');
    setDescuento('');
    setStock('');
  }, [editingProduct, descripcion, precioUnitario, descuento, stock, productos, calcularPrecioConDescuento]);



  return (
    <div className="product-form-container">
      <h2>{editingProduct ? 'Editar Producto' : 'Agregar Nuevo Producto'}</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          editingProduct ? guardarEdicion() : agregarProducto();
        }}
      >
        <div>
          <label htmlFor="descripcion">Descripción:</label>
          <input
            type="text"
            id="descripcion"
            name="descripcion"
            value={descripcion}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="precioUnitario">Precio Unitario:</label>
          <input
            type="number"
            id="precioUnitario"
            name="precioUnitario"
            value={precioUnitario}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="descuento">Descuento (%):</label>
          <input
            type="number"
            id="descuento"
            name="descuento"
            value={descuento}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="stock">Stock:</label>
          <input
            type="number"
            id="stock"
            name="stock"
            value={stock}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">{editingProduct ? 'Guardar Cambios' : 'Agregar Producto'}</button>
        {editingProduct && (
          <button type="button" onClick={() => setEditingProduct(null)}>
            Cancelar Edición
          </button>
        )}
      </form>

    </div>
  );
};

export default ProductForm;