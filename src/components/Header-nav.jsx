import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
        <div className="flex justify-between items-center bg-white relative z-50 pt-[22px] pb-[22px] pl-[256px]">
          <div className="flex">
            <div className="mr-[632px]">
              <img src="/Logo.svg" alt="Логотип" />
            </div>
            <nav className="header-nav">
              <Link to="/" className="ml-[124px] hover:text-[#c8bb93] 
               font-normal transition  header-nav-link">
                Продукты
              </Link>
              <Link to="/about" className="ml-[124px]
               hover:text-[#c8bb93] transition  font-normal  header-nav-link">
               Приложение
              </Link>
              <Link to="/projects" className="ml-[124px] 
              hover:text-[#c8bb93] transition  font-normal header-nav-link" >
              Дистрибуция
              </Link>
              <Link to="/contact" className="ml-[124px] 
              hover:text-[#c8bb93] transition  font-normal header-nav-link ">
                Где купить
              </Link>
            </nav>
          </div>
        </div>

    </header>
  );
}

