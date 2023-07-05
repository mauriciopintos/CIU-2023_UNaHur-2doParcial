import React, { useEffect, useState } from 'react';
import { Col, Row, Badge, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

import FormNotas from './FormNotas';
import 'bootstrap/dist/css/bootstrap.min.css';

const Notas = () => {
    // Inicio local store para almacenar mis notas
    let notasGuardadas = JSON.parse(localStorage.getItem('notas'));
    if(!notasGuardadas){
        notasGuardadas=[]
    };

    // Inicio un hook de estado para agregar notas
    const [notas, editarNotas] = useState(notasGuardadas);

    // Uso un hook de efecto para manejar los cambios
    useEffect( () => {
        if (notasGuardadas){
          localStorage.setItem('notas',JSON.stringify(notas));
        } else {
          localStorage.setItem('notas',JSON.stringify([]));
        }
    });

    // Funcion que toma la nota nueva y agregarla en el array de notas
    const agregarNota = (nota) => {
        editarNotas([
            ...notas,
            nota
        ])
    };

    // Funcion para borrar notas
    const borrarNota = (id) => {
        const nuevasNotas = notas.filter( nota => nota.id !== id);
        editarNotas(nuevasNotas);
    };

    // Mensaje para el titulo de la lista de mis notas guardadas
    let mensaje = 'notas guardadas';
    
    return (
        <>
            <div class="container">
                <Row>
                    <Col>
                        <FormNotas
                            agregarNota={agregarNota}
                        />
                    </Col>
                    
                    <Col>
                        {
                            notas.length > 0
                            ? <p className='notas'>Mis {mensaje}</p>
                            : <p className='notas'>No hay {mensaje}</p>
                        }

                        <Row xs={1} className="g-4">
                            {
                            notas.map((nota, index) =>
                                <Col key={index}>
                                    <div className="badge-container">
                                        <Badge text="warning" bg="secondary" className="custom-badge">
                                            <h5>{nota.titulo}</h5>
                                            <p>{nota.texto}</p>
                                            <Button variant="outline-warning" onClick={() => borrarNota(nota.id)}>
                                                <FontAwesomeIcon icon={faTrashAlt} className="trash-icon" style={{ color: "red" }}/>
                                            </Button>
                                        </Badge>
                                    </div>
                                </Col>
                            )
                            }
                        </Row>
                    </Col>

                </Row>
            </div>
        </>
    );
}
 
export default Notas;