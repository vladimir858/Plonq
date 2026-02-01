import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
    <div className="footer-wrapping grid">

 
  <a href="#" className=" footer-logo">
    <img src="/public/Plonq_logo.svg"   />
  </a>

  <div className="input-wrap">
    <div className="input-title">Подпишитесь на наши обновления</div>
    <div className="footer__input-wrap">
    <input type="text" className="footer-input" />
<button className="input-button">
  Подписаться
</button>
    </div>
  </div>


<div className="footer-applications">

  <div className="applications-wrap">
  <a className="applications-link  " href="#">
    <div className="applications-svg-wrap">
<svg width="28" height="33" viewBox="0 0 28 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.8853 22.9266C27.7712 22.758 27.5856 22.6455 27.3773 22.6186C24.6373 22.2767 22.7061 19.877 23.0641 17.2589C23.3169 15.4095 24.6721 13.8695 26.5356 13.3141C26.914 13.1982 27.1224 12.8111 27.0012 12.4496C26.9823 12.3934 26.956 12.3396 26.9227 12.2896C25.6653 10.1214 23.4295 8.63014 20.8658 8.25C19.574 8.30891 18.3008 8.56949 17.097 9.02136C16.2324 9.35382 15.3195 9.55742 14.3903 9.62497C13.4609 9.55742 12.548 9.35382 11.6835 9.02136C10.4796 8.56949 9.20649 8.30891 7.91461 8.25C5.22797 8.25 0 11.8896 0 18.5624C0 24.9038 4.84085 32.9998 8.63415 32.9998C10.0815 33.0121 11.5115 32.6974 12.8073 32.0813C13.2953 31.8241 13.8348 31.6684 14.3903 31.6248C14.9457 31.6684 15.4852 31.8241 15.9732 32.0813C17.2691 32.6974 18.6991 33.0121 20.1465 32.9998C23.154 32.9998 26.5487 28.0663 27.9704 23.4945C28.0299 23.3025 27.9988 23.095 27.8853 22.9266Z" fill="black"/>
<path d="M13.6707 8.24992C18.0397 8.24535 21.5805 4.86223 21.5852 0.687514C21.5852 0.307825 21.2631 0 20.8657 0C16.4966 0.00457613 12.9558 3.38769 12.9512 7.5624C12.9511 7.94209 13.2733 8.24992 13.6707 8.24992Z" fill="black"/>
</svg>
    </div>
<div className="applications-headtitle">Coming soon </div>
<div className="applications-subtitle">for IOS</div>
  </a>


  </div>
  
  <div className="applications-wrap">
  <a className="applications-link  " href="#">
    <div className="applications-svg-wrap">
<svg width="24" height="33" viewBox="0 0 24 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.784077 32.8226C0.309137 32.6654 0 32.086 0 31.1894V1.59404C0 0.763653 0.261751 0.203618 0.676677 0L12.5127 16.4931L0.784077 32.8226ZM2.41334 32.1945L16.6602 22.2725L13.1902 17.4372L2.41334 32.1945ZM2.7101 0.796095L13.2108 15.5212L16.7584 10.582L2.7101 0.796095ZM17.7115 11.2459L23.2149 15.0795C24.2569 15.8054 24.2664 16.9754 23.2149 17.7077L17.5723 21.6373L13.8919 16.4763L17.7115 11.2459Z" fill="black"/>
</svg>
    </div>
<div className="applications-headtitle">Coming soon</div>
<div className="applications-subtitle">for Android</div>
  </a>


  </div>

</div>

<div className="footer-columns">
<div className=" footer-colums__wrap ">
<div className=" text-normal  footer-colums__headtitle  ">Продукты</div>
  <div className=" text-normal footer-colums__subtitle">Plonq 400</div>
  <div className=" text-normal footer-colums__subtitle">Plonq 500</div>
  <div className="text-normal footer-colums__subtitle">Plonq X</div>
</div>

<div className="  footer-colums-mr80">
<div className=" text-normal  footer-colums__headtitle">Технологии</div>
  <div className="text-normal  footer-colums__subtitle">О приложении</div>
  <div className="text-normal  footer-colums__subtitle">Об электронных сигаретах</div>
</div>
<div className=" footer-colums-mr121 ">
<div className= "font-normal footer-colums__headtitle">Поддержка</div>
  <div className="text-normal footer-colums__subtitle">Связаться с нами</div>
  <div className="text-normal footer-colums__subtitle">Условия возврата</div>
  <div className="text-normal footer-colums__subtitle">Политика конфиденциальности</div>
