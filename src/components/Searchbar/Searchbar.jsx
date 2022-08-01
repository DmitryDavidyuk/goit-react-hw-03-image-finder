import React from 'react';
import SearchFrom from '../SearchFrom';
import PropTypes from 'prop-types';

import CSS from './Searchbar.module.css';

const Searchbar = ({ onSearch }) => (
  <header className={CSS.Searchbar}>
    <SearchFrom onSearch={onSearch} />
  </header>
);

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Searchbar;
