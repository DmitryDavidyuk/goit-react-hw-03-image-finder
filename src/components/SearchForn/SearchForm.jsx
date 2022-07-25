import React, { Component } from 'react';
import CSS from './SearchForm.module.css';

class SearchForm extends Component {
  state = {
    qvery: '',
  };

  render() {
    return (
      <form className={CSS.SearchForm}>
        <button type="submit" className={CSS.SearchForm_button}>
          <span className={CSS.SearchForm_button_label}>Search</span>
        </button>

        <input
          className={CSS.SearchForm_input}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    );
  }
}

export default SearchForm;
