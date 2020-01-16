import React from 'react';
import Landing from '../../layouts/Landing';
import SEO from '../seo';
import Banner from './Sections/Banner';
import AboutUs from './Sections/AboutUs';

import './Home.css';

const Home = () => (
  <Landing className="Home Home__Container">
    <SEO title="Home" />

    <div className="Home__Content">
      <Banner />
      <AboutUs />
    </div>
  </Landing>
);

export default Home;