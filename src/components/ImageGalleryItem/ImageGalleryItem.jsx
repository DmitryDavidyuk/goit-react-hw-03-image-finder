import React from 'react';
import CSS from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ images }) => {
  return images.map(image => (
    <li key={image.id} className={CSS.ImageGalleryItem}>
      <img
        className={CSS.ImageGalleryItem_image}
        src={image.webformatURL}
        alt=""
      />
    </li>
  ));
};

export default ImageGalleryItem;
