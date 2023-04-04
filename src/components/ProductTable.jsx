import ProductRow from './ProductRow';

export const ProductTable = (props) => {
  return (
    <div>
      <p>ProductTable</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <ProductRow data={props.data} />
        </tbody>
      </table>
    </div>
  );
};
