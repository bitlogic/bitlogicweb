import React from 'react';

const CLIENTS = [
  '/assets/clients/US21-color.png',
  '/assets/clients/G-se_azul.png',
  '/assets/clients/gobierno-de-la-provincia-de-cordoba_color.png',
  '/assets/clients/Ilumno_color.png',
  '/assets/clients/Tecme_color-07.png',
  '/assets/clients/Kolektor_color-22.png',
  '/assets/clients/Quimex_COLOR.png',
  '/assets/clients/red-hat_color.png',
  '/assets/clients/Skael_color.png',
  '/assets/clients/Cboard_color1.png',
];

const Clients = () => (
  <div className="Clients Clients__Container">
    <div className="Clients__Images">
      {CLIENTS.map((imageSrc, i) => (
        <img src={imageSrc} key={i} />
      ))}
    </div>
  </div>
);

export default Clients;
