import React from 'react';
import SearchForm from 'components/SearchForn/SearchForm';
import CSS from './Searchbar.module.css';

const SearchBar = () => {
  return (
    <header className={CSS.Searchbar}>
      <SearchForm />
    </header>
  );
};

export default SearchBar;
