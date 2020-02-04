import React from 'react';
import Default from "../../layouts/Default";
import SEO from "../seo";
import './CulturePage.css';
import CultureImage from '../../images/staff.jpg'
import { Link } from 'gatsby';

const CULTURE_DESCRIPTION = "En Bitlogic nos gusta transformar cada meta en " +
    "un desafío personal que nos llena de orgullo. " +
    "Aprendiendo constantemente, nos gusta que nuestro equipo " +
    "tenga la libertad de hacer su propia investigación, " +
    "desarrollo y potenciar la creatividad. Buscamos resultados " +
    "de la más alta calidad conformando equipos participativos. " +
    "Elegimos caminar distinto y con un corazón audaz construir " +
    "un mundo mejor.";

const JOBS_LINK = "https://bitlogic.hiringroom.com/jobs";

const CulturePage = () => (
    <Default className="CulturePage CulturePage__Container">
        <SEO title="Culture" />
        <h1 className="CulturePage__Title">
            EN BASE A <br />
            LO QUE <br />
            CREEMOS, <br />
            CREAMOS
        </h1>
        <div className="CulturePage__Content">
            <p className="CulturePage__Description">{CULTURE_DESCRIPTION}</p>
            <div>
                <img src={CultureImage} alt="bitlogic" />
                <div className="CulturePage__Link">
                    <a href={JOBS_LINK}>>> Jobs</a>
                </div>
            </div>
        </div>
    </Default>
);

export default CulturePage;