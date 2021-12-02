import React from 'react';
import Nosotros from '../components/nosotros';
import Programas from '../components/programas';
import Contacto from '../components/contacto';
import { Container } from "react-bootstrap";
import Video from '../components/video';

function Home(){
    return (
        <Container fluid>
            <Video/>
            <Nosotros/>
            <Programas/>
            <Contacto/>
        </Container>
    );
}

export default Home;