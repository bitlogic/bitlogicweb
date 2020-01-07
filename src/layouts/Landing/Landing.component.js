import React from 'react';
import PropTypes from 'prop-types';
import { Toolbar } from '@material-ui/core';
import Navbar from '../../components/Navbar';

import './Landing.css';

const Landing = ({ children }) => (
  <div className="Landing Landing__Container">
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
  children: PropTypes.node,
};

export default Landing;