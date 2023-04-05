import { useState } from 'react';
import jsonData from '../data.json';
import { SearchBar } from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const data = [...jsonData];
  const [products] = useState(data);
  const [search, setSearch] = useState('');
  const [stock, setInStock] = useState(false);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const isInStock = (event) => {
    setInStock(event.target.checked);
  };

  const filterProduct = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const resultProduct = filterProduct.filter((product) =>
    stock ? product.inStock : true
  );

  return (
    <div>
      <SearchBar search={search} onSearch={handleSearch} onCheck={isInStock} />
      <ProductTable products={resultProduct} />
    </div>
  );
}

export default ProductsPage;
