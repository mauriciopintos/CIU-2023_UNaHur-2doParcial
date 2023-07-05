import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Button, Col, Row } from 'react-bootstrap';

const LinksAPI = () => {

    const [links] = useState(
        [
        { id: 1, nombre:'Epic', src:'https://epic.gsfc.nasa.gov/', descripcion:'Cámara de imágenes policromáticas de la Tierra' },
        { id: 2, nombre:'NASA', src:'https://www.nasa.gov/', descripcion:'Sitio oficial de la NASA'},
        { id: 3, nombre:'Wikipedia', src:'https://es.wikipedia.org/wiki/The_Big_Bang_Theory', descripcion:'Wikipedia de la serie TBBT'},
        { id: 4, nombre:'TBBT', src:'https://the-big-bang-theory.com/', descripcion:'Sitio con info de la serie TBBT'},
        { id: 5, nombre:'Blog NASA', src:'https://blogs.nasa.gov/', descripcion:'Blog de la NASA con informacion actual y muy recomendable'},
        { id: 6, nombre:'OGC', src:'https://www.ogc.org/about-ogc/', descripcion:'Sitio de Open Geospatial Consortium (estándares geoespaciales abiertos, disponibles públicamente)'}
        ]
    );
    
    return (
        <>
            <div className="table-container">
                <Row>
                    <Col>
                        <div className="container video-container">
                            <video controls>
                                <source src="https://sprcdn-assets.sprinklr.com/522/145c3772-81c5-4ee7-bcff-b23a285885e6-1091310750.mp4" type="video/mp4" />
                                Este navegador no admite la reproducción del video.
                            </video>
                            <p><strong>La sonda solar Parker de la NASA completa el 16º acercamiento al Sol</strong></p>
                        </div>
                    </Col>
                    <Col>
                        <div className='container'>
                        <Table striped hover responsive="sm" variant="dark" className="rounded">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Sitio</th>
                                        <th>Descripcion</th>
                                        <th>Link</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        links.map((link) => (
                                            <tr key={link.id} >
                                                <td>{link.id}</td>
                                                <td>{link.nombre}</td>
                                                <td>{link.descripcion}</td>
                                                <td>
                                                    <Button
                                                        variant="primary"
                                                        href={link.src}
                                                        target="_blank"
                                                        rel="noopener noreferrer">
                                                            Ir a... {link.nombre}
                                                    </Button>    
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
}
 
export default LinksAPI;
