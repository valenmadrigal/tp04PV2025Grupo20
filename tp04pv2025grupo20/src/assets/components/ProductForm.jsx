import { useState } from 'react';
  const [productosOriginales, setProductosOriginales] = useState([]);
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  
function Formulario() {
  const agregarProducto = (event) => {
    event.preventDefault();
    if (descripcion && precio) {
      const nuevoProducto = { descripcion, precio: parseFloat(precio) };
      const nuevosProductos = [...productos, nuevoProducto];
      setProductos(nuevosProductos);
      setProductosOriginales(nuevosProductos);
      setDescripcion('');
      setPrecio('');
      alert("Se Agrego nuevo Producto");
    } else {
      alert("Completa la descripción y el precio");
    }
  };

  return (
    <div>
      {/* ... otros elementos de tu componente ... */}
      <form onSubmit={agregarProducto}>
        <input
          type="text"
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <input
          type="number"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
        <button type="submit">Agregar Producto</button>
      </form>
      {/* ... más elementos para mostrar la lista de productos ... */}
    </div>
  );
}
export default Formulario;