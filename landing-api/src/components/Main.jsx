/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from 'react';
import { useState } from 'react';

const Main = () => {
    // Creamos nuestrlista de elementos mediante un hook
    // eslint-disable-next-line no-unused-vars
    const [elementos, guardarElementos] = useState(
        [
        { id: 1, descripcion: "DESCRIPCION", src:'https://de.web.img2.acsta.net/r_654_368/img/3f/b7/3fb7d376ddaecafa59aba1df5fb459ff.jpg' },
        { id: 2, descripcion: "DESCRIPCION", src:'https://fondosmil.com/fondo/8516.jpg' },
        { id: 3, descripcion: "DESCRIPCION", src:'https://fr.web.img5.acsta.net/pictures/18/11/06/15/36/0408812.jpg' },
        { id: 4, descripcion: "DESCRIPCION", src:'https://fondosmil.com/fondo/8516.jpg' },
        { id: 5, descripcion: "DESCRIPCION", src:'https://static.vecteezy.com/system/resources/previews/003/776/244/non_2x/astrology-horizontal-star-universe-background-vector.jpg' },
        { id: 6, descripcion: "DESCRIPCION", src:'https://w.forfun.com/fetch/a2/a2eec9ef66f0b2a70cb8fcd36f104495.jpeg' }
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

                <h2>Listado de elementos</h2>
                <div className="columns">
                    {elementos.map((elemento) => (
                        <div key={elemento.id} className="column">
                            <img src={elemento.src} alt={elemento.descripcion} />
                            <span>{elemento.id} | {elemento.descripcion}</span>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    );
}

export default Main;