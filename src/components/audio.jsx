import React from 'react';
import { Row, Col, Image } from "react-bootstrap";
import espana from "../images/espana_rural.jpg";
import ReactAudioPlayer from 'react-audio-player';

function Audio(){
    return (
        <Row className="audio">
            <Col xs={12} md={{span: 2, offset: 2}}>
                <Image src={espana}/> 
            </Col>
            <Col xs={12} md={{span: 4, offset: 1}}>Entrevista del 28/11/2021 en el programa España Rural de RNE:<br></br><br></br>
            <ReactAudioPlayer
                src="http://fundacionsanisidromicas.com/video/audio.mp3"
                controls
            />
            </Col>
        </Row>
    );
}

export default Audio;