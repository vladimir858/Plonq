// components/SimpleMap.jsx
import React from 'react';

const SimpleMap = () => {
  return (
    <div style={{ 
      width: '1360px', 
      height: '455px',
      margin: 'auto',
      overflow: 'hidden',
    }}>
      <iframe
        title="Карта магазинов"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.372789915254!2d37.61729531593075!3d55.75582428055698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2z0JzQvtGB0LrQstCw!5e0!3m2!1sru!2sru!4v1697541234567!5m2!1sru!2sru"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default SimpleMap;