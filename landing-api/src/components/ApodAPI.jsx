import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';

const ApodAPI = () => {
  const keyApi = 'La3uIqB4TSmPoVoXPq1qVaEljzMV6EjYs3YCR8Bs';
  const [imagenDelDia, setAPOD] = useState({});

  useEffect(() => {
    const traeAPOD = async () => {
      try {
        const urlAPI = `https://api.nasa.gov/planetary/apod?api_key=${keyApi}`;
        const res = await axios.get(urlAPI);
        const data = res.data;
        setAPOD(data);
      } catch (error) {
        console.error(error);
      }
    };

    traeAPOD();
  }, []);

  return (
    <>
      <div className='api dia-api'>
        <Row>
            <Col>
                <img src={imagenDelDia.url} className="d-block w-100" alt={imagenDelDia.title} />
                <p>Titulo: {imagenDelDia.title}</p>
            </Col>
            <Col>
            <h4>Info de la imagen (temporalmente en ingles):</h4>
            <p>"{imagenDelDia.explanation}"</p>
            <h5>(Información tomada de la API de la NASA)</h5>
            </Col>
        </Row>
      </div>
    </>
  );
};

export default ApodAPI;
