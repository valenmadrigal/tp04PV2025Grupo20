import React, { useMemo } from 'react';
 import ProductItem from './ProducItem';

// LISTA DE PRODUCTOS
function Lista ({ productos, searchTerm, setProductos })  {

  //se ejecuta nuevamente, utilizando el nuevo valor de searchTerm para filtrar la lista de productos 
  // y mostrar solo aquellos cuya descripción incluye el string q se va ingresando
  const productosFiltrados = useMemo(() => {
    return productos.length > 0 && productos?.filter((producto) =>
        producto.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }, [productos, searchTerm]);
   const productsListable = productos.length > 0 && productos.filter(prod => prod.show === true)

  return (
    <div className="product-list">
      <h2>Lista de Productos</h2>
     <ul>

        {searchTerm == "" ? productsListable.length > 0 && productsListable?.map((producto) => {
          if (producto.show) {
            return (
              <li key={producto.id}>

                <ProductItem
                  setProductos={setProductos}
                  productos={productos}
                  product={producto}
                
                />

              </li>
            )
          }


        }) : (
          productosFiltrados.map((producto) => {
            return (
              <li key={producto.id}>

                <ProductItem
                  product={producto}
                
                />

              </li>
            )
          })
        )}
      </ul>
    </div>
  );
};

export default Lista;