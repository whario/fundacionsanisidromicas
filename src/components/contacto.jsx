import React from 'react';
import { Row, Form, Button, Container, Spinner } from "react-bootstrap";
import { useState } from 'react';
import { send } from 'emailjs-com';

function Contacto(){
    const [toSend, setToSend] = useState({
        nombre: '',
        email: '',
        telefono: '',
        mensaje: '',
        oculto: '',
      });
    const [antispam, setAntispam] = useState(false);
    const [loading, setLoading] = useState(false);
    const resetForm = () => {
        setToSend("");
      };
      const onSubmit = (e) => {
        let API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
        e.preventDefault();
        setLoading(true);
        if(antispam!==true){
          send(
            'service_nc3npbo',
            'template_y2qb2uq',
            toSend,
            API_KEY
          )
            .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
              alert("Mensaje enviado con éxito! Te responderemos lo antes posible. Gracias");
              setLoading(false);
            })
            .catch((err) => {
              console.log('FAILED...', err);
              alert("Mensaje no envíado!"+err);
            });
          resetForm();
        }   
      };
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };
      const handleSpam = (e) => {
        if(toSend.oculto.length===0){
          setAntispam(true)
          console.log("Estado Antispam",antispam)
        }
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };
    return (
        <Container className="border-bottom contactar">
            <Row id="contactar"><h3>Contacta con nosotros</h3></Row>
            <Form id="fundacion" onSubmit={onSubmit}>
            <Form.Group className="oculto" controlId="formBasicText" type="hidden">
                <Form.Control type="text" name="oculto" value={toSend.oculto ||""} onChange={handleSpam}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Control type="text" placeholder="Nombre" name="nombre" value={toSend.nombre ||""} onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email" name="email" value={toSend.email ||""} onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Control type="text" placeholder="Teléfono" name="telefono" value={toSend.telefono ||""} onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="ControlTextarea">
                <Form.Control as="textarea" rows={3} placeholder="Mensaje" name="mensaje" value={toSend.mensaje ||""} onChange={handleChange}/>
            </Form.Group>
            {loading === false ? (
              <Button variant="secondary" type="submit">
                Enviar
              </Button>
            ) : (
              <Button variant="secondary" disabled>
              <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                Enviando...
              </Button>
            )}
            </Form>
        </Container>
    );
}

export default Contacto;