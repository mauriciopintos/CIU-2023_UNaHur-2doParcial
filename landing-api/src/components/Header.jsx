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
                        <Nav.Link className="link" href="#section1">Seccion1</Nav.Link>
                        <Nav.Link className="link" href="#section2">Seccion2</Nav.Link>
                        <Nav.Link className="link" href="#section3">Seccion3</Nav.Link>
                        <NavDropdown className="link" title="Sectores" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#opcion1">Opcion1</NavDropdown.Item>
                            <NavDropdown.Item href="#opcion2">Opcion2</NavDropdown.Item>
                            {/* <NavDropdown.Divider /> */}
                            <NavDropdown.Item href="#opcion3">Opcion3</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                        type="search"
                        placeholder="Ingrese busqueda..."
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-warning">Buscar</Button>
                    </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;