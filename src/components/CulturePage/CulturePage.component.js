import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import SEO from '../seo';
import Default from '../../layouts/Default';

import './CulturePage.css';

const PHOTOS = [
  {
    imageUrl: '../assets/bitway/bitway-1.jpg',
    textImage:
      'Somos audaces, incansables y atrevidos. Transformamos cada meta en un desafío personal que nos llena de insomnio y orgullo.',
  },
  {
    imageUrl: '../assets/bitway/bitway-2.jpg',
    textImage:
      'Nos atrevemos a decir lo que pensamos, porque para innovar hay que  animarse a creer en uno mismo.',
  },
  {
    imageUrl: '../assets/bitway/bitway-3.jpg',
    textImage:
      'Elegimos caminar distinto  y con un corazón audaz construir un mundo mejor.',
  },
  {
    imageUrl: '../assets/bitway/bitway-4.jpg',
    textImage:
      'Inconformistas de nacimiento salimos al mundo a desafiarlo.  Somos de los que dicen y hacen,  en casa nos enseñaron a cumplir nuestras promesas.',
  },
  {
    imageUrl: '../assets/bitway/bitway-5.jpg',
    textImage:
      'Nos animamos a cruzar límites, a no ir por el camino amarillo, a buscar mil veces a Wally.',
  },
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
      <div className="CulturePage TitleContent">
        <h1 className="CulturePage__Title">{culturePageData.title}</h1>
        <div className="CulturePage__FirstText">
          <p
            dangerouslySetInnerHTML={{ __html: culturePageData.description }}
          ></p>
          <span>SOMOS DISTINTOS</span>
          <br />
          <a target="_blank" href={culturePageData.link}>
            Join us >>>
          </a>
        </div>
      </div>
      <div className="CulturePage__Content">
        <div className="CulturePage__ImagesContainer">
          {PHOTOS.map((imageSrc, i) => (
            <img
              key={i}
              src={imageSrc.imageUrl}
              alt={imageSrc.textImage}
              className={`CulturePage__Image CulturePage__Image--${
                photoIndex === i ? 'active' : 'hidden'
              }`}
            />
          ))}
          {PHOTOS.map((imageSrc, i) => (
            <h4
              key={i}
              className={`CulturePage__Image textoSlider CulturePage__Image--${
                photoIndex === i ? 'active' : 'hidden'
              }`}
            >
              {imageSrc.textImage}
            </h4>
          ))}
        </div>
      </div>
    </Default>
  );
};

export default CulturePage;
