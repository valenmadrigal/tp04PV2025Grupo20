import React from 'react';
 import ProductItem from './ProductItem';

// LISTA DE PRODUCTOS
function Lista ()  {

  //se ejecuta nuevamente, utilizando el nuevo valor de searchTerm para filtrar la lista de productos 
  // y mostrar solo aquellos cuya descripción incluye el string q se va ingresando
  const productosFiltrados = useMemo(() => {
      return products.filter((producto) =>
        producto.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }, [products, searchTerm]);
  
  return (
    <div className="product-list">
      <h2>Lista de Productos</h2>
     <ul>
        {productosFiltrados.map((producto) => (
          <li key={producto.id}>
         // 
          
          <ProductItem
            key={product.id}
            product={product}
            onEdit={onEdit}
            onDelete={onDelete}
          />
//

        </li>
        ))}
      </ul>
    </div>
  );
};

export default Lista;