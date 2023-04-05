import ProductRow from './ProductRow';

function ProductTable({ products }) {
  console.log({ products });
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.find((product) => (
            <ProductRow key={product.id} item={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
