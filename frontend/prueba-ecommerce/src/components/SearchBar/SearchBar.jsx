import React, { useState, useEffect } from 'react';
import './SearchBar.css';

const SearchBar = ({ products, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Simulación de búsqueda al cambiar el término de búsqueda
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Llamamos a la función de búsqueda con los resultados filtrados
    onSearch(filteredProducts);
  }, [searchTerm, products, onSearch]);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
