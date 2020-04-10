import React from 'react';
import { Container, Row, Col, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
import BlogNavbar from "./BlogNavbar";


export default class MobileProject extends React.Component {
    render() {
        return (
            <div className='mobile'>
                <BlogNavbar />
                <section className="breadcrumb breadcrumb_bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb_iner">
                                    <div className="breadcrumb_iner_item">
                                        <h2>Projects</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="sample-text-area">
                    <Container className="box_1170">
                        <h3 className="text-heading">Project Description</h3>
                        <p className="sample-text">
                            This project is my first B2C project. It was widely used in location area, popular my location folks.
                            I developed both-backend and front-end using technology such like spring, mybatis,bootstrap and JQUery.
                            Also including design the database follow the three principles.
                        </p>
                    </Container>
                </section>

                <div className="whole-wrap">
                    <Container className="box_1170">
                        <Row className="section-top-border">
                            <h3 className="mb-30">DataBase Design</h3>
                            <Row>
                                <Col md="3">
                                    <img src="img/elements/d.jpg" alt="" className="img-fluid" />
                                </Col>
                                <Col md="9" sm="20">
                                    <p>Recently, the US Federal government banned online casinos from operating in
                                        America by making
                                        it illegal to
                                        transfer money to them through any US bank or payment system. As a result of
                                        this law, most
                                        of the popular
                                        online casino networks such as Party Gaming and PlayTech left the United States.
                                        Overnight,
                                        online casino
                                        players found themselves being chased by the Federal government. But, after a
                                        fortnight, the
                                        online casino
                                        industry came up with a solution and new online casinos started taking root.
                                        These began to
                                        operate under a
                                        different business umbrella, and by doing that, rendered the transfer of money
                                        to and from
                                        them legal. A major
                                        part of this was enlisting electronic banking systems that would accept this new
                                        clarification and start doing
                                        business with me. Listed in this article are the electronic banking systems that
                                        accept
                                        players from the United
                                        States that wish to play in online casinos.</p>
                                </Col>
                            </Row>
                        </Row>
                    </Container>
                </div>
            </div>

        );
    }
}