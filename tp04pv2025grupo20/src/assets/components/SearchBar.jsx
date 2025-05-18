
// Para buscar productos.

function SearchBar({searchTerm , setSearchTerm}) {
  
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  }
    return (
<div>
        <label htmlFor="buscar">Buscar Producto:</label>
        <input
          type="text"
          id="buscar"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Ingrese descripción"
        />
      </div>
    );
}
 export default SearchBar;