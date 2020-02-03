import React from 'react';
import Default from '../../layouts/Default';
import SEO from '../seo';
import IsotipoBitlogic from '../../images/isotipo.png';
import './AboutUsPage.css';

const AboutUsPage = () => (
  <Default className="AboutUsPage AboutUsPage__Container">
    <SEO title="AboutUs" />

    <h1 className="AboutUsPage__Title">
      Impulsamos tu transformación digital con ideas creativas que alcanzan
      nuevos destinos.
    </h1>
    <div className="AboutUsPage__Content">
      <div className="AboutUsPage__Description">
        Bitlogic es una empresa audaz, que apuesta a la chispa que se enciende
        en cada desafío, que marca la diferencia y logra destruir el
        conformismo. Desarrollamos productos que generen un cambio, porque
        trabajando en conjunto con nuestros clientes, te acompañamos a la
        transformación que te permitirá evolucionar a gran velocidad y escala.
      </div>
      <div className="AboutUsPage__Image">
        <img src={IsotipoBitlogic} alt="bitlogic" />
        <br />
        ANIMACION
      </div>
    </div>
  </Default>
);

export default AboutUsPage;
