import React from 'react';
import { Link } from 'gatsby';

const Culture = () => (
  <div className="Culture Culture__Container">
    <div className="Culture__Content">
      <div className="Culture__Text">
        EN BASE A LO QUE CREEMOS, <span className="Culture_Span">CREAMOS</span>
      </div>
      <div className="Culture__Link">
        <Link to="/culture" className="Home__Link">
          Bitway >>>
        </Link>
      </div>
    </div>
  </div>
);

export default Culture;