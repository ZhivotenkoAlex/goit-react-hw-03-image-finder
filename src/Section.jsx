import React from 'react';
import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <>
      {title && <h1>{title}</h1>}
      {children}
    </>
  );
}
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;