import React from 'react';
import { Container, Row, Col, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './css/style.css';

function About() {
    return (
        <section className="about_part">
            <Container>
                <Row>
                    <Col className="col-lg-6 ">
                        <div className="about_text">
                            <h4>about me</h4>
                            <p>Havn't think of any introduction about myself.</p>
                            <div className="experiance">
                                <h2>06</h2>
                                <p>Years of experience in programming</p>
                                <h2>02</h2>
                                <p>Years of experience in Engineering</p>
                                <h2>01</h2>
                                <p>Years of experience in machine learning</p>
                            </div>
                        </div>
                    </Col>
                    <Col className="col-lg-6 about_text">
                        <h4>Skill Set</h4>
                        <Row>
                            <Col >
                                <h3>language</h3>
                                <p>java</p>
                                <p>python</p>
                                <p>javascript</p>
                                <p>C</p>
                                <p>CSS</p>
                                <p>kotlin</p>
                            </Col>
                            <Col>
                                <h3>framework</h3>
                                <p>spring</p>
                                <p>mybatis</p>
                                <p>bootstrap</p>
                                <p>react</p>
                                <p>spark</p>
                                <p>pytouch</p>
                            </Col>
                            <Col>
                                <h3>theory</h3>
                                <p>design pattern</p>
                                <p>machine learning</p>
                                <p>object orient</p>
                                <p>agile</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About();