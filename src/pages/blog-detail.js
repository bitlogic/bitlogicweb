import React from 'react';
import Default from '../layouts/Default';
import SEO from '../components/seo';

const BLOG_ENTRIES = [
  {
    date: '28-12-2019',
    title: 'Some title for this entry',
    description:
      'Some description for this entry, it needs a loooooooooong string.',
    image: 'https://bitlogic-static-web.netlify.com/img/blog/blog-1.jpg',
    href: '/blog-detail',
  },
  {
    date: '10-08-2019',
    title: 'Some title for this entry',
    description:
      'Some description for this entry, it needs a loooooooooong string.',
    image: 'https://bitlogic-static-web.netlify.com/img/blog/blog-1.jpg',
    href: '/blog-detail',
  },
  {
    date: '13-02-2018',
    title: 'Some title for this entry',
    description:
      'Some description for this entry, it needs a loooooooooong string.',
    image: 'https://bitlogic-static-web.netlify.com/img/blog/blog-1.jpg',
    href: '/blog-detail',
  },
  {
    date: '15-04-2019',
    title: 'Some title for this entry',
    description:
      'Some description for this entry, it needs a loooooooooong string.',
    image: 'https://bitlogic-static-web.netlify.com/img/blog/blog-1.jpg',
    href: '/blog-detail',
  },
];

const BLOG_ARCHIVE = ['Diciembre', 'Noviembre', 'Octubre', 'Septiembre'];

const BLOG_CONTENT = {
  title: 'Some title for this entry',
  description:
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  image: 'https://bitlogic-static-web.netlify.com/img/blog/blog-1.jpg',
};

const BlogDetail = () => (
  <Default className="BlogDetail BlogDetail__Container">
    <SEO title={BLOG_CONTENT.title} />
    <h1 className="BlogDetail__Title">{BLOG_CONTENT.title}</h1>
    <div className="BlogDetail__Content">
      <div className="BlogDetail__Post">
        <div className="BlogDetail__Image">
          <img src={BLOG_CONTENT.image} alt={BLOG_CONTENT.title} />
        </div>
        <h1 className="BlogDetail_Title">{BLOG_CONTENT.title}</h1>
        <p className="BlogDetail_Description">{BLOG_CONTENT.description}</p>
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
export default BlogDetail;
