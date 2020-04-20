import React from 'react';
import { Container, Row, Col,Form,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
import Fade from 'react-reveal/Fade'
import emailjs from 'emailjs-com';


export default class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            validated : false
        }
    }

    handleSubmit(e) {
        const form = e.target;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            e.preventDefault();
            emailjs.sendForm('contact_service', 'contact_form',form,'user_3QZR7kBmXlBcDVQwkuf7V')
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('SUCCESS!')
                }, function(error) {
                    console.log('FAILED...', error);
                });
        }
        this.setState({validated:true})
    }



    render() {
        return (
        <footer id="contact_part" className="footer_Part padding_top">
            <Container>
                <Row>
                    <Col lg="12" className="text-lg-center">
                        <Fade left>
                            <h1>Contact</h1>
                        </Fade>
                    </Col>
                </Row>
                <Row>
                    <Col lg="12" className="text-lg-center">
                        <Fade left>
                            <p>have a questoin or want to work together ?</p>
                        </Fade>
                    </Col>
                </Row>
                <Fade left>
                    <Row  className="justify-content-md-center">
                        <Col lg={4}  className="text-lg-center">
                            <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                                <Form.Group>
                                    <Form.Row className="form-margin">
                                        <Form.Control  name="user_name" size="sm" type="text" placeholder="name" required />
                                        <Form.Control.Feedback>Looks good</Form.Control.Feedback>
                                    </Form.Row>
                                    <Form.Row className="form-margin">
                                        <Form.Control  name="user_email" size="sm" type="email" placeholder="email" required />
                                        <Form.Control.Feedback>Looks good</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">please input the right format</Form.Control.Feedback>
                                    </Form.Row>
                                    <Form.Row className="form-margin">
                                        <Form.Control  name="message" as="textarea" aria-label="With textarea" required />
                                        <Form.Control.Feedback>Looks good</Form.Control.Feedback>
                                    </Form.Row>
                                    <Button variant="primary"  type="submit">
                                        Submit
                                    </Button>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Fade>
            </Container>
        </footer>
        );
    }

}