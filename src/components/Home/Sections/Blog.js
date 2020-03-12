import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Blog1 from '../../../images/blog-1.jpg';

const BLOG_MOCK_DATA = {
  image: Blog1,
  date: '29 de Diciembre',
  title: 'Lorem Ipsum',
  text:
    'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
  href: '/blog-detail',
};

const Blog = () => {
  const {
    allHomepageJson: { nodes },
  } = useStaticQuery(graphql`
    query BlogSection {
      allHomepageJson(filter: { name: { eq: "blog-section" } }) {
        nodes {
          enabled
          name
        }
      }
    }
  `);

  if (!nodes || !nodes.length) {
    return null;
  }

  const blogSectionData = nodes[0];

  if (!blogSectionData.enabled) {
    return null;
  }

  const blogEntries = [BLOG_MOCK_DATA, BLOG_MOCK_DATA, BLOG_MOCK_DATA];

  return (
    <div className="Blog Blog__Container">
      {blogEntries.map((blogItem, index) => (
        <div className="Blog__Content" key={index}>
          <div className="Blog__Content__Img">
            <img src={Blog1} alt={blogItem.title} />
          </div>
          <div className="Blog__Content__Text">
            <div className="Blog__Date">{blogItem.date}</div>
            <div className="Blog__Title">{blogItem.title}</div>
            <div className="Blog__Text">{blogItem.text}</div>
            <div className="Blog__Link">
              <Link to={blogItem.href} className="Home__Link">
                Ver Más >>>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
