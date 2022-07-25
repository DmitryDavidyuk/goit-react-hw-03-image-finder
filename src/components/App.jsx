import React, { Component } from 'react';
import SearchBar from './Searchbar';

class App extends Component {
  state = {
    qvery: '',
  };
  render() {
    return <SearchBar />;
  }
}

export default App;
