import React from 'react';
import { Container, Nav, Navbar,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../img/logo_1.webp'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="mb-2">
            <Navbar className="py-3" collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand as={Link} to="/home" className="ms-3"><img className=" mb-1" style={{ width: "100%", height: "30px" }} src={logo} alt="logo" /></Navbar.Brand>
                <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/products">Products</Nav.Link>
                            <Nav.Link as={Link} to="/reviews">Reviews</Nav.Link>
                            <Nav.Link as={Link} to="/myorders">My Orders</Nav.Link>

                        </Nav>
                      
                        <Nav>
                        <Navbar.Text>
                                {user.email && <p className=" text-dark  px-3 rounded me-3 fs-5 fw-bold">Hi, {user?.displayName}</p>}
                            </Navbar.Text>
                        <Navbar.Text>
                        {user.email && <p className=" text-white"><img className="me-5" style={{ height: '30px', width: "30px",  borderRadius: "50%" }} src={user?.photoURL} alt="ProfilePhoto" /></p>}
                            </Navbar.Text>
                            
                            {user.email && <><Nav.Link variant="light" className=" border border-outline-dark  rounded fw-bold px-3 me-2 " as={Link} to="/dashboard">Dashboard</Nav.Link> <br /></>}
                            {user.email?<><Nav.Link onClick={logOut} variant="light" className=" border border-outline-dark  rounded fw-bold px-3 me-2 ">LogOut</Nav.Link> <br /></>:<>
                            <Nav.Link variant="light" className=" border border-outline-dark  rounded fw-bold px-3 me-2 " as={Link} to="/login">Login</Nav.Link> <br />
                            <Nav.Link variant="light" className="border border-outline-dark  rounded fw-bold px-3  " as={Link} to="/Register">Register</Nav.Link> <br /></>}
                            
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;