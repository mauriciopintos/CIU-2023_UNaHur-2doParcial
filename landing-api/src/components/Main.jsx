/* eslint-disable jsx-a11y/alt-text */
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React, { Fragment } from 'react';
import { useState } from 'react';
import MarteApi from './MarteApi';
import ApodAPI from './ApodAPI';
import LinksAPI from './LinksAPI';
import Notas from './Notas';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-regular-svg-icons';


const Main = () => {
    // Creamos nuestrlista de elementos mediante un hook para exponer en un carousel
    const [elementos] = useState(
        [
        { id: 1, src:'https://i.blogs.es/4600c9/the-big-bang-theory/1366_2000.jpg' },
        { id: 2, src:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi12TimDCLddUclaIPg6OX4NNlWlXc-5p-bW97U2ALlPUiypNrvRJCAjeMXH5_d7Wq33kBBytXnejvB3GElCyWoM0LfvGOd0I1ElJ6xXctsdnyeP_B0ntVOYl8OepMRQ_lhYDTH5LTgJspUkI2HaZCSDdFuIAL3yvmpS9LIWoU4p51F0YdcHue39wdz/s800/BLOG.jpg' },
        { id: 3, src:'https://s1.abcstatics.com/media/play/2019/05/15/tbbt-final-kYN--1248x698@abc.png' },
        { id: 4, src:'https://www.viveusa.mx/resizer/nM6c7MvWEAo7G45BoQwsVrSymBM=/1100x666/cloudfront-us-east-1.images.arcpublishing.com/eluniversal/23C5IID47FGILDTMJNKCLMOIDE.jpg' },
        { id: 5, src:'https://assets.b9.com.br/wp-content/uploads/2018/08/111252_wb_0154b-1280x720.jpg' },
        { id: 6, src:'https://s3.abcstatics.com/media/play/2019/08/12/the_big_bang_theory1-kAZH--620x349@abc.jpg' },
        { id: 7, src:'https://static.sky.it/editorialimages/2d1f1886ed800b3d44d038fb622bc45513037676/skytg24/it/spettacolo/serie-tv/2023/04/13/serie-tv-universo-the-big-bang-theory/the-big-bang-theory-webphoto.jpg' },
        { id: 8, src:'https://www.looper.com/img/gallery/the-big-bang-theorys-biggest-problem-is-one-that-most-people-completely-overlook/intro-1679238766.jpg' },
        { id: 9, src:'https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2018/08/Big-Bang-Theory-1.jpg?fit=1920%2C1080&quality=50&strip=all&ssl=1' }
        ]
    );

    // Ocultar y mostrar secciones
    const [mostrarSeccion, setMostrarSeccion] = useState(false);

    const vistaDeSeccion = () =>{
        setMostrarSeccion(!mostrarSeccion);
    };


    return (
        <Fragment>
            <div id="inicio" className='main'>
                <div className='nasa'>
                    <a href="https://api.nasa.gov/" target="_blank" rel="noreferrer">
                        <img 
                        src="https://api.nasa.gov/assets/img/favicons/favicon-192.png"
                        alt="https://api.nasa.gov/"
                        className="image"
                        />
                    </a>
                    <div className="text-container">
                        <p>Para más información, consultar el sitio oficial de la API, tocando la imagen.</p>
                    </div>
                </div>

                <section id="seccion-a">
                    <h2>Imagen Astronómica del Día</h2>
                    <ApodAPI/>                    
                </section>

                <section id="seccion-b">
                    <h2>Buscador de fotos de Marte</h2>
                    <MarteApi/>
                </section>
            
                <section id="seccion-c">
                    <h2>Video y enlaces de interes</h2>
                    <LinksAPI/>
                </section>

                <section id="seccion-d">
                    <h2 onClick={vistaDeSeccion}>
                        Mi block de notas... <FontAwesomeIcon icon={faNewspaper}/>
                    </h2>
                    {
                        mostrarSeccion && (
                            <>
                                <p className='notas'>Aquí podes dejar guardadas tus anotaciones de la página para tenerelas a mano cada vez que ingreses...</p>
                                <Button
                                    variant="outline-warning"
                                    onClick={vistaDeSeccion}
                                >
                                    Ocultar notas
                                </Button>
                                <Notas/>
                            </>
                        )
                    }
                </section>

                <section id="galeria">
                    <h2>Galeria de imagenes TBBT</h2>
                    <div className='container'>
                        <div className='galeria'>
                            <Carousel showThumbs={true} showStatus={true} selectedItem={0}>
                                {elementos.map((elemento) => (
                                    <div key={elemento.id}>
                                        <img src={elemento.src} className="d-block w-100" alt={`Imagen ${elemento.id}`} />
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </section>
            </div>
        </Fragment>
    );
}

export default Main;