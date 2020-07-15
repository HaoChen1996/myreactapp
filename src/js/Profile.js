import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
import port1 from "../img/port_1.png"
import port2 from "../img/port_2.png"
import port3 from "../img/cloud.png"
import LightSpeed from 'react-reveal/Slide';
import Slide from 'react-reveal/Slide';
import {Link} from "react-router-dom";

class Profile extends React.Component {
    render() {
        return (
            <section className="portfolio_part ">
                <Container>
                    <Row className="align-items-center">
                        <Col lg="6">
                            <div className="section_tittle">
                                <p>My portfolio</p>
                                <h2>Take a look around some of my awesome works</h2>
                            </div>
                        </Col>
                        <Col lg="6">
                            <div className="section_btn text-right">
                                <a href="#" className="btn_2">More works</a>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="12">
                            <div className="gallery">
                                    <Link to="/moblie" className="gallery__item--1">
                                        <LightSpeed  left>
                                            <img src={port1} alt="" className="gallery__img" />
                                        </LightSpeed>
                                    </Link>
                                    <Link to="/ml" className="gallery__item--2">
                                        <LightSpeed right >
                                            <img src={port2} alt="" className="gallery__img"/>
                                        </LightSpeed>
                                    </Link>
                                    <a href="/gcp" className="gallery__item--3">
                                        <Slide bottom >
                                            <img src={port3} alt="" className="gallery__img"/>
                                        </Slide>
                                    </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Profile;