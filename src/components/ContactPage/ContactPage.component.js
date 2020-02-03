import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Default from '../../layouts/Default';
import SEO from '../seo';

import './ContactPage.css';

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

  return (
    <Default className="ContactPage ContactPage__Container">
      <SEO title="Contact" />

      <h1 className="ContactPage__Title">
        Get in touch
      </h1>
      <div className="ContactPage__Content">
        <div className="ContactPage__LeftContent">
          <h2 className="ContactPage__Subtitle">Dejanos tu consulta</h2>
          <div className="ContactPage__Description">
            Un asesor se pondra en contacto a la brevedad
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
              placeholder="Consulta" multiline={true} rows={5}
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
    </Default>
  );
}

export default ContactPage;
