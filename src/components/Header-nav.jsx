import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
        <div className="header-wrap ">
          <div className="wrap">
            <a className="logo" href='#'>
              <img src="/Logo.svg" alt="Логотип" />
            </a>
            <nav className="header-nav">
              <Link to="/" className="header-nav__link ">
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
  <button class="burger" aria-label="Открыть меню" aria-expanded="false">
    <span class="burger__line burger__line--1"></span>
    <span class="burger__line burger__line--2"></span>
    <span class="burger__line burger__line--3"></span>
  </button>
    <nav class="nav" id="main-nav">
 
  </nav>
            </nav>

          </div>
        </div>

    </header>
  );
}

