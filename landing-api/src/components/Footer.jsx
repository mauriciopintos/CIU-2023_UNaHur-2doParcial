import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = ({redsocial}) => {
    return (
        <Fragment>
            <div className="footer text-center">
                <div className='redes'>
                    <ul className="list-inline text-center">
                    <li className="list-inline-item">
                        <a
                        href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.virbela.com%2Fgo%2Fmetaverse-future-of-work%3Futm_source%3Dlinkedin%26utm_medium%3Dsocial-share%26utm_campaign%3Dmetaverse-panel-2021-04"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <FontAwesomeIcon icon={faFacebook} className="icono"/>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a
                        href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.virbela.com%2Fgo%2Fmetaverse-future-of-work%3Futm_source%3Dlinkedin%26utm_medium%3Dsocial-share%26utm_campaign%3Dmetaverse-panel-2021-04"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <FontAwesomeIcon icon={faLinkedin} className="icono"/>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a
                        href="https://twitter.com/share?text=Join+a+one-of-a-kind+interactive+panel+discussion+with+the+founders+of+Second+Life%2C+Virbela%2C+and+other+thought+leaders+in+VR%2FAR+space.+&url=https%3A%2F%2Fwww.virbela.com%2Fgo%2Fmetaverse-future-of-work%3Futm_source%3Dlinkedin%26utm_medium%3Dsocial-share%26utm_campaign%3Dmetaverse-panel-2021-04"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <FontAwesomeIcon icon={faTwitter} className="icono"/>
                        </a>
                    </li>
                    </ul>
                </div>
                
                <p>Construcción de Interfáces de Usuario - UNaHur</p>
                <p>Todo el contenido es utilizado con fines didácticos a los efectos del 2do Parcial</p>
                <p>Mauricio Pintos - © 2023 Todos los derechos reservados</p>
            </div>
        </Fragment>
    );
}

export default Footer;