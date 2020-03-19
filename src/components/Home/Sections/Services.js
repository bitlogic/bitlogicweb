import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

const Services = () => {
  const {
    allHomepageJson: { nodes },
  } = useStaticQuery(graphql`
    query ServicesSection {
      allHomepageJson(filter: { name: { eq: "services-section" } }) {
        nodes {
          enabled
          text
          name
        }
      }
    }
  `);

  if (!nodes || !nodes.length) {
    return null;
  }

  const servicesSectionData = nodes[0];

  if (!servicesSectionData.enabled) {
    return null;
  }

  return (
    <div className="Services Services__Container">
      <div className="Services__Content">
        <div className="Services__Text">{servicesSectionData.text}</div>
        <div className="Services__Link">
          <Link to="/services" className="Home__Link">
            Servicios >>>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
