import { useState } from 'react';
import jsonData from '../data.json';
import { SearchBar } from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const data = [...jsonData];
  const [products, setProducts] = useState(data);
  const [search, setSearch] = useState('');
  const [inStock, setInStock] = useState(false);

  const handleSearch = (search) => {
    setSearch(search);
  };

  const isInStock = (value) => {
    setInStock(value);
  };

  // const filterProducts = () => {
  //   products.filter((product) => {
  //     product.name.includes(product);
  //   });
  // };

  return (
    <div>
      <SearchBar
        search={search}
        handleSearch={handleSearch}
        inStock={isInStock}
      />
      <ProductTable />
    </div>
  );
}

export default ProductsPage;
