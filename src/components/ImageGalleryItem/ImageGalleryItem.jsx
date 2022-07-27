import React from 'react';
import CSS from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image }) => {
  return (
    <li className={CSS.ImageGalleryItem}>
      <img
        className={CSS.ImageGalleryItem_image}
        src={image.webformatURL}
        alt={image.tags}
      />
    </li>
  );
};

export default ImageGalleryItem;
