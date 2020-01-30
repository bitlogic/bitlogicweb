import React from 'react';
import './ContactData.css';

const CONTACT_ITEMS = [
  'Tristán Malbrán 4355',
  'Córdoba, Argentina',
  '+54 9 351 157 404 863',
];

const ContactData = () => {
  return (
    <ul className="ContactData">
      {CONTACT_ITEMS.map((data, i) => (
        <li className="ContactData__Item" key={i}>
          {data} <span>&gt;&gt;&gt;</span>
        </li>
      ))}
    </ul>
  );
};

export default ContactData;
