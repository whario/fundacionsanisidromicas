import React from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import junta from "../images/junta.png";
import ecyl from "../images/ecyl.png";
import ministerio from "../images/ministerio.png";

function Footer(){
    return (
        <Navbar bg="light" always="true" expand="lg" fixed="botton">
            <Container>
                <Navbar.Brand href="https://itagraformacion.com/"><p className="Itagra">Copyright: Itagra Formación</p></Navbar.Brand>

                <Nav className="navbar-collapse justify-content-end">
                    <Nav.Item><img src={junta}/></Nav.Item>
                    <Nav.Item><img src={ecyl}/></Nav.Item>
                    <Nav.Item><img src={ministerio}/></Nav.Item>
                </Nav>

            </Container>
        </Navbar>
    );
}

export default Footer;