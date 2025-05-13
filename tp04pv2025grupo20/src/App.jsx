import { useState } from 'react'
import Producto from './assets/components/Producto.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="contenedor-principal" style={{ 
  textAlign: 'center', 
  fontWeight: 'bold' 
  
}}>
  <h1 className='titulo'>Programacion Visual - TP4</h1>
  <div className="componenteProducto">
    <Producto />
  </div>

</div>
  );
}

export default App
