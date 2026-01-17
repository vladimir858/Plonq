import { Link } from 'react-router-dom';

export default function ButtonDetail() {
  return (
    <Link 
      to="/details" 
      className="flex items-center  mr-[29px] w-[126px] h-[21px] text-[var(--color-dark)] 
                hover:text-[var(--color-gold)] transition-colors duration-300 font-medium"
    >
      Подробнее
      <svg viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg" 
           className='w-[6px] h-[16px] ml-[20px]   mt-[4px]  stroke-current'>
        <path d="M0.649902 0.650391L3.6499 3.65044L0.649902 6.65045" 
              stroke="currentColor" strokeWidth="1.3" 
              strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </Link>
  );
}