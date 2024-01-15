import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import Header from './containers/Header/Header';
import './Root.scss';

const Root = () => {
  const { t } = useTranslation();

  return (
    <div className='app'>
      <Header />
      <Outlet />
    </div>
  );
};

export default Root;
