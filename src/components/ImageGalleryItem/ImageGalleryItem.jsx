import React from 'react';
import PropTypes from 'prop-types';

import CSS from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, onImageClick }) => {
  const fullImage = () => onImageClick(image.largeImageURL);
  return (
    <li className={CSS.ImageGalleryItem}>
      <img
        className={CSS.ImageGalleryItem_image}
        src={image.webformatURL}
        alt={image.tags}
        onClick={fullImage}
      />
    </li>
  );
};
ImageGalleryItem.defaultProps = {
  tags: '',
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string,
  }),
  onImageClick: PropTypes.func.isRequired,
};
export default ImageGalleryItem;
