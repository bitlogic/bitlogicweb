import React from 'react';
import Default from '../../layouts/Default';
import SEO from '../seo';
import './ContactPage.css';
import { OutlinedInput, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const ContactPage = () => (
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
        <OutlinedInput id="time" type="text" placeholder="Nombre y Apellido" className="ContactPage__Input" />
        <OutlinedInput id="time" type="text" placeholder="Teléfono" className="ContactPage__Input" />
        <OutlinedInput id="time" type="text" placeholder="Correo Electrónico" className="ContactPage__Input" />
        <OutlinedInput id="time" type="text" placeholder="Consulta" multiline={true} rows={5} className="ContactPage__Input" />

        <Button
          variant="contained"
          color="primary"
          endIcon={<SendIcon/>}
          onClick={() => { console.log('onClick'); }}
        >
          Enviar
        </Button>
      </div>

    </div>
  </Default>
);

export default ContactPage;
