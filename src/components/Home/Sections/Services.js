import React from 'react';
import { Link } from 'gatsby';

const Services = () => (
  <div className="Services Services__Container">
    <div className="Services__Content">
      <div className="Services__Text">
        Nos gusta desafiar a la tecnología con cada uno de nuestros servicios.
      </div>
      <div className="Services__Link">
        <Link to="/services" className="Home__Link">
          Get in >>>
        </Link>
      </div>
    </div>
  </div>
);

export default Services;