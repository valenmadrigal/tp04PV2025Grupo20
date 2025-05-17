import { useState } from 'react';
import ProductForm from  './ProductForm.jsx';
import SearchBar from  './SearchBar.jsx';
import Lista from  './ProductList.jsx';


function Producto(){
   const [productos, setProductos] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  console.log(productos, "productos");

  return (
    <div className="container">
      <ProductForm setProductos={setProductos} productos={productos} />
                  <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} ></SearchBar>
      <Lista searchTerm={searchTerm} setProductos={setProductos} productos={productos} />

    </div>
  );
}

export default Producto;