import PropTypes from 'prop-types';

import CSS from './IconButton.module.css';

const IconButton = ({ children, onClick, ...allyProps }) => (
  <button
    type="button"
    className={CSS.IconButton}
    onClick={onClick}
    {...allyProps}
  >
    {children}
  </button>
);

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

export default IconButton;
