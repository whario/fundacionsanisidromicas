import React from 'react';
import { Row, Col } from "react-bootstrap";
import '../App.css';
import logo from '../images/logo.png';

function Video(){
    return (
        <Row>

                <div className="videoseccion">
                    <div className="overlay"></div>
                    <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                        <source src="https://fundacionsanisidromicas.org/video/intro.mp4" type="video/mp4"/>
                    </video>

                    <div className="container h-100">
                        <div className="d-flex h-100 text-center align-items-center">
                        <div className="w-100 text-white">
                            <h1 className="display-3"><img src={logo} alt="Fundación San Isidro Micas"/></h1>
                            <p className="lead mb-0">Creando oportunidades en el medio rural</p>
                        </div>
                        </div>
                    </div>
                </div>

        </Row>
    );
}

export default Video;