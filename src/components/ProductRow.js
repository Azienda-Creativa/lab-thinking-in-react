function ProductRow({ key, products }) {
  return (
    <tr key={products}>
      <td>{products.name}</td>
      <td>{products.price}</td>
    </tr>
  );
}
export default ProductRow;
