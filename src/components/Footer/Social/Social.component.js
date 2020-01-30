import React from 'react';
import './Social.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

const SOCIAL_ITEMS = [
  {
    to: 'https://twitter.com/bitlogicos',
    logo: 'twitter',
  },
  {
    to: 'https://www.instagram.com/bitlogic.io',
    logo: 'instagram',
  },
  {
    to: 'https://ar.linkedin.com/company/bitlogic.io',
    logo: 'linkedin-in',
  },
  {
    to: '#',
    logo: 'youtube',
  },
  {
    to: 'https://github.com/bitlogic',
    logo: 'github',
  },
];

library.add(fab);

const Social = () => {
  return (
    <div className="Social">
      {SOCIAL_ITEMS.map(({ to, logo, prefix = 'fab' }, i) => (
        <a
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          className="Social__Item"
          key={i}
        >
          <FontAwesomeIcon icon={[prefix, logo]} />
        </a>
      ))}
    </div>
  );
};

export default Social;
