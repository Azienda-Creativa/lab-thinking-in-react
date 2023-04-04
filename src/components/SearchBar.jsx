import { useState } from 'react';

export const SearchBar = () => {
  return (
    <div>
      <p>SearchBar</p>
      <input type="text" />
      <br />
      <div>
        <span>
          <input type="checkbox" />
          <p>Only show product in stock</p>
        </span>
      </div>
    </div>
  );
};
