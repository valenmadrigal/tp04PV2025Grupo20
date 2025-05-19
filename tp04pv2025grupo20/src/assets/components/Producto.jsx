import { useState } from 'react';
import ProductForm from './ProductForm.jsx';
import SearchBar from './SearchBar.jsx';
import Lista from './ProductList.jsx';

let nextId = 1; // Variable para rastrear el próximo ID

function Producto() {
  const [productos, setProductos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchBy, setSearchBy] = useState("nombre");

  const [editingProduct, setEditingProduct] = useState(null);
  const [nombre, setNombre] = useState('');
  const [marca, setMarca] = useState('');
  const [precioUnitario, setPrecioUnitario] = useState('');
  const [descuento, setDescuento] = useState('');
  const [stock, setStock] = useState('');
  console.log(productos, "productos");

  // Función para iniciar la edición, recibe producto y actualiza estados
  const iniciarEdicion = (producto) => {
    setEditingProduct(producto);
    setNombre(producto.nombre);
    setMarca(producto.marca);
    setPrecioUnitario(producto.precioUnitario);
    setDescuento(producto.descuento);
    setStock(producto.stock);
  };

  return (
    <div className="container">
      <ProductForm 
        setProductos={setProductos} 
        productos={productos} 
        editingProduct={editingProduct}
        setEditingProduct={setEditingProduct}
        nombre={nombre}
        setNombre={setNombre}
        marca={marca}
        setMarca={setMarca}
        precioUnitario={precioUnitario}
        setPrecioUnitario={setPrecioUnitario}
        descuento={descuento}
        setDescuento={setDescuento}
        stock={stock}
        setStock={setStock}
      />
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchBy={searchBy}
        setSearchBy={setSearchBy}
      />
      <Lista
        searchTerm={searchTerm}
        setProductos={setProductos}
        productos={productos}
        // Pasamos iniciarEdicion para que el botón "Editar" funcione
        iniciarEdicion={iniciarEdicion} 
      />
    </div>
  );
}

export default Producto;