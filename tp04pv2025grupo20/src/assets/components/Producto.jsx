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

  const handleAddProduct = (newProductData) => {
    const newProductWithId = { ...newProductData, id: nextId++, show: true };
    setProductos([...productos, newProductWithId]);
  };

  return (
    <div className="container">
      <ProductForm setProductos={handleAddProduct} productos={productos} />
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
        setEditingProduct={setEditingProduct}
        setNombre={setNombre}
        setMarca={setMarca}
        setPrecioUnitario={setPrecioUnitario}
        setDescuento={setDescuento}
        setStock={setStock}
      />
    </div>
  );
}

export default Producto;