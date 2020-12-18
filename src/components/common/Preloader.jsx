import React from 'react';
import preloader from '../../assets/img/preloaderAdmin.gif';

const Preloader = () => {
  return (
    <div className="preloader">
      <img src={preloader} alt="preloader" />
    </div>
  );
};

export default Preloader;
