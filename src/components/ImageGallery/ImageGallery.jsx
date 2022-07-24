import { Component } from 'react';
import CSS from './ImageGallery.module.css';

class ImageGallery extends Component {
  render() {
    return <ul className={CSS.ImageGallery}>{this.props.imageName}</ul>;
  }
}

export default ImageGallery;
