import React from 'react';
import Default from '../../layouts/Default';
import SEO from '../seo';
import './BlogPage.css';
import BlogItem from './BlogItem.component';

const BLOG_ENTRIES = [
  {
    date: '28-12-2019',
    title: 'Some title for this entry',
    description:
      'Some description for this entry, it needs a loooooooooong string.',
    image: 'https://bitlogic-static-web.netlify.com/img/blog/blog-1.jpg',
    href: '/link1',
  },
  {
    date: '10-08-2019',
    title: 'Some title for this entry',
    description:
      'Some description for this entry, it needs a loooooooooong string.',
    image: 'https://bitlogic-static-web.netlify.com/img/blog/blog-1.jpg',
    href: '/link1',
  },
  {
    date: '13-02-2018',
    title: 'Some title for this entry',
    description:
      'Some description for this entry, it needs a loooooooooong string.',
    image: 'https://bitlogic-static-web.netlify.com/img/blog/blog-1.jpg',
    href: '/link1',
  },
  {
    date: '15-04-2019',
    title: 'Some title for this entry',
    description:
      'Some description for this entry, it needs a loooooooooong string.',
    image: 'https://bitlogic-static-web.netlify.com/img/blog/blog-1.jpg',
    href: '/link1',
  },
];

const BLOG_ARCHIVE = ['Diciembre', 'Noviembre', 'Octubre', 'Septiembre'];

const BlogPage = () => (
  <Default className="BlogPage BlogPage__Container">
    <SEO title="Blog" />
    <h1 className="BlogPage__Title">Blog</h1>
    <div className="BlogPage__Content">
      <div className="BlogPage__Entries">
        {BLOG_ENTRIES.map((entry, i) => (
          <BlogItem key={i} {...entry} />
        ))}
      </div>
      <div className="BlogPage__Sidebar">
        <div className="BlogPage__LastEntries">
          <h3>Últimas entradas</h3>
          <ul>
            {BLOG_ENTRIES.map((entry, i) => (
              <li key={i}>{entry.title}</li>
            ))}
          </ul>
        </div>
        <div className="BlogPage__Archive">
          <h3>Archivo de entradas</h3>
          <ul>
            {BLOG_ARCHIVE.map((month, i) => (
              <li key={i}>{month}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </Default>
);

export default BlogPage;
