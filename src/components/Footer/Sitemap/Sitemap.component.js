import React from 'react';
import './Sitemap.css';
import { Link } from 'gatsby';

const SITEMAP_ITEMS = [
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

const Sitemap = () => {
  return (
    <ul className="Sitemap">
      {SITEMAP_ITEMS.map(({ label, to }, i) => (
        <li key={i} className="Sitemap__Item">
          <Link to={to} className="Sitemap__Link">
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Sitemap;
