import React from 'react';
import { Row, Col, Container, Card, ListGroup } from "react-bootstrap";
import horticultura from "../images/horticultura.jpg";
import albanileria from "../images/albanileria.jpg";

function Programas(){
    return (
        <Container id="programas" className="border-bottom programas">
            <Row>
                <h4>Programas mixtos con 3 docentes y 10 alumnos (con mayoría de mujeres).</h4>
            </Row>
            <Row>
                <Col xs={12} md={6}>
                    <Card>
                        <Card.Img variant="top" src={horticultura} />
                        <Card.Header><h6>Horticultura ecosolidaria, en Amayuelas de Abajo</h6><br></br></Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>9 meses de duración</ListGroup.Item>
                            <ListGroup.Item><strong>Formación en horticultura ecológica</strong></ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                        <Card.Text>
                            El trabajo que irán desarrollando los alumnos consiste en producir verduras en ecológico para donarlas a familias necesitadas del entorno cercano.<br></br>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6}>
                    <Card>
                        <Card.Img variant="top" src={albanileria} />
                        <Card.Header><h6>Centro de formación y emprendimiento "La fábrica", en Calzada de los Molinos</h6></Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>6 meses de duración</ListGroup.Item>
                            <ListGroup.Item><strong>Formación en albañilería y fontanería</strong></ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                        <Card.Text>
                        Se pretende reformar la sede de la Fundación para hacer un centro de formación y emprendimiento rural, con espacio de trabajo compartido para emprendedores rurales.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Programas;