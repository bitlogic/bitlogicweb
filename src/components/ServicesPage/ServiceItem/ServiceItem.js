import React from 'react';
import PropTypes from 'prop-types';
import './ServiceItem.css';

const ServiceItem = ({ title, children }) => (
  <section className="ServiceItem">
    <h2 className="ServiceItem__Title">{title}</h2>
    <p className="ServiceItem__Description">{children}</p>
  </section>
);

ServiceItem.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default ServiceItem;
