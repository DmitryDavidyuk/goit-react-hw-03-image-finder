import ImageGalleryItem from '../ImageGalleryItem';
import PropTypes from 'prop-types';

import CSS from './ImageGallery.module.css';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={CSS.ImageGallery}>
      {images.map(image => {
        return (
          <ImageGalleryItem
            onImageClick={onImageClick}
            key={image.id}
            image={image}
          />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;
