
// Para buscar productos.
import '../css/SearchBar.css'
function SearchBar({ searchTerm, setSearchTerm, searchBy, setSearchBy }) {

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  }
  const handleSearchByChange = (by) => {
    setSearchBy(by);
    setSearchTerm(''); // Limpiar el término de búsqueda al cambiar el criterio
  }

  return (
    <div className="search-bar-container" >
      <label htmlFor="buscar">Buscar Producto por:</label>
      <div className='botones'>
        <button
          className={searchBy === 'nombre' ? 'active' : ''}
          onClick={() => handleSearchByChange('nombre')}
        >
          Nombre
        </button>
        <button
          className={searchBy === 'id' ? 'active' : ''}
          onClick={() => handleSearchByChange('id')}
        >
          ID
        </button>
      </div>
      <input
        type="text"
        id="buscar"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder={`Ingrese ${searchBy === 'nombre' ? 'nombre(No distingue entre mayusculas y minusculas)' : 'ID'} del producto`}
      />
    </div>
  );
}
export default SearchBar;