import React from 'react';
import { Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
import {HashLink as Link} from "react-router-hash-link";

export default class HeadNavbar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            navbarNotFromHome : props.notFromHome,
            bgcolor : props.bgcolor
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
            if(!this.state.navbarNotFromHome) {
                this.setState({ bgcolor: "dark" });
            }

        }else{
            if(!this.state.navbarNotFromHome) {
                this.setState({bgcolor: "transparent"});
            }
        }
    }

    render() {
        return (
            <Navbar expand="lg" variant="dark" fixed="top" bg={this.state.bgcolor}>
                <Container>
                    <Navbar.Brand>Hao Chen</Navbar.Brand>
                    <Navbar.Collapse id="nav-content">
                        <Nav>
                            <Nav.Item className="nav-item">
                                <Nav.Link href="/home">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="nav-item">
                                <NavDropdown   title="Projects"  id="navBarDropdown">
                                    <NavDropdown.Item href="/moblie" >web application</NavDropdown.Item>
                                    <NavDropdown.Item href="/ml" >machine learning</NavDropdown.Item>
                                    <NavDropdown.Item href="/gcp" >comparsion between CGP@AWS</NavDropdown.Item>
                                </NavDropdown>
                            </Nav.Item>
                            <Nav.Item className="nav-item">
                                <NavDropdown title="pages" id="navbarDropdown_1">
                                    <NavDropdown.Item>about</NavDropdown.Item>
                                </NavDropdown>
                            </Nav.Item>
                            <Nav.Item className="nav-item">
                                <Link to="/pathLink#contact_part"><Nav.Link>Contact</Nav.Link></Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}