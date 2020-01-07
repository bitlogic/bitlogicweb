import React from "react";
import { Link } from "gatsby";
import SEO from "../components/seo";
import Landing from "../layouts/Landing/Landing.component";

const IndexPage = () => (
  <Landing>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Landing>
)

export default IndexPage
