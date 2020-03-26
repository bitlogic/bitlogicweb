import React from 'react';
import Default from '../../layouts/Default';
import SEO from '../seo';
import ServiceItem from './ServiceItem';
import ServicePhoto from '../../../static/assets/photos/bitlogic_photo_4.jpg';
import './ServicesPage.css';
import { useStaticQuery, graphql } from 'gatsby';

const ServicesPage = () => {
  const {
    allServicesJson: { nodes },
  } = useStaticQuery(graphql`
    query ServicesPage {
      allServicesJson {
        nodes {
          title
          services {
            title
            description
          }
        }
      }
    }
  `);

  if (!nodes || !nodes.length) {
    return null;
  }

  const servicesData = nodes[0];

  return (
    <Default className="ServicesPage ServicesPage__Container">
      <SEO title="Services" />

      <h1 className="ServicesPage__Title">{servicesData.title}</h1>
      <div className="ServicesPage__Content">
        {servicesData.services.map(({ title, description }, i) => (
          <ServiceItem title={title} key={i}>
            {description}
          </ServiceItem>
        ))}
        <div className="ServicesPage__Image">
          <img src={ServicePhoto} alt="bitlogic servicios" />
        </div>
      </div>
    </Default>
  );
};

export default ServicesPage;
