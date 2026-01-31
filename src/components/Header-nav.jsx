import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // если используете React Router

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Блокируем прокрутку body при открытом меню
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Очистка при размонтировании компонента
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]); // Эффект срабатывает при изменении isMenuOpen

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-wrap ">
        <div className="wrap">
          <a className="logo" href='#'>
            <img src="/Logo.svg" alt="Логотип" />
          </a>
          <nav className="header-nav">
            <Link to="/" className="header-nav__link">
              Продукты
            </Link>
            <Link to="/about" className="header-nav__link">
              Приложение
            </Link>
            <Link to="/projects" className="header-nav__link">
              Дистрибуция
            </Link>
            <Link to="/contact" className="header-nav__link">
              Где купить
            </Link>
            
            {/* Кнопка бургер-меню */}
            <button 
              className={`burger ${isMenuOpen ? 'burger--active' : ''}`} 
              aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className="burger__line burger__line--1"></span>
              <span className="burger__line burger__line--2"></span>
              <span className="burger__line burger__line--3"></span>
            </button>
          </nav>
        </div>
      </div>
      
      {/* Бургер-меню */}
      <div className={`wrap-header-nav ${isMenuOpen ? 'wrap-header-nav--active' : ''}`}>
        <nav className='header-nav-burger'>
          <ul className="header-item-burger">
            <li>
              <Link to="/" className="header-list-burger" onClick={closeMenu}>
                Продукты
              </Link>
            </li>
            <li>
              <Link to="/about" className="header-list-burger" onClick={closeMenu}>
                Приложение
              </Link>
            </li>
            <li>
              <Link to="/projects" className="header-list-burger" onClick={closeMenu}>
                Дистрибуция
              </Link>
            </li>
            <li>
              <Link to="/contact" className="header-list-burger" onClick={closeMenu}>
                Где купить
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}