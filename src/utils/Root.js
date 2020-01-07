import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

import './main.css';

const Theme = ({ children }) => (
  <React.Fragment>
    <Helmet>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
    </Helmet>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />

      <div className="AppContainer">
        {children}
      </div>
    </ThemeProvider>
  </React.Fragment>
);

Theme.propTypes = {
  children: PropTypes.node,
};

export default Theme;
