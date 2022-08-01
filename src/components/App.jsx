import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fetchImages from './API/API';
import ImageGallery from './ImageGallery';
import Buttom from './Buttom';
import Loader from './Loader';
import CSS from './App.module.css';

// import fetchImages from './api/api-services';

import Searchbar from './Searchbar';

class App extends Component {
  state = {
    searchQuery: '',
    currentPage: 1,
    images: [],
    status: false,
  };

  componentDidUpdate = (_, prevState) => {
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.currentPage !== this.state.currentPage
    ) {
      this.setState({
        isLoading: true,
      });

      this.getImages();
      if (this.state.currentPage !== 1) {
        this.scrollOnLoadButton();
      }
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
    this.scrollOnLoadButton();
  };

  onChangeQuery = query => {
    this.setState(prevState => ({
      currentPage: 1,
      searchQuery: query,
      images: [],
    }));
  };
  scrollOnLoadButton = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  render() {
    const { images, isLoading } = this.state;
    const needToShowLoadMore = images.length > 0 && images.length >= 12;

    return (
      <div className={CSS.App}>
        <Searchbar onSearch={this.onChangeQuery} />
        {images.length < 1 && (
          <div className={CSS.message}>
            <h2>The gallery is empty 🙁</h2>
            <p>Use search field!</p>
          </div>
        )}
        {isLoading && <Loader />}
        <ImageGallery images={images} />
        {needToShowLoadMore && (
          <Buttom btnName={'Load more'} onClick={this.loadMore} />
        )}
        <ToastContainer />;
      </div>
    );
  }
}

export default App;
