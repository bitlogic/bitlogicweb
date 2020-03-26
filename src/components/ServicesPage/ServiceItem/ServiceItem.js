import React from 'react';
import PropTypes from 'prop-types';
import './ServiceItem.css';
import IsotipoBitlogic from '../../../images/isotipo.png';

const ServiceItem = ({ title, children }) => (
  <section className="ServiceItem">
    <h2 className="ServiceItem__Title">
      <img src={IsotipoBitlogic} alt="bitlogic" class="ServiceItem__Img" />
      {title}
    </h2>
    <p className="ServiceItem__Description">{children}</p>
  </section>
);

ServiceItem.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default ServiceItem;
