import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';

class ResumeFooter extends React.Component {

    render() {
        return (
            <footer className="footer_Part padding_top">
                <Container>
                    <Row className="alingn-item-center">
                        <Col xs="6">
                            <div className="footer_text">
                                <span>pls send your message to me</span>
                                <h2>chase19960609@gmail.com </h2>
                            </div>
                        </Col>
                        <Col xs="6">
                            <div className="footer_btn">
                                <a href="#" className="btn_1">Download CV</a>
                            </div>
                        </Col>
                        <Col xs="6">
                            <div className="footer_menu">
                                <a href="#">About</a>
                                <a href="#">WORK</a>
                                <a href="#">Contact</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        );
    }
}

export default ResumeFooter;