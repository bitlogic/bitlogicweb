import React from 'react';
import { Link } from 'gatsby';
import Blog1 from '../../../images/blog-1.jpg';
import Blog2 from '../../../images/blog-2.jpg';
import Blog3 from '../../../images/blog-3.jpg';

const Blog = () => (
  <div className="Blog Blog__Container">
    {/* Blog 1 */}

    <div className="Blog__Content">
        <div className="Blog__Content__Img">
            <img src={Blog1} alt="Blog 1" />
        </div>
        <div className="Blog__Content__Text">
            <div className="Blog__Date">29 de Diciembre</div>
            <div className="Blog__Title">Lorem Ipsum</div>
            <div className="Blog__Text">
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </div>
            <div className="Blog__Link">
                <Link to="/Blog" className="Home__Link">
                Ver Más >>>
                </Link>
            </div>
        </div>
    </div>

    {/* Blog 2 */}
    <div className="Blog__Content">
        <div className="Blog__Content__Img">
            <img src={Blog2} alt="Blog 2" />
        </div>
        <div className="Blog__Content__Text">
            <div className="Blog__Date">29 de Diciembre</div>
            <div className="Blog__Title">Lorem Ipsum</div>
            <div className="Blog__Text">
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </div>
            <div className="Blog__Link">
                <Link to="/Blog" className="Home__Link">
                Ver Más >>>
                </Link>
            </div>
        </div>
    </div>

    {/* Blog 3 */}
    <div className="Blog__Content">
        <div className="Blog__Content__Img">
            <img src={Blog3} alt="Blog 3" />
        </div>
        <div className="Blog__Content__Text">
            <div className="Blog__Date">29 de Diciembre</div>
            <div className="Blog__Title">Lorem Ipsum</div>
            <div className="Blog__Text">
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </div>
            <div className="Blog__Link">
                <Link to="/Blog" className="Home__Link">
                Ver Más >>>
                </Link>
            </div>
        </div>
    </div>
</div>
);

export default Blog;