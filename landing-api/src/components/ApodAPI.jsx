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
                <p><strong>Titulo:</strong> {imagenDelDia.title}</p>
            </Col>
            <Col>
            <p><strong>Info de la imagen</strong> (temporalmente en ingles):</p>
            <p>"{imagenDelDia.explanation}"</p>
            <p><strong>(Información tomada de la API de la NASA)</strong></p>
            </Col>
        </Row>
      </div>
    </>
  );
};

export default ApodAPI;
