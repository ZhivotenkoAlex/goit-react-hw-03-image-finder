
import PropTypes from 'prop-types';
import s from './Button.module.css';

export default function Button({ onLoadMore }) {
  return (
    <button type="button" className={s.Button} onClick={onLoadMore}>
      Load more
    </button>
  );
}

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
