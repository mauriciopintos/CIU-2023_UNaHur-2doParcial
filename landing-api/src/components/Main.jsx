/* eslint-disable jsx-a11y/alt-text */
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React, { Fragment } from 'react';
import { useState } from 'react';
import MarteApi from './MarteApi';
// import axios from 'axios';


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

    return (
        <Fragment>
            <div className='main'>
                <div className='texto-presentacion '>
                    <h1>¡Bienvenidos a esta landing page en homenaje a la serie de televisión <strong>"The Big Bang Theory"</strong> (TBBT)!</h1>

                    <p>En esta página, combinamos la hilarante comedia de <strong>TBBT</strong> y los fascinantes recursos de la Agencia Espacial Estadounidense, la <strong>NASA</strong>. Prepárate para explorar el universo de <strong>TBBT</strong> mientras descubres los secretos del cosmos en un solo lugar.</p>
                    <p>Utilizando la potente API de la <strong>NASA</strong>, integramos información y datos astronómicos reales en nuestra página. Podrás disfrutar de imágenes impresionantes del espacio capturadas por los telescopios más avanzados, conocer la <strong>"Imagen Astronómica del Día"</strong> seleccionada por la <strong>NASA</strong> y explorar los datos de exoplanetas descubiertos más allá de nuestro sistema solar.</p>
                    <p>Además, hemos creado un buscador temático inspirado en los personajes y momentos icónicos de <strong>TBBT</strong>. Podrás realizar búsquedas relacionadas con la serie y descubrir contenido relacionado con tus personajes favoritos mientras te sumerges en el vasto universo de la ciencia y la astronomía.</p>
                    <p>Ya seas un fanático de Sheldon Cooper, Leonard Hofstadter, Penny o cualquier otro personaje, esta landing page te ofrece una experiencia única. Podrás maravillarte con imágenes cósmicas, aprender datos interesantes y, por supuesto, reírte con momentos divertidos inspirados en la serie.</p>
                    <p>¡Únete a esta aventura intergaláctica y descubre la conexión entre <strong>TBBT</strong> y los secretos del universo! Explora nuestro sitio, sumérgete en el conocimiento y disfruta de una experiencia que combina ciencia, comedia y diversión.</p>
                    <p>¡Prepárate para expandir tus límites y descubrir las maravillas de <strong>TBBT</strong> y la <strong>NASA</strong> juntas en nuestra landing page!</p>
                </div>
                <br />

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

                <h2>Buscador de fotos de Marte</h2>
                <div>
                    <MarteApi/>
                </div>

                <h2>Una Seccion B</h2>
                <div>
                    
                </div>

                <h2>Una Seccion C</h2>
                <div>
                    
                </div>
                
                <h2>Galeria de imagenes TBBT</h2>
                <div className='carousel-main'>
                    <Carousel showThumbs={false} showStatus={false} selectedItem={0}>
                        {elementos.map((elemento) => (
                            <div key={elemento.id}>
                                <img src={elemento.src} className="d-block w-100" alt={`Imagen ${elemento.id}`} />
                            </div>
                        ))}
                    </Carousel>
                </div>

            </div>
        </Fragment>
    );
}

export default Main;