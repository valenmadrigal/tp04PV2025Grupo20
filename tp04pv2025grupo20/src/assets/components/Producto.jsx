import { useState,useEffect } from "react";
import Formulario from  './ProductForm.jsx';
import Lista from './ProductList.jsx';

function Producto(){
    const[productos, setProductos] = useState([]);

useEffect(() => {
    console.log("productos actualizados", productos);
    
},[productos]);

const agregarProducto = (producto) => {
  setProductos(prev => [...prev, producto]);
};
  return (
    <div className="container">
      <h1>Gestión de Productos</h1>
      <Formulario onAgregar={agregarProducto} />
      <Lista productos={productos} />
    </div>
  );
}

export default Producto;