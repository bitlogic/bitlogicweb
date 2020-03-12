import React from 'react';
import Default from '../../layouts/Default';
import SEO from '../seo';
import './CulturePage.css';
import CultureImage from '../../images/staff.jpg';
import { useStaticQuery, graphql } from 'gatsby';

const CulturePage = () => {
  const {
    allCultureJson: { nodes },
  } = useStaticQuery(graphql`
    query CulturePage {
      allCultureJson {
        nodes {
          title
          description
          link
        }
      }
    }
  `);

  if (!nodes || !nodes.length) {
    return null;
  }

  const culturePageData = nodes[0];

  return (
    <Default className="CulturePage CulturePage__Container">
      <SEO title="Culture" />
      <h1 className="CulturePage__Title">{culturePageData.title}</h1>
      <div className="CulturePage__Content">
        <p className="CulturePage__Description">
          {culturePageData.description}
        </p>
        <div>
          <img src={CultureImage} alt="bitlogic" />
          <div className="CulturePage__Link">
            <a href={culturePageData.link}>>> Jobs</a>
          </div>
        </div>
      </div>
    </Default>
  );
};

export default CulturePage;
