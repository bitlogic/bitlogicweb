import React, { useState } from 'react';
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
    to: '/about-us',
  },
  {
    label: 'Servicios',
    to: '/services',
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
  const [expanded, setExpanded] = useState(false);

  const handleToggleExpand = () => {
    setExpanded((prev) => !prev);
  };

  const containerClassNames = classnames('Navbar Navbar__Container', {
    'Navbar--full': trigger,
  });

  const menuContainerClassNames = classnames('Navbar__MenuContainer', {
    'Navbar__MenuContainer--expanded': expanded,
  });

  return (
    <AppBar
      position="fixed"
      color="default"
      className={containerClassNames}
      elevation={trigger ? 1 : 0}
    >
      <Toolbar>
        <div className="Navbar__Logo">
          <Link to="/">
            <img src={bitlogicLogo} alt="Bitlogic" />
          </Link>
        </div>

        <IconButton
          edge="start"
          className="Navbar__MenuButton"
          color="inherit"
          aria-label="menu"
          onClick={handleToggleExpand}
        >
          <MenuIcon />
        </IconButton>

        <div className={menuContainerClassNames}>
          <ul className="Navbar__MenuList">
            {MENU_ITEMS.map(({ label, to }, i) => (
              <li key={i} className="Navbar__MenuList__Item">
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
