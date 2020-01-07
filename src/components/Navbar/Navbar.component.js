import React from 'react';
import { Link } from 'gatsby';
import classnames from 'classnames';
import bitlogicLogo from '../../images/logo.png';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import './Navbar.css';

const MENU_ITEMS = [
  {
    label: 'Nosotros',
    to: '/',
  },
  {
    label: 'Servicios',
    to: '/',
  },
  {
    label: 'Bitway',
    to: '/',
  },
  {
    label: 'Proyect',
    to: '/',
  },
  {
    label: 'Blog',
    to: '/',
  },
  {
    label: 'Contacto',
    to: '/',
  },
];

const Navbar = () => {
  const trigger = useScrollTrigger();

  const containerClassNames = classnames(
    'Navbar Navbar__Container',
    {
      'Navbar--full': trigger,
    },
  );

  return (
    <AppBar position="fixed" color="default" className={containerClassNames} elevation={0}>
      <Toolbar>
        <div className="Navbar__Logo">
          <img src={bitlogicLogo} alt="Bitlogic" />
        </div>

        <div className="Navbar__MenuContainer">
          <ul className="Navbar__MenuList">
            {MENU_ITEMS.map(({ label, to }, i) => (
              <li key={i} className="Navbar__MenuList__Item">
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <IconButton edge="start" className="Navbar__MenuButton" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
