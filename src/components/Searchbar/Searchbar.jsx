import React from 'react';
import SearchFrom from '../SearchFrom';

import CSS from './Searchbar.module.css';

const Searchbar = ({ onSearch }) => (
  <header className={CSS.Searchbar}>
    <SearchFrom onSearch={onSearch} />
  </header>
);

export default Searchbar;
