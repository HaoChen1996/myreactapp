import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';

class Profile extends React.Component {
    render() {
        return (
            <section className="portfolio_part section_padding">
                <Container>
                    <Row className="align-items-center">
                        <Col className="col-lg-6">
                            <div className="section_tittle">
                                <p>My portfolio</p>
                                <h2>Take a look around some of my awesome works</h2>
                            </div>
                        </Col>
                        <Col className="col-lg-6">
                            <div className="section_btn text-right">
                                <a href="#" className="btn_2">More works</a>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-lg-12">
                            <div className="mesonary_part">
                                <div className="grid">
                                    <div className="grid-sizer"></div>
                                    <a href="portfolio_details.html" className="grid-item">
                                        <img src="img/port_1.png" alt="" />
                                            <div className="portfolio_hover_text">
                                                <i className="ti-plus"></i>
                                            </div>
                                    </a>
                                    <a href="portfolio_details.html" className="grid-item big_height big_weight">
                                        <img src="img/port_2.png" alt="" />
                                            <div className="portfolio_hover_text">
                                                <i className="ti-plus"></i>
                                            </div>
                                    </a>
                                    <a href="portfolio_details.html" className="grid-item">
                                        <img src="img/port_3.png" alt="" />
                                            <div className="portfolio_hover_text">
                                                <i className="ti-plus"></i>
                                            </div>
                                    </a>
                                    <a href="portfolio_details.html" className="grid-item big_weight">
                                        <img src="img/port_4.png" alt="" />
                                            <div className="portfolio_hover_text">
                                                <i className="ti-plus"></i>
                                            </div>
                                    </a>
                                    <a href="portfolio_details.html" className="grid-item">
                                        <img src="img/port_5.png" alt="" />
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