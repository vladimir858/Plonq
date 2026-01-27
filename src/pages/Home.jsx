import { Link } from 'react-router-dom';
import ButtonDetail from '../components/button-detail'; 
import Footer from '../components/Footer';
export default function Home() {
  return (
    <div className="">
    <div className=" header-home">
      <div className="container">

    
      <svg width="55" height="17" viewBox="0 0 55 17" fill="none" xmlns="http://www.w3.org/2000/svg" 
      className='strelka-home'>
  <path d="M0 16.8798V0.0480898H1.67907L11.6854 13.5375V0.0480898H13.4326V16.8798H12.0031L1.74715 3.07779V16.8798H0ZM17.9261 16.8798V0.0480898H29.4073V1.77935H19.7186V7.52617H28.3863V9.25743H19.7186V15.1485H29.5208V16.8798H17.9261ZM37.5739 17L31.9015 0.0480898H33.8527L38.3908 14.0665L42.7473 0H44.2222L48.5787 14.0665L53.1167 0.0480898H55L49.3275 17H47.8072L43.4507 3.34229L39.0715 17H37.5739Z" fill="#92E7E4" />
</svg>
<img src="../../public/Head-logo.svg"  className=" logo-home" />

<div className=" home-subhead ">
  Новый стандарт одноразовых е-сигарет</div>
    <div className="flex  home__buttom-wrap">
    <button className="flex    home__buttom ">
      <a href="#" className="  home__buttom-link flex   " > 
Подробнее
      <svg viewBox="0 0 4 7" fill="none" xmlns="http://www.w3.org/2000/svg" className=' svg-home'>
<path d="M0.5 0.5L3.5 3.50003L0.5 6.5"  stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      </a>
      </button>
    <button className=" "><a href="#" className="  link-buy flex   " >
Где купить
      </a></button>
    </div>
  </div>
    </div>




{/* 
    <div className=" flex  main-detail  ">
      <div className="">
  <img src="../../public/Home-logo.svg" className='main-logo'  />
<div className="main-head ">Электронная сигарета, которая умеет удивлять.</div>
<div className=" flex main-btn-wrap    ">
      <ButtonDetail />
      <div className="main__title">Скоро в продаже</div>
</div>
      </div>
<img src="/Phone-home.png" className='   main-img '/>

<div className="flex  button-detail-mob ">
      <ButtonDetail />
      <div className="detail-mob-text">Скоро в продаже</div>
</div>
    </div>
    
    <div className="flex wrap-product ">
    <div className="flex product-1">
      <img src="/public/img-plo-1.png"  />
      <div className=" contain-product">
        <img src="/logo_Plonq_400.svg" alt=""  className=" logo-400"/>
        <div className="  product-title  ">
          Одноразовое устройство  Plonq на 400 затяжек
        </div>
        <div className=" product-cost">370 ₽</div>
      <a href='#' className="flex product-link  ">
    Где купить
</a>
      </div>
    </div>


    <div className="flex wrap-product">
      <img src="../../public/img-plo-2.png"  />
      <div className="">
        <img src="../../public/logo_Plonq_500.svg" alt=""  className="logo-400 "/>
        <div className="product-title ">
          Одноразовое устройство <br /> Plonq на 500 затяжек
        </div>
        <div className=" product-cost">430 ₽</div>
    <a href='#' className="flex product-link  ">
    Где купить
</a>
      </div>
    </div>

   </div>
    <div className="flex wrap-product ">
    <div className="flex contain-product-1">
      <img src="/public/img-plo-3.png"  />
      <div className="contain-product-2">
        <img src="/public/Plonq_X.svg" alt=""  className="  img-product "/>
          <div className="product-title ">
       Стартовый набор Plonq X
        </div>
       <div className=" product-cost">430 ₽</div>
    <a href='#' className="flex product-link  ">
    Где купить
</a>

      </div>
    </div>

    <div className="flex">
      <img src="/public/img-plo-4.png"  />
      <div className="contain-product-1">
        <img src="/public/Plonq_X.svg" alt=""  className=" img-product "/>
      <div className="product-title ">
        Два сменных картриджа <br /> для устройства Plonq X
        </div>
       <div className=" product-cost">430 ₽</div>
    <a href='#' className="flex product-link  ">
    Где купить
</a>
      </div>
    </div>

   </div> 


<div class="flex-container">
  <div class="card">
    <div class="card-content">
      <div class="card-text">
        <div class="card-title">
          Об электронных <br />сигаретах
        </div>
        <div class="card-description">
          Plonq — электронный испаритель, который преобразует жидкость в пар.
        </div>
        <ButtonDetail />
      </div>
      <img src="../../public/leak-1.png" class="card-image" />
    </div>
  </div>

  <div class="card">
    <div class="card-content">
      <div class="card-text">
        <div class="card-title">
          О приложении
        </div>
        <div class="card-description">
          Plonq AI создан на основе поведенческой терапии, которая доказала свою эффективность.
        </div>
        <ButtonDetail />
      </div>
      <img src="../../public/leak-2.png" class="card-image" />
    </div>
  </div>
</div>
*/}
   <Footer /> 
    </div>
  
  );
}