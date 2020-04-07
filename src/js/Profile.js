import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
import port1 from "../img/port_1.png"
import port2 from "../img/port_2.png"
import port3 from "../img/port_3.png"


class Profile extends React.Component {
    render() {
        return (
            <section className="portfolio_part section_padding">
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
                            <div className="mesonary_part">
                                <div className="grid">
                                    <div className="grid-sizer"></div>
                                    <a href="" className="grid-item">
                                        <img src={port1} alt="" />
                                            <div className="portfolio_hover_text">
                                                <i className="ti-plus"></i>
                                            </div>
                                    </a>
                                    <a href="" className="grid-item big_height big_weight">
                                        <img src={port2} alt="" />
                                            <div className="portfolio_hover_text">
                                                <i className="ti-plus"></i>
                                            </div>
                                    </a>
                                    <a href="" className="grid-item">
                                        <img src={port3} alt="" />
                                            <div className="portfolio_hover_text">
                                                <i className="ti-plus"></i>
                                            </div>
                                    </a>

                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Profile;