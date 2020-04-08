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
            this.setState({ bgcolor: "dark" });
        }else{
            this.setState({ bgcolor: "transparent" });
        }
    }



    render() {
        return (
            <header>
                <Navbar expand="lg" variant="dark" bg="dark" fixed="top" bg={this.state.bgcolor}>
                    <Container>
                        <Navbar.Brand>Hao Chen</Navbar.Brand>
                        <Navbar.Collapse id="nav-content">
                            <Nav>
                                <Nav.Item className="nav-item">
                                    <Nav.Link >Home</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="nav-item">
                                    <NavDropdown   title="Blog"  id="navBarDropdown">
                                        <NavDropdown.Item >blog</NavDropdown.Item>
                                        <NavDropdown.Item >Single blog</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav.Item>
                                <Nav.Item className="nav-item">
                                    <NavDropdown title="pages" id="navbarDropdown_1">
                                        <NavDropdown.Item>about</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav.Item>
                                <Nav.Item className="nav-item">
                                    <Nav.Link >Contact</Nav.Link>
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
