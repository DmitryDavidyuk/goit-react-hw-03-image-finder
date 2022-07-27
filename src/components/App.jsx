import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fetchImages from './API/API';

// import fetchImages from './api/api-services';

import Searchbar from './Searchbar';

class App extends Component {
  state = {
    searchQuery: '',
    currentPage: 1,
    images: [],
    isLoading: false,
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.getImages();
    }
  };

  getImages = async () => {
    const { searchQuery, currentPage } = this.state;
    try {
      const { hits } = await fetchImages(searchQuery, currentPage);

      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        currentPage: prevState.currentPage + 1,
      }));
    } catch (error) {
      console.log('Smth wrong with App fetch', error);
      this.setState({ error });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
    });
  };

  render() {
    return (
      <div>
        <Searchbar onSearch={this.onChangeQuery} />
        <ToastContainer />;
      </div>
    );
  }
}

export default App;
