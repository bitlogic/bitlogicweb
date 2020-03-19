import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Default from '../../layouts/Default';
import SEO from '../seo';
import IsotipoBitlogic from '../../images/isotipo.png';
import './AboutUsPage.css';

const AboutUsPage = () => {
  const {
    allAboutUsJson: { nodes },
  } = useStaticQuery(graphql`
    query AboutPage {
      allAboutUsJson {
        nodes {
          title
          description
        }
      }
    }
  `);

  if (!nodes || !nodes.length) {
    return null;
  }

  const aboutUsPageData = nodes[0];

  return (
    <Default className="AboutUsPage AboutUsPage__Container">
      <SEO title="AboutUs" />

      <div
        className="AboutUsPage__Title"
        dangerouslySetInnerHTML={{ __html: aboutUsPageData.title }}
      />
      <div
        className="AboutUsPage__Content"
        dangerouslySetInnerHTML={{ __html: aboutUsPageData.description }}
      />
    </Default>
  );
};

export default AboutUsPage;
