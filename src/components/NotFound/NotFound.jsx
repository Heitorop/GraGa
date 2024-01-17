import NotFoundImg from '../../assets/img/NotFound.png';
import './NotFound.scss';
const NotFound = () => {
  return (
    <div className='notfound-wrapper'>
      <h1>Нічого не знайдено</h1>
      <img src={NotFoundImg} alt='горщик з лупою' />
    </div>
  );
};

export default NotFound;
