import React from 'react';
import Default from '../../layouts/Default';
import SEO from '../seo';
import './BlogPage.css';
import BlogItem from './BlogItem.component';
import { useStaticQuery, graphql } from 'gatsby';

const BlogPage = () => {
  const {
    allBlogJson: { nodes },
  } = useStaticQuery(graphql`
    query BlogPage {
      allBlogJson {
        nodes {
          archive
          months
          latest
          entries {
            date
            description
            href
            image
            title
          }
        }
      }
    }
  `);

  if (!nodes || !nodes.length) {
    return null;
  }

  const blogData = nodes[0];

  return (
    <Default className="BlogPage BlogPage__Container">
      <SEO title="Blog" />
      <h1 className="BlogPage__Title">Blog</h1>
      <div className="BlogPage__Content">
        <div className="BlogPage__Entries">
          {blogData.entries.map((entry, i) => (
            <BlogItem key={i} {...entry} />
          ))}
        </div>
        <div className="BlogPage__Sidebar">
          <div className="BlogPage__LastEntries">
            <h3>{blogData.latest}</h3>
            <ul>
              {blogData.entries.map((entry, i) => (
                <li key={i}>{entry.title}</li>
              ))}
            </ul>
          </div>
          <div className="BlogPage__Archive">
            <h3>{blogData.archive}</h3>
            <ul>
              {blogData.months.map((month, i) => (
                <li key={i}>{month}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Default>
  );
};
export default BlogPage;
