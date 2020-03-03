import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

const Culture = () => {
  const {
    allHomepageJson: { nodes },
  } = useStaticQuery(graphql`
    query CultureSection {
      allHomepageJson(filter: { name: { eq: "culture-section" } }) {
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

  const cultureSectionData = nodes[0];

  if (!cultureSectionData.enabled) {
    return null;
  }

  const cultureText = cultureSectionData.text.split(' ');
  const cultureAnimatedText = cultureText.pop();

  return (
    <div className="Culture Culture__Container">
      <div className="Culture__Content">
        <div className="Culture__Text">
          {cultureText.join(' ')}
          <div className="Culture_Span">{cultureAnimatedText}</div>
        </div>
        <div className="Culture__Link">
          <Link to="/culture" className="Home__Link">
            Bitway >>>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Culture;
