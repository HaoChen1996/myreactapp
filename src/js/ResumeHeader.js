import React from 'react';
import { Container, Row, Col,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
import HeadNavbar from "./HeadNavbar";
import {HashLink as Link} from "react-router-hash-link";

class ResumeHeader extends React.Component {
    render() {
        return (
            <header>
                <HeadNavbar notFromHome={false} bgcolor={"transparent"}/>
                <section className="banner_part">
                    <Container>
                        <Row>
                            <Col className="col-lg-7">
                                <div className="banner_text">
                                    <div className="banner_text_iner">
                                        <h5>Hi there, This is Hao</h5>
                                        <h1>Junior Software Enginner</h1>
                                        <div className="banner_btn">
                                            <Link to="/pathLink#about_part">
                                                <Button variant="outline-light">
                                                    About me
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <div className="contain-arrow">
                                <Link to="/pathLink#about_part">
                                    <div className="round">
                                        <span className="arrow" />
                                        <span className="arrow"/>
                                        <span className="arrow"/>
                                        <span className="arrow"/>
                                    </div>
                                </Link>
                            </div>
                        </Row>

                    </Container>
                </section>
            </header>
        );
    }

}

export default ResumeHeader;