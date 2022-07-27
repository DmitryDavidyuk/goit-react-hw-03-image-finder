import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fetchImages from './API/API';
import ImageGallery from './ImageGallery';
import Buttom from './Buttom';
import CSS from './App.module.css';

// import fetchImages from './api/api-services';

import Searchbar from './Searchbar';

class App extends Component {
  state = {
    searchQuery: '',
    currentPage: 1,
    images: [],
    isLoading: false,
  };

  componentDidUpdate = (_, prevState) => {
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.currentPage !== this.state.currentPage
    ) {
      this.getImages();
    }
  };

  getImages = async () => {
    const { searchQuery, currentPage } = this.state;
    try {
      const { hits } = await fetchImages(searchQuery, currentPage);

      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
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

  loadMore = () => {
    this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));
  };

  onChangeQuery = query => {
    this.setState(prevState => ({
      currentPage: 1,
      searchQuery: query,
      images: [],
    }));
  };

  render() {
    return (
      <div className={CSS.App}>
        <Searchbar onSearch={this.onChangeQuery} />
        <ImageGallery images={this.state.images} />
        <Buttom btnName={'Load more'} onClick={this.loadMore} />
        <ToastContainer />;
      </div>
    );
  }
}

export default App;
