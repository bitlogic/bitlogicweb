import React from 'react';
import { Link } from 'gatsby';
import AboutUsImage from '../../../images/bubbles.png';

const AboutUs = () => (
  <div className="AboutUs AboutUs__Container">
    <img src={AboutUsImage} alt="About Us" />
    <div className="AboutUs__Content">
      <div className="AboutUs__Text">
        Impulsamos tu transformación digital con ideas creativas que alcanzan nuevos destinos.
      </div>
      <div className="AboutUs__Link">
        <Link to="/about-us" className="Home__Link">
          We are >>>
        </Link>
      </div>
    </div>
  </div>
);

export default AboutUs;