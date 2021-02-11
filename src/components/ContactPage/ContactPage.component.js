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

  return (
    <Default className="ContactPage ContactPage__Container">
      <SEO title="Contact" />
      <div id="formhs">
        <HubspotForm
          portalId="8668423"
          formId="b907e41f-0c77-4a8c-ad1c-0cf155ea2eb2"
          onSubmit={() => console.log('Submit!')}
          onReady={(form) => console.log('Form ready!')}
          loading={<div>Loading...</div>}
        />
      </div>
    </Default>
  );
};

export default ContactPage;
