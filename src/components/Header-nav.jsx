import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]); 

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
               <Link to="/" className="logo">
            <img src="/Logo.svg" alt="Логотип" />
               </Link>
     
          <nav className="header-nav">
      <Link to="/Product" className="header-nav__link"> 
          Продукты
        </Link>
            <Link to="/Application" className="header-nav__link">
              Приложение
            </Link>
            <Link to="/projects" className="header-nav__link">
              Дистрибуция
            </Link>
            <Link to="/#Buy" className="header-nav__link">
              Где купить
            </Link>
            
         
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
  <Link to="/#Buy" className="header-list-burger" onClick={closeMenu}>
    Где купить
  </Link>
</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}