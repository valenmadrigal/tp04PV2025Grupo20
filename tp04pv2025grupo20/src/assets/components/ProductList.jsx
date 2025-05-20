import React, { useMemo, useCallback } from 'react';
import ProductItem from './ProducItem';
import '../css/Lista.css'; // Importa el CSS para la Lista

// LISTA DE PRODUCTOS
function Lista({ productos,
  searchTerm,
  setProductos,
  searchBy
}) {
  
  const productosFiltrados = useMemo(() => {
    if (searchBy == "nombre") {
      return productos.length > 0 && productos?.filter((producto) =>
        producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      return productos.length > 0 && productos?.filter((producto) =>
        producto.id == searchTerm
      );
    }

  }, [productos, searchTerm]);

  const productsListable = useMemo(() => {
    return productos.length > 0 && productos.filter(prod => prod.show === true);
  }, [productos]);

  const listaDeProductos = searchTerm === "" ? productsListable : productosFiltrados;

  return (
    <div className="product-list-container"> {/* Contenedor para la lista */}
      <h2>Lista de Productos</h2>
      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Marca</th>
            <th>Precio</th>
            <th>Descuento</th>
            <th>Precio con Descuento</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {listaDeProductos.length > 0 && listaDeProductos.map((producto) => (
            <ProductItem
              key={producto.id}
              product={producto}
              productos={productos}
              setProductos={setProductos}

            />
          ))}
        </tbody>
      </table>
      {listaDeProductos.length === 0 && <p>No se encontraron productos.</p>}
    </div>
  );
};

export default Lista;