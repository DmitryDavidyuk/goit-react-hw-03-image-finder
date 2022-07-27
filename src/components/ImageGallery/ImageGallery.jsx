import ImageGalleryItem from '../ImageGalleryItem';
import CSS from './ImageGallery.module.css';

const ImageGallery = ({ images }) => {
  return (
    <ul className={CSS.ImageGallery}>
      {images.map(image => {
        return <ImageGalleryItem key={image.id} image={image} />;
      })}
    </ul>
  );
};
export default ImageGallery;
