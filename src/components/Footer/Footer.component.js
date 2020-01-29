import React from 'react';
import bitlogicLogo from '../../images/logo.png';
import './Footer.css';
import Social from './Social/Social.component';
import Sitemap from './Sitemap/Sitemap.component';
import ContactData from './ContactData/ContactData.component';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer__Container">
        <div className="Footer__Logo">
          <img src={bitlogicLogo} alt="bitlogic" />
        </div>

        <div className="Footer__ContactData">
          <ContactData />
        </div>

        <div className="Footer__Sitemap">
          <Sitemap />
        </div>

        <div className="Footer__Social">
          <Social />
        </div>
      </div>
    </div>
  );
};

export default Footer;
