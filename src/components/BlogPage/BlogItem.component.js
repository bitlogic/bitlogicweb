import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
const BlogItem = ({ title, date, description, image, href }) => {
  return (
    <div className="BlogItem BlogItem__Container">
      <div className="BlogItem__Image">
        <img src={image} alt={title} />
      </div>
      <div className="BlogItem__Content">
        <div className="BlogItem__Header">
          <div className="BlogItem__Header__Date">{date}</div>
          <div className="BlogItem__Header__Title">
            <h4>{title}</h4>
          </div>
        </div>
        <div className="BlogItem__Description">{description}</div>
      </div>

      <div className="BlogItem__ReadMore">
        <Link to={href} className="BlogItem__Link">
          Ver más >>>
        </Link>
      </div>
    </div>
  );
};

BlogItem.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default BlogItem;
