import React from 'react';
import PropTypes from 'prop-types';
import { Toolbar } from '@material-ui/core';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './Default.css';

const Default = ({ children, className }) => (
  <div className={`Default Default__Container ${className}`}>
    <div className="Default__Navbar">
      <Navbar />
    </div>

    <Toolbar />

    <div className="Default__Content">{children}</div>

    <div className="Default__Navbar">
      <Footer />
    </div>
  </div>
);

Default.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Default;