</div>
<div className=" footer-colums-mr121">
<div className="text-normal   footer-colums__headtitle">Прочее</div>
  <div className="text-normal footer-colums__subtitle">Точки продаж</div>
  <div className="text-normal footer-colums__subtitle">О Компании</div>
  <div className="text-normal footer-colums__subtitle">Оптовым покупателям</div>
</div>
</div>

<div className="footer-social">
   <div className="social-wrap">
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.50095 0C6.92084 0 6.59704 0.0112816 5.5837 0.0573952C4.57233 0.103709 3.88199 0.263823 3.27793 0.49875C2.6531 0.741396 2.12308 1.06598 1.59503 1.59422C1.06659 2.12226 0.741999 2.65228 0.498558 3.2769C0.263035 3.88115 0.102719 4.57168 0.0571986 5.58264C0.0118752 6.59597 0 6.91997 0 9.50002C0 12.0801 0.0114792 12.4028 0.0573961 13.4162C0.103908 14.4276 0.264024 15.1179 0.498756 15.7219C0.741603 16.3467 1.06619 16.8768 1.59444 17.4048C2.12229 17.9332 2.65231 18.2587 3.27675 18.5013C3.88119 18.7362 4.57173 18.8963 5.5829 18.9426C6.59625 18.9887 6.91985 19 9.49972 19C12.08 19 12.4028 18.9887 13.4162 18.9426C14.4275 18.8963 15.1187 18.7362 15.7231 18.5013C16.3477 18.2587 16.877 17.9332 17.4048 17.4048C17.9333 16.8768 18.2578 16.3467 18.5013 15.7221C18.7349 15.1179 18.8951 14.4274 18.9426 13.4163C18.9881 12.403 19 12.0801 19 9.50002C19 6.91997 18.9881 6.59617 18.9426 5.58284C18.8951 4.57148 18.7349 3.88115 18.5013 3.2771C18.2578 2.65228 17.9333 2.12226 17.4048 1.59422C16.8764 1.06578 16.3479 0.741199 15.7225 0.49875C15.1169 0.263823 14.4262 0.103709 13.4148 0.0573952C12.4014 0.0112816 12.0788 0 9.49794 0H9.50095ZM8.64867 1.71198C8.81411 1.71172 8.99207 1.7118 9.18412 1.71189H9.18427L9.50095 1.71198C12.0374 1.71198 12.3381 1.72108 13.3397 1.7666C14.266 1.80896 14.7687 1.96373 15.1036 2.09376C15.5469 2.26595 15.8631 2.47178 16.1954 2.80428C16.5278 3.13679 16.7337 3.45345 16.9062 3.89679C17.0363 4.23126 17.1913 4.73397 17.2334 5.66022C17.279 6.66168 17.2889 6.96252 17.2889 9.49783C17.2889 12.0331 17.279 12.334 17.2334 13.3354C17.1911 14.2617 17.0363 14.7644 16.9062 15.0989C16.7341 15.5422 16.5278 15.8579 16.1954 16.1902C15.8628 16.5226 15.5471 16.7285 15.1036 16.9007C14.7691 17.0313 14.266 17.1857 13.3397 17.2281C12.3383 17.2736 12.0374 17.2835 9.50095 17.2835C6.96418 17.2835 6.66355 17.2736 5.66207 17.2281C4.73581 17.1853 4.23309 17.0306 3.89802 16.9005C3.45468 16.7283 3.13801 16.5225 2.8055 16.19C2.473 15.8575 2.26717 15.5416 2.09458 15.0981C1.96455 14.7636 1.80957 14.2609 1.76742 13.3346C1.72189 12.3332 1.71279 12.0324 1.71279 9.49546C1.71279 6.95855 1.72189 6.6593 1.76742 5.65785C1.80977 4.7316 1.96455 4.22889 2.09458 3.89402C2.26677 3.45068 2.473 3.13401 2.8055 2.80152C3.13801 2.46901 3.45468 2.26318 3.89802 2.0906C4.23289 1.95997 4.73581 1.8056 5.66207 1.76304C6.53846 1.72346 6.87808 1.71158 8.64867 1.70961V1.71198ZM14.572 3.28938C13.9426 3.28938 13.4319 3.79941 13.4319 4.42898C13.4319 5.05836 13.9426 5.56898 14.572 5.56898C15.2014 5.56898 15.712 5.05836 15.712 4.42898C15.712 3.79961 15.2014 3.28898 14.572 3.28898V3.28938ZM4.6222 9.50002C4.6222 6.80583 6.80653 4.62146 9.50076 4.62136C12.195 4.62136 14.3789 6.80577 14.3789 9.50002C14.3789 12.1942 12.1952 14.3777 9.50095 14.3777C6.80664 14.3777 4.6222 12.1942 4.6222 9.50002ZM12.6676 9.50002C12.6676 7.75101 11.2497 6.33334 9.50095 6.33334C7.7519 6.33334 6.33421 7.75101 6.33421 9.50002C6.33421 11.2488 7.7519 12.6666 9.50095 12.6666C11.2497 12.6666 12.6676 11.2488 12.6676 9.50002Z" fill="black"/>
</svg>
   </div>
   <div className="footer-social-title">
    © 2026 PLONQ LLC 40900 Woodward Avenue Suite 111 Bloomfield Hills MI 48304 USA
   </div>
