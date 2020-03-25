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

  const isSubmitEnabled = () => {
    if (!formData.name || !formData.name.trim().length) {
      return false;
    }

    if (!formData.email || !formData.email.trim().length) {
      return false;
    }

    if (!formData.phone || !formData.phone.trim().length) {
      return false;
    }

    if (!formData.body || !formData.body.trim().length) {
      return false;
    }

    return true;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const now = new Date();

    setFormData({
      ...formData,
      isLoading: true,
    });

    if (isSubmitEnabled()) {
      const data = {
        ...formData,
        date: `${now.getDate()}/${now.getMonth()}/${now.getFullYear()}`,
        time: `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`,
      };

      try {
        await emailjs.send(
          'bitlogic',
          'basetemplate',
          data,
          'user_qKgUsk9KEtGfO2BIQapOO'
        );
        setFormData({
          ...formData,
          sent: true,
          isLoading: false,
        });
      } catch (e) {
        console.error(e);
        setFormData({
          ...formData,
          sent: false,
          isLoading: false,
        });
      }
    }
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

              <div
                className={`ContactPage__FormContainer__CTAContainer ${
                  formData.isLoading
                    ? 'ContactPage__FormContainer__CTAContainer--loading'
                    : ''
                }`}
              >
                <LinearProgress
                  color="primary"
                  className="ContactPage__FormContainer__CTAContainer__SubmitProgress"
                />
                {!formData.sent && (
                  <Button
                    className="ContactPage__FormContainer__CTAContainer__SubmitButton"
                    disabled={!isSubmitEnabled()}
                    type="submit"
                    variant="contained"
                    color="secondary"
                    endIcon={<SendIcon />}
                  >
                    Enviar
                  </Button>
                )}
                {formData.sent && (
                  <Typography variant="body1">
                    Tu mensaje ha sido enviado con éxito. ¡Gracias!
                  </Typography>
                )}
              </div>
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
