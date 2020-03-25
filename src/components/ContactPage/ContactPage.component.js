import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { useStaticQuery, graphql } from 'gatsby';
import SendIcon from '@material-ui/icons/Send';
import Default from '../../layouts/Default';
import SEO from '../seo';

import './ContactPage.css';

const CLIENTS = [
  '/assets/clients/Cboard_color1.png',
  '/assets/clients/G-se_azul.png',
  '/assets/clients/gobierno-de-la-provincia-de-cordoba_color.png',
  '/assets/clients/Ilumno_color.png',
  '/assets/clients/Kolektor_color-22.png',
  '/assets/clients/Quimex_COLOR.png',
  '/assets/clients/red-hat_color.png',
  '/assets/clients/Skael_color.png',
  '/assets/clients/Tecme_color-07.png',
  '/assets/clients/US21-color.png',
];

const ContactPage = () => {
  const [formData, setFormData] = useState({});

  const onFormChange = (property) => ({ target: { value } }) => {
    setFormData({
      ...formData,
      [property]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

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
            <form onSubmit={onSubmit}>
              <TextField
                variant="outlined"
                placeholder="Nombre y Apellido"
                className="ContactPage__Input"
                value={formData.name || ''}
                onChange={onFormChange('name')}
                required
              />
              <TextField
                variant="outlined"
                placeholder="Teléfono"
                className="ContactPage__Input"
                value={formData.phone || ''}
                onChange={onFormChange('phone')}
              />
              <TextField
                variant="outlined"
                placeholder="Correo Electrónico"
                className="ContactPage__Input"
                value={formData.email || ''}
                onChange={onFormChange('email')}
              />
              <TextField
                variant="outlined"
                placeholder="Consulta"
                multiline={true}
                rows={5}
                className="ContactPage__Input"
                value={formData.body || ''}
                onChange={onFormChange('body')}
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                endIcon={<SendIcon />}
              >
                Enviar
              </Button>
            </form>
          </div>
        </div>

        <div className="ContactPage__Clients">
          <h2 className="ContactPage__Clients__Title">Clientes</h2>
          <div className="ContactPage__Clients__Images">
            {CLIENTS.map((imageSrc, i) => (
              <img src={imageSrc} key={i} />
            ))}
          </div>
        </div>
      </div>
    </Default>
  );
};

export default ContactPage;
