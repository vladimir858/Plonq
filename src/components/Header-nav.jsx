import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
        <div className="header-wrap ">
          <div className="wrap">
            <a className="logo" href='#'>
              <img src="/Logo.svg" alt="Логотип" />
            </a>
            <nav className="">
              <Link to="/" className="
                 header-nav__link ">
                Продукты
              </Link>
              <Link to="/about" className="  header-nav__link">
               Приложение
              </Link>
              <Link to="/projects" className=" header-nav__link" >
              Дистрибуция
              </Link>
              <Link to="/contact" className=" header-nav__link ">
                Где купить
              </Link>
            </nav>
          </div>
        </div>

    </header>
  );
}

