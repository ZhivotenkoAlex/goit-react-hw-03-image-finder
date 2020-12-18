import PropTypes from 'prop-types';
import s from './Searchbar.module.css';

function Searchbar({ onHandleSubmit, onSearchQueryChange, value }) {
  return (
    <header onSubmit={onHandleSubmit} className={s.Searchbar}>
  <form className={s.SearchForm}>
    <button type="submit" className={s.SearchForm__button}>
      <span className={s.SearchForm__buttonLabel}>Search</span>
    </button>

    <input
      className={s.SearchForm__input}
      type="text"
      autoComplete="off"
      autoFocus
      value={value}
      onChange={onSearchQueryChange}
      placeholder="Search images and photos"
    />
  </form>
</header>
  );
}

Searchbar.propTypes = {
  onHandleSubmit: PropTypes.func.isRequired,
  onSearchQueryChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Searchbar;