import React from 'react';
import PropTypes from 'prop-types';
import { Toolbar } from '@material-ui/core';
import Navbar from '../../components/Navbar';

import './Landing.css';

const Landing = ({ children, className }) => (
  <div className={`Landing Landing__Container ${className}`}>
    <div className="Landing__Navbar">
      <Navbar />
    </div>

    <Toolbar />

    <div className="Landing__Content">
      {children}
    </div>
  </div>
);

Landing.propTypes = {
  className: 'Landing__Default',
};

Landing.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Landing;