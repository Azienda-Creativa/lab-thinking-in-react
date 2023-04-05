function ProductRow(props) {
  console.log(props.products);
  return (
    <tr>
      <td>{props.products.name}</td>
      <td>{props.products.price}</td>
    </tr>
  );
}
export default ProductRow;
