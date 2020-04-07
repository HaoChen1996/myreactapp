import React from 'react';
import { Container, Row, Col, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';


class ResumeHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bgcolor : 'transparent'
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll',this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll',this.handleScroll);
    }

    handleScroll() {
        if (window.pageYOffset > 500) {
            this.setState({ bgcolor: "white" });
        }else{
            this.setState({ bgcolor: "transparent" });
        }
    }



    render() {
        return (
            <header>
                <Navbar className="navbar navbar-expand-lg " sticky="top" bg={this.state.bgcolor}>
                    <Container>
                        <Navbar.Brand>Hao Chen</Navbar.Brand>
                        <Navbar.Collapse>
                            <Nav>
                                <Nav.Item>
                                    <Nav.Link>Home</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavDropdown  title="Blog"  id="navBarDropdown">
                                        <NavDropdown.Item >blog</NavDropdown.Item>
                                        <NavDropdown.Item >Single blog</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavDropdown title="pages" id="navbarDropdown_1">
                                        <NavDropdown.Item>about</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link>Contact</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                        <div>
                            <a href="#" className="myicon" title="Facebook"><i className="fa fa-facebook"></i></a>
                            <a href="#" className="myicon" title="Linkedin"><i className="fa fa-linkedin"></i></a>
                            <a href="#" className="myicon" title="Github"><i className="fa fa-github"></i></a>
                            <a hef="#" className="myicon" title="Apple"><i className="fa fa-apple"></i></a>
                        </div>
                    </Container>
                </Navbar>

                <section className="banner_part">
                    <Container>
                        <Row className="align-items-center">
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
