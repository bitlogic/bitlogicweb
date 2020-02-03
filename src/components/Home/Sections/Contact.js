import React from 'react';
import { Link } from 'gatsby';
import ContactImage from '../../../images/bubbles.png';

const Contact = () => (
  <div className="Contact Contact__Container">
    <img src={ContactImage} alt="Contact" />
    <div className="Contact__Content">
      <div className="Contact__Text">
        Impulsamos tu transformación digital con ideas creativas que alcanzan nuevos destinos.
      </div>
      <div className="Contact__Link">
        <Link to="/contact" className="Home__Link">
          We are >>>
        </Link>
      </div>
    </div>
  </div>
);

export default Contact;