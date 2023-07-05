import React, { Fragment, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { v4 as uuid } from 'uuid';

const FormNotas = ({agregarNota}) => {

    // Creamos una nota y la inicializamos con un hook de estado
    const [nota, editarNota] = useState({
        titulo:"",
        texto:""
    });

    // Extraer los valores
    const {titulo, texto} = nota;

    // Hook de estado para manejar el error
    const [error, setError] = useState(false);

    // Recogemos lo que el usuario escribe en el formulario
    const handleChange = (e) => {
        editarNota({
            ...nota,
            [e.target.name] : e.target.value
        })

        console.log("Tomo los datos de... "+{nota});
    };

    // Cuando envia el formulario se ejecuta esta funcion
    const submitForm = (e) => {
        e.preventDefault();

        // console.log("Enviado");

        if(titulo.trim() === '' || texto.trim() === '') {
            setError(true);
            return;
        }
        
        setError(false);
        
        // uuid
        nota.id = uuid();
        console.log(nota);

        // Guardar la nueva nota
        agregarNota(nota);

        // Limpiar el formulario
        editarNota({
            titulo:"",
            texto:""
        })

    };

    return ( 
        <Fragment>
            <Form onSubmit={submitForm}>
                <Form.Group>
                    <Form.Label className='notas'>Titulo</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Titulo de la nota"
                        name="titulo"
                        onChange={handleChange}
                        value={titulo} />
                </Form.Group>

                <Form.Group>
                    <Form.Label className='notas'>Texto</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        type="text"
                        placeholder="texto de la nota..."
                        name="texto"
                        onChange={handleChange}
                        value={texto} />
                </Form.Group>
                <Button className='mt-3'
                    variant="success"
                    type="submit">
                    Ingresar nueva nota
                </Button>
            </Form>
            {
                error
                ? <h4>Por favor complete todos los campos</h4>
                : null
            }
        </Fragment>
    );
}
 
export default FormNotas;