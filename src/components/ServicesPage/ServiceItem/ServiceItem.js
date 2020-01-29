import React from 'react';

import './ServiceItem.css';

const ServiceItem = ({ title, children }) => (
  <section className="ServiceItem">
    <h2 className="ServiceItem__Title">{title}</h2>
    <p className="ServiceItem__Description">{children}</p>
  </section>
);

export default ServiceItem;
