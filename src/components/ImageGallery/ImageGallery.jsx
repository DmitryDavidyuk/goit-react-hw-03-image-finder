import { Component } from 'react';
import CSS from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const URL = 'https://pixabay.com/api/';
const KEY = '27029814-7fef9837d48702f37d507a8fe';

class ImageGallery extends Component {
  state = {
    request: null,
    status: 'idle',
    error: null,
  };

  componentDidUpdate = (prevProps, prevState) => {
    const prevReq = prevProps.imageName;
    const nextReq = this.props.imageName;

    if (prevReq !== nextReq) {
      this.setState({ status: 'pending' });

      fetch(
        `${URL}?q=${this.props.imageName}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error(`по вашему запросу ничего не найдено...`)
          );
        })
        .then(request => this.setState({ request, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'reject' }));
    }
  };

  render() {
    if (this.state.status === 'idle') {
      return <div>введите запрос</div>;
    }

    if (this.state.status === 'resolved') {
      return (
        <ul className={CSS.ImageGallery}>
          <ImageGalleryItem images={this.state.request.hits} />
        </ul>
      );
    }
  }
}

export default ImageGallery;
