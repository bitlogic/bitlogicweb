import React from 'react';
import { Link } from 'gatsby';

const Projects = () => (
  <div className="Projects Projects__Container">
    <div className="Projects__Content">
      <div className="Projects__Text">
          Cada proyecto es una posibilidad de innovar.</div>
      <div className="Projects__Link">
        <Link to="/projects" className="Home__Link">
          Get way >>>
        </Link>
      </div>
    </div>
  </div>
);

export default Projects;