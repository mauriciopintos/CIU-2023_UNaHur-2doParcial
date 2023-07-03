import React, { useState } from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';

// const apiKey = 'La3uIqB4TSmPoVoXPq1qVaEljzMV6EjYs3YCR8Bs';

const MarteApi = () => {
    const keyApi = 'La3uIqB4TSmPoVoXPq1qVaEljzMV6EjYs3YCR8Bs';

    // Declaro las constantes para las fotos de marte
    const [sol, setSol] = useState('');
    const [camara, setCamara] = useState('');
    const [fotos, setFotos] = useState([]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.get(
            `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&camera=${camara}&api_key=${keyApi}`
          );
          const data = res.data;
          if (data.length > 0) {
            setFotos({
                "photos":[
                    {
                        "id":null
                    },
                    {
                        "img_scr":"https://img.freepik.com/vector-premium/anotando-que-encontro-telescopio-planeta-monitoreo-espacial-galaxy-star-mensaje-error-404-elemento-ilustracion-estado-vacio_22052-4888.jpg?w=2000"
                    },
                    {
                        "rover":{
                            "name":"NO SE ENCONTRARON IMAGENES"
                        }
                    }
                ]});
            
          } else {
            setFotos(data.photos);
          };

        } catch (error) {
          console.error(error);
        }
      };

    return (
        <div className='api busca-api'>
            <Row>
                <Col sm={6}>
                    <Form onSubmit={handleSubmit}>
                        <fieldset enable>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="sol">Ingrese un valor para Sol marciano de la misión del Rover (entre 1000 y 3000)</Form.Label>
                                <Form.Control
                                    id="sol"
                                    type='number'
                                    min={1000}
                                    max={3000}
                                    value={sol}
                                    onChange={(e) => setSol(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="camera">Camaras del Rover (cada cámara tiene una función y perspectiva únicas)</Form.Label>
                                <Form.Select
                                    id="camera"
                                    value={camara}
                                    onChange={(e) => setCamara(e.target.value)}
                                >
                                    <option value="">Elija tipo de cámara</option>
                                    <option value="FHAZ">Cámara frontal para evitar riesgos</option>
                                    <option value="RHAZ">Cámara trasera para evitar riesgos</option>
                                    <option value="MAST">Cámara de mástil</option>
                                    <option value="CHEMCAM">Complejo de cámara y química</option>
                                    <option value="MAHLI">Mars Hand Lens Imager</option>
                                    <option value="NAVCAM">Cámara de navegación</option>
                                    <option value="PANCAM">Cámara Panorámica</option>
                                    <option value="MINITES">Espectrómetro de emisión térmica en miniatura</option>
                                
                                </Form.Select>
                            </Form.Group>
                            <Button variant="warning" type="submit">Buscar</Button>
                        </fieldset>
                    </Form>
                </Col>
                <Col sm={6}>
                    {/* Muestra los resultados de la búsqueda */}
                    <div className='carousel-api'>
                            <Carousel showThumbs={false} showStatus={false} selectedItem={0}>
                                {fotos.map((foto) => (
                                    <div key={foto.id}>
                                        <img src={foto.img_src} className="d-block w-100" alt={`Imagen: ${foto.rover.name}`} />
                                    </div>
                                ))}
                            </Carousel>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
 
export default MarteApi;