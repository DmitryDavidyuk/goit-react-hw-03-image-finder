import React, { Component } from 'react';
import { toast } from 'react-toastify';
import CSS from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    query: '',
  };

  hendleNameChange = event => {
    this.setState({ imageName: event.currentTarget.value.toLowerCase() });
  };

  hendleSubmit = event => {
    event.preventDefault();
    const { query } = this.state;
    const { onSubmit } = this.props;

    if (query.trim() === '') {
      return toast.error('Введите название картинки');
    }
    onSubmit(query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <header className={CSS.Searchbar}>
        <form className="form" onSubmit={this.hendleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            value={this.state.query}
            onChange={this.hendleNameChange}
            className="input"
            type="text"
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
