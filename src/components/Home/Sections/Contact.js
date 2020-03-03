import React from 'react';
import { Link } from 'gatsby';

const Contact = () => (
  <div className="Contact Contact__Container">
    <div className="Contact__Content">
      <div className="Contact__Text">
        <Link to="/contact" className="Contact__Link">
          Get in touch >>>
        </Link>
      </div>
    </div>
  </div>
);

export default Contact;
