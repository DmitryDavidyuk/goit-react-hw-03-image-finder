import CSS from './Button.module.css';

const Button = ({ onClick, btnName }) => {
  return (
    <button onClick={onClick} type="button" className={CSS.Button}>
      {btnName}
    </button>
  );
};

export default Button;
