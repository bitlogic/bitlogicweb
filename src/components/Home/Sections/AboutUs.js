import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

const AboutUs = () => {
  const {
    allHomepageJson: { nodes },
  } = useStaticQuery(graphql`
    query AboutUsSection {
      allHomepageJson(filter: { name: { eq: "about-us-section" } }) {
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

  const aboutUsSectionData = nodes[0];

  if (!aboutUsSectionData.enabled) {
    return null;
  }

  return (
    <div className="AboutUs AboutUs__Container">
      <div className="AboutUs__AnimationContainer">
        <span>.</span>
        <span>:</span>
        <span>.</span>
        <span>:</span>
        <span>.</span>
        <span>:</span>
        <span>.</span>
      </div>
      <div className="AboutUs__Content">
        <div className="AboutUs__Text">{aboutUsSectionData.text}</div>
        <div className="AboutUs__Link">
          <Link to="/about-us" className="Home__Link">
            Nosotros >>>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
