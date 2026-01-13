import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-[url('/500.png')] bg-cover bg-center pt-[100px]">
     
      <svg width="55" height="17" viewBox="0 0 55 17" fill="none" xmlns="http://www.w3.org/2000/svg" className='ml-[440px] mt-[200px]'>
  <path d="M0 16.8798V0.0480898H1.67907L11.6854 13.5375V0.0480898H13.4326V16.8798H12.0031L1.74715 3.07779V16.8798H0ZM17.9261 16.8798V0.0480898H29.4073V1.77935H19.7186V7.52617H28.3863V9.25743H19.7186V15.1485H29.5208V16.8798H17.9261ZM37.5739 17L31.9015 0.0480898H33.8527L38.3908 14.0665L42.7473 0H44.2222L48.5787 14.0665L53.1167 0.0480898H55L49.3275 17H47.8072L43.4507 3.34229L39.0715 17H37.5739Z" fill="#92E7E4" />
</svg>
<img src="../../public/Head-logo.svg"  className="ml-[var(--mr-500)]" />
<div className="text-[32px] text-[var(--color-white)] mt-[35px] ml-[var(--mr-500)] w-[400px]  ">Новый стандарт одноразовых е-сигарет</div>
    <div className="flex mt-[76px]">
    <button className="flex  items-center  ">
      <a href="#" className="mr-[29px] ml-[var(--mr-500)]  w-[120px] h-[20px]  text-[var(--color-white)] flex items-center " >
Подробнее
      <img src="../../public/strelka-header.svg" alt="" className="w-[6px] h-[16px] ml-[29px]"  />
      </a>
      </button>
    <button className=" "><a href="" className=" w-[208px] 
    h-[48px]  border-2 font-medium rounded-[100px] divide-[var(--color-white)] flex  text-[var(--color-white)]  items-center justify-center ml-[56px]" >
Где купить
      </a></button>
    </div>
    
    </div>
  );
}