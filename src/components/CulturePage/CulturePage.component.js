import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import SEO from '../seo';
import Default from '../../layouts/Default';

import './CulturePage.css';

const PHOTOS = [
  '/assets/photos/bitlogic_photo_11.jpg',
  '/assets/photos/bitlogic_photo_12.jpg',
  '/assets/photos/bitlogic_photo_3.jpg',
  '/assets/photos/bitlogic_photo_4.jpg',
];

const CulturePage = () => {
  const [photoIndex, setPhotoIndex] = useState(0);

  let timeoutFn = null;
  useEffect(() => {
    if (timeoutFn) {
      clearTimeout(timeoutFn);
    }
    timeoutFn = setInterval(() => {
      const newIndex = photoIndex + 1;
      setPhotoIndex(PHOTOS.length > newIndex ? newIndex : 0);
    }, 3000);

    return () => {
      if (timeoutFn) {
        clearTimeout(timeoutFn);
      }
    };
  }, [photoIndex]);

  const {
    allCultureJson: { nodes },
  } = useStaticQuery(graphql`
    query CulturePage {
      allCultureJson {
        nodes {
          title
          description
          manifestItems
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
        <div>
          <div className="CulturePage__Manifest">
            <div className="CulturePage__Manifest__Title">Manifiesto</div>
            <div className="CulturePage__Manifest__List">
              <ul>
                {culturePageData.manifestItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className="CulturePage__Description"
            dangerouslySetInnerHTML={{ __html: culturePageData.description }}
          />
        </div>
        <div>
          <div className="CulturePage__ImagesContainer">
            {PHOTOS.map((imageSrc, i) => (
              <img key={i} src={imageSrc} alt={`bitlogic #${i}`} />
            ))}
          </div>
          <div className="CulturePage__Link">
            <a target="_blank" href={culturePageData.link}>
              >> Jobs
            </a>
          </div>
        </div>
      </div>
    </Default>
  );
};

export default CulturePage;
