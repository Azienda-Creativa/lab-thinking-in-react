function ProductRow(props) {
  console.log(props.products);
  return (
    <div>
      {props.products.map((element) => {
        return (
          <tr>
            <td>{element.name}</td>
            <td>{element.price}</td>
          </tr>
        );
      })}
    </div>
  );
}
export default ProductRow;
