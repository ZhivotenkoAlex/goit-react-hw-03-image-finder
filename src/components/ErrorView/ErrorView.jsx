import PropTypes from 'prop-types';

export default function ErrorView({ message }) {
  return (
    <div role="alert">
      <p>Sorry, something went wrong. Error: {message}</p>
    </div>
  );
}

ErrorView.propTypes = {
  message: PropTypes.string.isRequired,
};

