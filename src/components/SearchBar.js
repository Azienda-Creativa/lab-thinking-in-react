export const SearchBar = ({ search, onSearch, onStock }) => {
  console.log({ search });
  return (
    <form className="form" action="GET">
      <div className="title">
        <h1>IronStore</h1>
      </div>
      <p>SearchBar</p>
      <input
        className="searchBox"
        type="text"
        value={search}
        onChange={onSearch}
      />
      <br />
      <div className="checkbox">
        <span>
          <input type="checkbox" onChange={onStock} />
          <p>Only show product in stock</p>
        </span>
      </div>
    </form>
  );
};
