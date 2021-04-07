import React from 'react';
import preloader from '../../assets/img/prelaoderAdmin.gif';

const Preloader = () => {
  return (
    <div className="preloader">
      <img src={preloader} alt="preloader" />
    </div>
  );
};

export default Preloader;
