import { Oval } from 'react-loader-spinner';
import CSS from './Loader.module.css';

const Loader = () => (
  <div className={CSS.loader}>
    <Oval type="TailSpin" color="#02be6e" height={100} width={100} />
  </div>
);

export default Loader;
