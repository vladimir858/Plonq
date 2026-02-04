import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
    <div className="footer-wrapping grid">

  <a href="#" className=" footer-logo">
    <img src="/Plonq_logo.svg"   />
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

<div className="footer-aplik-wrap">


<div className="footer-applications">

  <div className="applications-wraper-1">
  <a className="applications-link  " href="#">
    <div className="applications-svg-wrap">
<svg width="28" height="33" viewBox="0 0 28 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.8853 22.9266C27.7712 22.758 27.5856 22.6455 27.3773 22.6186C24.6373 22.2767 22.7061 19.877 23.0641 17.2589C23.3169 15.4095 24.6721 13.8695 26.5356 13.3141C26.914 13.1982 27.1224 12.8111 27.0012 12.4496C26.9823 12.3934 26.956 12.3396 26.9227 12.2896C25.6653 10.1214 23.4295 8.63014 20.8658 8.25C19.574 8.30891 18.3008 8.56949 17.097 9.02136C16.2324 9.35382 15.3195 9.55742 14.3903 9.62497C13.4609 9.55742 12.548 9.35382 11.6835 9.02136C10.4796 8.56949 9.20649 8.30891 7.91461 8.25C5.22797 8.25 0 11.8896 0 18.5624C0 24.9038 4.84085 32.9998 8.63415 32.9998C10.0815 33.0121 11.5115 32.6974 12.8073 32.0813C13.2953 31.8241 13.8348 31.6684 14.3903 31.6248C14.9457 31.6684 15.4852 31.8241 15.9732 32.0813C17.2691 32.6974 18.6991 33.0121 20.1465 32.9998C23.154 32.9998 26.5487 28.0663 27.9704 23.4945C28.0299 23.3025 27.9988 23.095 27.8853 22.9266Z" fill="black"/>
<path d="M13.6707 8.24992C18.0397 8.24535 21.5805 4.86223 21.5852 0.687514C21.5852 0.307825 21.2631 0 20.8657 0C16.4966 0.00457613 12.9558 3.38769 12.9512 7.5624C12.9511 7.94209 13.2733 8.24992 13.6707 8.24992Z" fill="black"/>
</svg>
    </div>
    <div className="applications-wrap">
<div className="applications-headtitle">Coming soon </div>
<div className="applications-subtitle">for IOS</div>
    </div>
  </a>
  </div>
  
  <div className="applications-wraper">
  <a className="applications-link  " href="#">
    <div className="applications-svg-wrap">
<svg width="24" height="33" viewBox="0 0 24 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.784077 32.8226C0.309137 32.6654 0 32.086 0 31.1894V1.59404C0 0.763653 0.261751 0.203618 0.676677 0L12.5127 16.4931L0.784077 32.8226ZM2.41334 32.1945L16.6602 22.2725L13.1902 17.4372L2.41334 32.1945ZM2.7101 0.796095L13.2108 15.5212L16.7584 10.582L2.7101 0.796095ZM17.7115 11.2459L23.2149 15.0795C24.2569 15.8054 24.2664 16.9754 23.2149 17.7077L17.5723 21.6373L13.8919 16.4763L17.7115 11.2459Z" fill="black"/>
</svg>
    </div>
    <div className="applications-wrap">
<div className="applications-headtitle">Coming soon</div>
<div className="applications-subtitle">for Android</div>
    </div>
  </a>


  </div>





</div>


<div className="footer-columns">
<ul className=" footer-colums__wrap ">
  <li className=" text-normal  footer-colums__headtitle ">  
<a  href='#'>Продукты</a>
  </li>
  <li className=" text-normal footer-colums__subtitle ">
  <a  href='#'>Plonq 400</a>
  </li>
  <li  className=" text-normal footer-colums__subtitle   ">
  <a href='#'>Plonq 500</a>
  </li>
  <li className="text-normal footer-colums__subtitle  ">
  <a  href='#'>Plonq X</a>
  </li>
</ul>

<ul className="  footer-colums-mr80">
  <li className=" text-normal  footer-colums__headtitle">
<a  href='#'>Технологии</a>
  </li>
  <li className="text-normal  footer-colums__subtitle">
  <a  href='#'>О приложении</a>
  </li>
  <li className="text-normal  footer-colums__subtitle">
  <a  href='#'>Об электронных сигаретах</a>
  </li>
</ul>
<ul className=" footer-colums-mr121 ">
  <li className= "text-normal  footer-colums__headtitle">
<a href='#'>Поддержка</a>
  </li>
  <li  className="text-normal footer-colums__subtitle">
  <a href='#'>Связаться с нами</a>
  </li>
  <li  className="text-normal footer-colums__subtitle" >
  <a href='#'>Условия возврата</a>
  </li>
  <li className="text-normal footer-colums__subtitle"> 
  <a href='#'>Политика конфиденциальности</a>
  </li>
</ul>
<ul className=" footer-colums-mr121">
  <li className="text-normal   footer-colums__headtitle">
<a  href='#'>Прочее</a>
  </li>
  <li className="text-normal footer-colums__subtitle">
  <a  href='#'>Точки продаж</a>
  </li>
  <li className="text-normal footer-colums__subtitle">
  <a  href='#'>О Компании</a>
  </li>
  <li  className="text-normal footer-colums__subtitle">
  <a href='#'>Оптовым покупателям</a>
  </li>
</ul>
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
</div>  </div>

  <div className="text-normal  warning     ">
ПРОДАЖА НЕСОВЕРШЕННОЛЕТНИМ ЗАПРЕЩЕНА. Сайт используется 
исключительно в целях информирования действующих потребителей продукции PLONQ Защищено выпущенными и/или находящимися на одобрении международными патентами..
  </div>

      </div>
         </div>
    </footer>

  );
}
