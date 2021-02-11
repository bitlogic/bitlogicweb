import React, { useState } from 'react';
import {
  Button,
  TextField,
  Typography,
  LinearProgress,
} from '@material-ui/core';
import { useStaticQuery, graphql } from 'gatsby';
import emailjs from 'emailjs-com';
import SendIcon from '@material-ui/icons/Send';
import Default from '../../layouts/Default';
import SEO from '../seo';
import HubspotForm from 'react-hubspot-form';

import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({});

  const {
    allContactJson: { nodes },
  } = useStaticQuery(graphql`
    query ContactPage {
      allContactJson {
        nodes {
          title
          description
          section
        }
      }
    }
  `);

  if (!nodes || !nodes.length) {
    return null;
  }

  const contactPageData = nodes[0];

  return (
    <Default className="ContactPage ContactPage__Container">
      <SEO title="Contact" />

      <h1 className="ContactPage__Title">{contactPageData.section}</h1>
      <div className="ContactPage__Content">
        <div className="ContactPage__FormContainer">
          <div className="ContactPage__LeftContent">
            <h2 className="ContactPage__Subtitle">{contactPageData.title}</h2>
            <div className="ContactPage__Description">
              {contactPageData.description}
            </div>
          </div>

          <div className="ContactPage__RightContent">
            <HubspotForm
              portalId="8668423"
              formId="b907e41f-0c77-4a8c-ad1c-0cf155ea2eb2"
              onSubmit={() => console.log('Submit!')}
              onReady={(form) => console.log('Form ready!')}
              loading={<div>Loading...</div>}
            />
          </div>
        </div>
      </div>
    </Default>
  );
};

export default ContactPage;
