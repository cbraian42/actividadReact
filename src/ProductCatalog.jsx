import React, { useState } from 'react';

// Datos de ejemplo de productos
const productsData = [
  { id: 1, name: 'Netbook', category: 'electronica', price: 80000 },
  { id: 2, name: 'Casaca de Boquita', category: 'ropa', price: 200 },
  { id: 3, name: 'Libro de Electrónica', category: 'libros', price: 1500 },
  { id: 4, name: 'Celular', category: 'electronica', price: 6000 },
  { id: 5, name: 'Pantalon Cargo', category: 'ropa', price: 350 },
  { id: 6, name: 'Cámara', category: 'electronica', price: 500 },
];

const ProductCatalog = () => {
  const [filter, setFilter] = useState('todos');

  // Filtrar productos
  const filteredProducts = filter === 'todos' 
    ? productsData 
    : productsData.filter(product => product.category === filter);

  return (
    <div>
      <h1>Catálogo de Productos</h1>
      <div>
        <button onClick={() => setFilter('todos')}>Todos</button>
        <button onClick={() => setFilter('electrónica')}>Electrónica</button>
        <button onClick={() => setFilter('ropa')}>Ropa</button>
        <button onClick={() => setFilter('libros')}>Libros</button>
      </div>

      <h2>
        {filter !== 'todos' 
          ? `Categoría: ${filter.charAt(0).toUpperCase() + filter.slice(1)}` 
          : 'Todos los productos'}
      </h2>

      {filteredProducts.length === 0 ? (
        <p>No hay productos en esta categoría.</p>
      ) : (
        <ul>
          {filteredProducts.map(product => (
            <li key={product.id}>
              {product.name} - ${product.price}
              {product.price > 500 && <span> ¡Producto premium!</span>}
            </li>
          ))}
        </ul>
      )}

      <p>
        Contador: {filteredProducts.length} {filteredProducts.length === 1 ? 'producto' : 'productos'}
      </p>
    </div>
  );
};

export default ProductCatalog;
