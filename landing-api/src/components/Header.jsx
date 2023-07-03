import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = ({titulo}) => {
    return (
        <div className='header'>
            <Navbar className='navbar' expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">{titulo}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" variant="light" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link className="link" href="#inicio">Inicio</Nav.Link>
                        <Nav.Link className="link" href="#presentacion">Presentacion</Nav.Link>
                        <Nav.Link className="link" href="#galeria">Galeria-TBBT</Nav.Link>
                        <NavDropdown className="link" title="Sectores" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#seccion-a">Fotos de Marte</NavDropdown.Item>
                            <NavDropdown.Item href="#seccion-b">Imagen del día</NavDropdown.Item>
                            {/* <NavDropdown.Divider /> */}
                            <NavDropdown.Item href="#seccion-c">Opcion3</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex" action="https://www.google.com/search" method="GET" target="_blank">
                        <Form.Control
                            type="search"
                            placeholder="Busca en Google..."
                            className="me-2"
                            aria-label="Search"
                            name="q"
                        />
                        <Button variant="outline-warning" type="submit">Buscar</Button>
                    </Form>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;