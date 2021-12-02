import React from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import logoHorizontal from "../images/logoHorizontal.png";

function NavBar(){
    return (
        <Navbar bg="light" always="true" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="/"><img src={logoHorizontal} alt="Fundación San Isidro Micas"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav mr-auto">
                <Nav className="navbar-collapse justify-content-end">
                    <Nav.Link href="/">Inicio</Nav.Link>
                    <Nav.Link href="#nosotros">Quiénes somos</Nav.Link>
                    <Nav.Link href="#programas">Programas</Nav.Link>
                    <Nav.Link href="#contactar">Contactar</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;