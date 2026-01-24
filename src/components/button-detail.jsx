import { Link } from 'react-router-dom';

export default function ButtonDetail() {
  return (
    <Link 
      to="/details" 
      className="link-detail"
    >
      Подробнее
      <svg viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg" 
           className='svg-detail'>
        <path d="M0.649902 0.650391L3.6499 3.65044L0.649902 6.65045" 
              stroke="currentColor" strokeWidth="1.3" 
              strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </Link>
  );
}