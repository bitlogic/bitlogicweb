import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Default from '../../layouts/Default';
import SEO from '../seo';
import './AboutUsPage.css';

const PHOTOS = [
  '/assets/photos/bitlogic_photo_9.jpg',
  '/assets/photos/bitlogic_photo_6.jpg',
  '/assets/photos/bitlogic_photo_7.jpg',
  '/assets/photos/bitlogic_photo_8.jpg',
];

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
      <div className="AboutUsPage__ImagesContainer">
        {PHOTOS.map((imageSrc, i) => (
          <img key={i} src={imageSrc} alt={`bitlogic #${i}`} />
        ))}
      </div>
    </Default>
  );
};

export default AboutUsPage;
