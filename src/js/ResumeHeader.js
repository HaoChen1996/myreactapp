import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
import HeadNavbar from "./HeadNavbar";

class ResumeHeader extends React.Component {

    render() {
        return (
            <header>
                <HeadNavbar />
                <section className="banner_part">
                    <Container>
                        <Row>
                            <Col className="col-lg-7">
                                <div className="banner_text">
                                    <div className="banner_text_iner">
                                        <h5>Hi there, This is Hao</h5>
                                        <h1>Junior Software Enginner</h1>
                                        <div className="banner_btn">
                                            <a href="#" className="btn_1">Contact me</a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </header>
        );
    }

}

export default ResumeHeader;