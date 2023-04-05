export const SearchBar = ({ handleSearch, search, inStock }) => {
  const handleQuery = (event) => {
    handleSearch(event.target.value);
  };

  const checkStock = (event) => {
    inStock(event.target.checked);
  };

  return (
    <div className="">
      <form action="GET">
        <div className="title">
          <h1>IronStore</h1>
        </div>
        <p>SearchBar</p>
        <input
          className="searchBox"
          type="text"
          value={search}
          onChange={handleQuery}
        />
        <br />
        <div className="checkbox">
          <span>
            <input type="checkbox" onChange={checkStock} />
            <p>Only show product in stock</p>
          </span>
        </div>
      </form>
    </div>
  );
};