</div>

  <div className="text-normal  warning     ">
ПРОДАЖА НЕСОВЕРШЕННОЛЕТНИМ ЗАПРЕЩЕНА. Сайт используется 
исключительно в целях информирования действующих потребителей продукции PLONQ Защищено выпущенными и/или находящимися на одобрении международными патентами..
  </div>

      </div>
         </div>
    </footer>
{/* <footer className="    footer ">
  <div className="container">
  <a href="#" className=" ">
    <img src="/public/Plonq_logo.svg"   />
  </a>
  <div className="wrap-footer ">
  <div className=" ">
 <div className="title-footer ">
    Подпишитесь на наши обновления
  </div>
  <div className="footer-flex-wrap ">
   <input type="text" className='footer-input' /> 
   <button className='footer-button-title'>Подписаться
    
   </button>
  </div>
  </div>

   
  </div>
  

  <div className="footer-wrap-text">
    <div className="">
          <a href="#" className='flex'>
 <img src="/public/Apple.svg"  className='img-apple' />
 
<div className="">
<div className=" text-normal ">Coming soon </div>
<div className=" text-normal subtitle-footer ">for IOS </div>
</div>
</a>
        <a href="#" className='flex img-google-wrap  '>
 <img src="/public/Android.svg"  className=' img-google ' />
 
<div className="">
<div className=" text-normal  ">Coming soon </div>
<div className=" text-normal subtitle-footer">for
   Android </div>
   
</div>
</a>

    </div>


<div className=" footer-colums__wrap ">
<div className=" text-normal  footer-colums__headtitle  ">Продукты</div>
  <div className=" text-normal footer-colums__subtitle">Plonq 400</div>
  <div className=" text-normal footer-colums__subtitle">Plonq 500</div>
  <div className="text-normal footer-colums__subtitle">Plonq X</div>
</div>
<div className="  footer-colums-mr80">
<div className=" text-normal  footer-colums__headtitle">Технологии</div>
  <div className="text-normal  footer-colums__subtitle">О приложении</div>
  <div className="text-normal  footer-colums__subtitle">Об электронных сигаретах</div>
</div>
<div className=" footer-colums-mr121 ">
<div className= "font-normal footer-colums__headtitle">Поддержка</div>
  <div className="text-normal footer-colums__subtitle">Связаться с нами</div>
  <div className="text-normal footer-colums__subtitle">Условия возврата</div>
  <div className="text-normal footer-colums__subtitle">Политика конфиденциальности</div>
</div>
<div className=" footer-colums-mr121">
<div className="text-normal   footer-colums__headtitle">Прочее</div>
  <div className="text-normal footer-colums__subtitle">Точки продаж</div>
  <div className="text-normal footer-colums__subtitle">О Компании</div>
  <div className="text-normal footer-colums__subtitle">Оптовым покупателям</div>
</div>

<div className="">
<a href="#">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" 
  clip-rule="evenodd" 
  d="M12.0012 0C8.74212 0 8.3331 0.0142504 7.05309 0.0724992C5.77558 0.131 4.90357 0.33325 4.14055 0.63C3.35129 0.9365 2.68178 1.3465 2.01477 2.01375C1.34727 2.68075 0.937262 3.35025 0.629757 4.13925C0.332255 4.90251 0.129751 5.77476 0.0722509 7.05176C0.0150002 8.33175 0 8.74101 0 12C0 15.259 0.0145001 15.6668 0.0725004 16.9467C0.131252 18.2243 0.333504 19.0963 0.630008 19.8593C0.936762 20.6485 1.34676 21.318 2.01403 21.985C2.68079 22.6525 3.35029 23.0636 4.13905 23.37C4.90256 23.6668 5.77482 23.869 7.05208 23.9275C8.33211 23.9857 8.74087 24 11.9996 24C15.2589 24 15.6667 23.9857 16.9468 23.9275C18.2242 23.869 19.0973 23.6668 19.8608 23.37C20.6498 23.0636 21.3183 22.6525 21.9851 21.985C22.6526 21.318 23.0625 20.6485 23.37 19.8595C23.6651 19.0963 23.8675 18.224 23.9275 16.947C23.985 15.667 24 15.259 24 12C24 8.74101 23.985 8.33201 23.9275 7.05201C23.8675 5.77451 23.6651 4.90251 23.37 4.1395C23.0625 3.35025 22.6526 2.68075 21.9851 2.01375C21.3175 1.34625 20.65 0.936251 19.86 0.63C19.095 0.33325 18.2225 0.131 16.945 0.0724992C15.665 0.0142504 15.2575 0 11.9974 0H12.0012ZM10.9246 2.1625C11.1336 2.16218 11.3584 2.16227 11.601 2.16238H11.6012L12.0012 2.1625C15.2052 2.1625 15.5849 2.174 16.8502 2.2315C18.0202 2.285 18.6552 2.48051 19.0782 2.64475C19.6382 2.86225 20.0376 3.12225 20.4573 3.54225C20.8773 3.96226 21.1373 4.36225 21.3552 4.92226C21.5195 5.34475 21.7153 5.97975 21.7685 7.14975C21.8261 8.41475 21.8385 8.79476 21.8385 11.9973C21.8385 15.1997 21.8261 15.5798 21.7685 16.8447C21.7151 18.0148 21.5195 18.6498 21.3552 19.0723C21.1378 19.6323 20.8773 20.031 20.4573 20.4507C20.0372 20.8707 19.6385 21.1307 19.0782 21.3483C18.6557 21.5133 18.0202 21.7083 16.8502 21.7618C15.5852 21.8193 15.2052 21.8317 12.0012 21.8317C8.79686 21.8317 8.41711 21.8193 7.15209 21.7618C5.98207 21.7078 5.34707 21.5123 4.92381 21.348C4.36381 21.1305 3.9638 20.8705 3.5438 20.4505C3.12379 20.0305 2.86379 19.6316 2.64578 19.0713C2.48154 18.6488 2.28578 18.0138 2.23252 16.8438C2.17502 15.5788 2.16353 15.1988 2.16353 11.9943C2.16353 8.78975 2.17502 8.41175 2.23252 7.14675C2.28603 5.97675 2.48154 5.34175 2.64578 4.91876C2.86329 4.35875 3.12379 3.95876 3.5438 3.53876C3.9638 3.11875 4.36381 2.85875 4.92381 2.64076C5.34681 2.47576 5.98207 2.28076 7.15209 2.227C8.2591 2.177 8.68811 2.162 10.9246 2.1595V2.1625ZM18.4067 4.155C17.6118 4.155 16.9667 4.79926 16.9667 5.59451C16.9667 6.38951 17.6118 7.0345 18.4067 7.0345C19.2018 7.0345 19.8468 6.38951 19.8468 5.59451C19.8468 4.79951 19.2018 4.1545 18.4067 4.1545V4.155ZM5.83857 12C5.83857 8.59684 8.59773 5.83764 12.001 5.8375C15.4042 5.8375 18.1628 8.59676 18.1628 12C18.1628 15.4033 15.4045 18.1613 12.0012 18.1613C8.59786 18.1613 5.83857 15.4033 5.83857 12ZM16.0012 12C16.0012 9.79076 14.2102 8.00001 12.0012 8.00001C9.79187 8.00001 8.0011 9.79076 8.0011 12C8.0011 14.209 9.79187 16 12.0012 16C14.2102 16 16.0012 14.209 16.0012 12Z" fill="black" />
</svg>
</a>

<div className="">
  <div className="  text-normal copyrait">© 2021 PLONQ LLC 40900
   Woodward Avenue Suite 111 Bloomfield Hills MI 48304 USA</div>
</div> </div>
  </div>

  <div className="text-normal  warning     ">
ПРОДАЖА НЕСОВЕРШЕННОЛЕТНИМ ЗАПРЕЩЕНА. Сайт используется исключительно в целях информирования действующих потребителей продукции PLONQ Защищено выпущенными и/или находящимися на одобрении международными патентами..
  </div>
  </div>
</footer> */}
  );
}
