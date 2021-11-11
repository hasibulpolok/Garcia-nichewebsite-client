import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../img/logo_1.webp'

const Header = () => {
    return (
        <div className="mb-2">
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand as={Link} to="/home" className="ms-3"><img className=" mb-1" style={{ width: "100%", height: "30px" }} src={logo} alt="logo" /></Navbar.Brand>
                <Container>
                
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/products">Products</Nav.Link>
                            <Nav.Link as={Link} to="/reviews">Reviews</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link variant="light" className=" border border-outline-dark  rounded fw-bold px-3 me-2 " as={Link} to="/login">Login</Nav.Link> <br />
                            <Nav.Link variant="light" className="border border-outline-dark  rounded fw-bold px-3  " as={Link} to="/Register">Register</Nav.Link> <br />
 
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;