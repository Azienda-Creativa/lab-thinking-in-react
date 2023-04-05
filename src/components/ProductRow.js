function ProductRow({ product, key }) {
  return (
    <tr key={key}>
      <td>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}
export default ProductRow;
