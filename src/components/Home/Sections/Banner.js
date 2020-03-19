import React from 'react';
import BitlogicBanner from '../../../images/logoprincipal.png';

const Banner = () => (
  <div className="Banner Banner__Container">
    <img src={BitlogicBanner} alt="Bitlogic logo" />
    <div className="Banner__Slogan">
      <span>#</span>
      <span>in</span>
      <span>code</span>
      <span>we</span>
      <span>trust</span>
    </div>
  </div>
);

export default Banner;
