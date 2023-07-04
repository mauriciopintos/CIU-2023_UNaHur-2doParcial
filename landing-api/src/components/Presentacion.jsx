import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

const Presentacion = () => {
    const [open, setOpen] = useState(false);
    
    return (
        <>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                variant='secondary'
            >
                Ver presentacion
            </Button>
            <Collapse in={open}>
                <div onClick={() => setOpen(!open)} id="example-collapse-text">
                    <div id="presentacion" className='texto-presentacion '>
                        <h1>¡Bienvenidos a esta landing page en homenaje a la serie de televisión <strong>"The Big Bang Theory"</strong> (TBBT)!</h1>
                        <p>En esta página, combinamos la hilarante comedia de <strong>TBBT</strong> y los fascinantes recursos de la Agencia Espacial Estadounidense, la <strong>NASA</strong>. Prepárate para explorar el universo de <strong>TBBT</strong> mientras descubres los secretos del cosmos en un solo lugar.</p>
                        <p>Utilizando la potente API de la <strong>NASA</strong>, integramos información y datos astronómicos reales en nuestra página. Podrás disfrutar de imágenes impresionantes del espacio capturadas por los telescopios más avanzados, conocer la <strong>"Imagen Astronómica del Día"</strong> seleccionada por la <strong>NASA</strong> y explorar datos importantes de nuestro sistema solar.</p>
                        <p>Además, hemos creado un buscador de impresionantes imagenes de Marte, captadas por las zondas Rover: <strong>Curiosity, Opportunity y Spirit</strong> de la <strong>NASA</strong>. Podrás realizar búsquedas en Google directamente desde nuestra pagina, para poder acceder a contenido externo, mientras te sumerges en el vasto universo de la ciencia y la astronomía.</p>
                        <p>Ya seas un fanático de Sheldon Cooper, Leonard Hofstadter, Penny o cualquier otro personaje, esta landing page te ofrece una experiencia única. Podrás maravillarte con imágenes cósmicas, aprender datos interesantes y, por supuesto, entretenerte con momentos divertidos de la serie.</p>
                        <p>¡Únete a esta aventura intergaláctica y descubre la conexión entre <strong>TBBT</strong> y los secretos del universo! Explora nuestro sitio, sumérgete en el conocimiento y disfruta de una experiencia que combina ciencia, comedia y diversión.</p>
                        <p>¡Prepárate para expandir tus límites y descubrir las maravillas de <strong>TBBT</strong> y la <strong>NASA</strong> juntas en nuestra landing page!</p>
                    </div>
                </div>
            </Collapse>
        </>
    );
}
 
export default Presentacion;