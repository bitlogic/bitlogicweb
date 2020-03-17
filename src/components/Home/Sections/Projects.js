import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

const Projects = () => {
  const {
    allHomepageJson: { nodes },
  } = useStaticQuery(graphql`
    query ProjectsSection {
      allHomepageJson(filter: { name: { eq: "projects-section" } }) {
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

  const projectsSectionData = nodes[0];

  if (!projectsSectionData.enabled) {
    return null;
  }

  return (
    <div className="Projects Projects__Container">
      <div className="Projects__Content">
        <div className="Projects__Text">{projectsSectionData.text}</div>
        {/* <div className="Projects__Link">
          <Link to="/projects" className="Home__Link">
            Get way >>>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
