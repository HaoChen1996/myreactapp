import React from 'react';
import { Container, Row, Col, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
import {Link} from "react-router-dom";

export default class HeadNavbar extends React.Component {

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
            <Navbar expand="lg" variant="dark" bg="dark" fixed="top" bg={this.state.bgcolor}>
                <Container>
                    <Navbar.Brand>Hao Chen</Navbar.Brand>
                    <Navbar.Collapse id="nav-content">
                        <Nav>
                            <Nav.Item className="nav-item">
                                <Nav.Link>Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="nav-item">
                                <NavDropdown   title="Blog"  id="navBarDropdown">
                                    <Link to='/ml'> <NavDropdown.Item >ml</NavDropdown.Item> </Link>
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
        );
    }
}