// import { useState,useEffect } from "react";
import ProductForm from  './ProductForm.jsx';
// import ProducItem from  './ProductItem.jsx';
// import SearchBar from  './SearchBar.jsx';
// import ProductList from  './ProductList.jsx';


function Producto(){
//     const[productos, setProductos] = useState([]);

// useEffect(() => {
//     console.log("productos actualizados", productos);
    
// },[productos]);

// const agregarProducto = (producto) => {
//   setProductos(prev => [...prev, producto]);
// };
  return (
    <div className="container">
      <h1>Gestión de Productos</h1>
      <ProductForm />
      {/* <Lista productos={productos} /> */}
    </div>
  );
}

export default Producto;