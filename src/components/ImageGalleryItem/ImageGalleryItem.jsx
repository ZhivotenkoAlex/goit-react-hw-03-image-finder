 
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ webformatURL, largeImageURL, tags, onOpenModal }) {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        data-source={largeImageURL}
        className={s.ImageGalleryItem__image}
        onClick={onOpenModal}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
};

