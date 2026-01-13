import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white top-0">
        <div className="flex justify-between items-center bg-white relative z-50 pt-[22px] pb-[22px] pl-[256px]">
          <div className="flex">
            <div className="mr-[632px]">
              <img src="/Logo.svg" alt="Логотип" />
            </div>
            <nav className="">
              <Link to="/" className="ml-[124px] hover:text-[#c8bb93]  transition ">
                Главная
              </Link>
              <Link to="/about" className="ml-[124px] hover:text-[#c8bb93] transition  ">
                Обо мне
              </Link>
              <Link to="/projects" className="ml-[124px] hover:text-[#c8bb93] transition " >
                Проекты
              </Link>
              <Link to="/contact" className="ml-[124px] hover:text-[#c8bb93] transition  ">
                Контакты
              </Link>
            </nav>
          </div>
        </div>

    </header>
  );
}

      // <div className="absolute inset-0 bg-[url('/500.png')] bg-cover bg-center"></div>