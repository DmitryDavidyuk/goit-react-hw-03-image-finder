import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { ReactComponent as CloseIcon } from './icons/close.svg';

import 'react-toastify/dist/ReactToastify.css';
import fetchImages from './API/API';
import ImageGallery from './ImageGallery';
import Buttom from './Buttom';
import Loader from './Loader';
import CSS from './App.module.css';
import Modal from './Modal';
import IconButton from './IconButton';

import Searchbar from './Searchbar';

class App extends Component {
  state = {
    searchQuery: '',
    currentPage: 1,
    images: [],
    status: false,
    showModal: false,
    largeImage: '',
    error: null,
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

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      largeImage: '',
    }));
  };
  handleGalleryItem = fullImageUrl => {
    this.setState({
      largeImage: fullImageUrl,
      showModal: true,
    });
  };

  render() {
    const { images, isLoading, largeImage, showModal } = this.state;
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
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <div className="Close-box">
              <IconButton onClick={this.toggleModal} aria-label="Close modal">
                <CloseIcon width="20px" height="20px" fill="#7e7b7b" />
              </IconButton>
            </div>

            <img src={largeImage} alt="" className="Modal-image" />
          </Modal>
        )}
        {isLoading && <Loader />}
        <ImageGallery images={images} onImageClick={this.handleGalleryItem} />
        {needToShowLoadMore && (
          <Buttom btnName={'Load more'} onClick={this.loadMore} />
        )}
        <ToastContainer />;
      </div>
    );
  }
}

export default App;
