import { Component } from 'react';
import CSS from './App.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';

export default class App extends Component {
  state = {
    imageName: '',
  };

  hendleFormSubmit = imageName => {
    this.setState({ imageName });
  };

  render() {
    return (
      <div className={CSS.App}>
        <Searchbar onSubmit={this.hendleFormSubmit} />
        <ImageGallery imageName={this.state.imageName} />
        <ToastContainer />
      </div>
    );
  }
}
