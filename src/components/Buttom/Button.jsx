import PropTypes from 'prop-types';
import CSS from './Button.module.css';

const Button = ({ onClick, btnName }) => {
  return (
    <button onClick={onClick} type="button" className={CSS.Button}>
      {btnName}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
