export default function Header() {
  return (
    <header className="bg-white top-0">
      <div className="absolute inset-0 bg-[url('../../public/500.png')] bg-cover bg-center">
      <div className=" flex justify-between items-center bg-white relative  z-50 pt-[22px]  pb-[22px] pl-[256px] ">

        <div className=" flex">
        <div className="mr-[632px]" >
      <img src="../../public/Logo.svg" />
        </div>
        <nav className="">
          <a href="#" className="ml-[124px]">
            Главная
          </a>
          <a href="#" className="ml-[124px]">
            Обо мне
          </a>
          <a href="#" className="ml-[124px]">
            Проекты
          </a>
          <a href="#" className="ml-[124px]">
            Контакты
          </a>
        </nav>
             </div>


      </div>
           </div>
    </header>
  );
}