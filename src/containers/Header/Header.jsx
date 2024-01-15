import { Link } from 'react-router-dom';
import logo from '../../assets/img/free-icon-save-nature-4660993.png';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <div className='container'>
        <nav className='navbar'>
          <div className='logo'>
            <Link to={`/`}>
              <img src={logo} alt='logo' />
            </Link>
          </div>
          <ul className='nav-list'>
            <li>
              <Link to={`/plants-db`}>База даних рослин</Link>
            </li>
            {/* <li>
              <a href='#about'>Про нас</a>
            </li>
            <li>
              <a href='#plants'>Рослини</a>
            </li>
            <li>
              <a href='#contact'>Контакти</a>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
