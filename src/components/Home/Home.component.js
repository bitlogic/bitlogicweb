import React from 'react';
import Landing from '../../layouts/Landing';
import SEO from '../seo';
import Banner from './Sections/Banner';
import AboutUs from './Sections/AboutUs';
import Services from './Sections/Services';
import Culture from './Sections/Culture';
import Blog from './Sections/Blog';
import Contact from './Sections/Contact';

import './Home.css';

const Home = () => (
  <Landing className="Home Home__Container">
    <SEO title="Home" />

    <div className="Home__Content">
      <Banner />
      <AboutUs />
      <Services />
      <Culture />
      <Blog />
      <Contact />
    </div>
  </Landing>
);

export default Home;
