import React from 'react';
import { Row, Container, Col, ListGroup, Button, Navbar, Nav } from 'react-bootstrap';

import {
    Switch, Route, Link, useRouteMatch
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import AddAdmin from '../AddAdmin/AddAdmin';
import AddProduct from '../AddProduct/AddProduct';
import AdminRoute from '../AdminRoute/AdminRoute';
import AllOrder from '../AllOrders/AllOrder';
import AllProducts from '../AllProducts/AllProducts';
import DashReview from '../DashReview/DashReview';
import MyOrders from '../MyOrders/MyOrders';
import Bkash from '../Pay/Bkash';
import Pay from '../Pay/Pay';
import Rocket from '../Pay/Rocket';





const Dashboard = () => {
    const { user, admin, logOut } = useAuth();
    let { path, url } = useRouteMatch();
    return (
        <div>
            <Container className="py-3" fluid>
                <Navbar className="py-4 mb-3 " collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand as={Link} to="/home" className=" text-center border border-outline-dark  rounded  px-5 ms-4"> Back To Garcia HomePage</Navbar.Brand>
                    <Container>

                        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="text-center" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">
                                <Nav.Link as={Link} to="/dashboard" className=" text-center border border-outline-dark  rounded fw-bold px-5 m-2 fs-5 " > {user.email && <p className=" text-White  text-center px-3 rounded me-3 fs-5 fw-bold">Hi, {user?.displayName} Welcome To </p>}Dahboard</Nav.Link>


                            </Nav>

                            <Nav>

                                {user.email ? <><Nav.Link onClick={logOut} variant="light" className=" border border-outline-dark  rounded fw-bold px-5 m-2 ">LogOut</Nav.Link> <br /></> : <>
                                    <br />
                                    <br /></>}

                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Row>
                    <Col sm={12} md={4}>

                        <Nav defaultActiveKey="/home" className="flex-column bg-dark">
                           {admin &&<> <Link  to={`${url}/addproducts`}  className="text-decoration-none text-white border border-white border-2 p-2">
                                Add Product</Link>
                                <Link to={`${url}/allproducts`}className="text-decoration-none text-white border border-white border-2 p-2">
                                All Products</Link>
                                <Link to={`${url}/allorders`}className="text-decoration-none text-white border border-white border-2 p-2">
                                All Orders</Link>
                                <Link  to={`${url}/addadmin`}className="text-decoration-none text-white border border-white border-2 p-2">
                                Add Admin</Link>
                                </>}
                                <Link to={`${url}/myorders`}className="text-decoration-none text-white border border-white border-2 p-2">
                                My Orders</Link>
                                <Link  to={`${url}/reviews`} className="text-decoration-none text-white border border-white border-2 p-2">
                                Reviews</Link>
                                <Link  to={`${url}/pay`} className="text-decoration-none text-white border border-white border-2 p-2">
                                Pay</Link>

                        </Nav>
                      

                        {/* <ListGroup as="ul" className="text-primary" >
                            {admin && <> <ListGroup.Item as={Link} to={`${url}/addproducts`}>
                                Add Product
                            </ListGroup.Item >
                                <ListGroup.Item as={Link} to={`${url}/allproducts`} >
                                    All Products
                                </ListGroup.Item>

                                <ListGroup.Item as={Link} to={`${url}/allorders`}>
                                    All Orders
                                </ListGroup.Item>

                                <ListGroup.Item as={Link} to={`${url}/addadmin`} >
                                    Add Admin
                                </ListGroup.Item></>}
                            <ListGroup.Item as={Link} to={`${url}/myorders`}>
                                My Orders
                            </ListGroup.Item>
                            <ListGroup.Item as={Link} to={`${url}/reviews`} >
                                Reviews
                            </ListGroup.Item>
                            <ListGroup.Item onClick={() => logOut()} style={{ "cursor": "Pointer" }} >
                                logout
                            </ListGroup.Item>
                        </ListGroup> */}
                    </Col>
                    <Col sm={12} md={8}>

                        <Switch>
                            <Route path={`${path}/reviews`}>
                                <DashReview />
                            </Route>
                            <Route exact path={path}>
                                <MyOrders/>
                            </Route>
                            <Route path={`${path}/myorders`}>
                                <MyOrders />
                            </Route>
                            <Route path={`${path}/pay`}>
                                <Pay/>
                            </Route>
                            <Route path={`${path}/bkash`}>
                                <Bkash/>
                            </Route>
                            <Route path={`${path}/rocket`}>
                                <Rocket/>
                            </Route>
                            <AdminRoute path={`${path}/addproducts`}>
                                <AddProduct />
                            </AdminRoute>
                            <AdminRoute path={`${path}/allproducts`}>
                                <AllProducts />
                            </AdminRoute>

                            <AdminRoute path={`${path}/allorders`}>
                                <AllOrder />
                            </AdminRoute>

                            <AdminRoute path={`${path}/addadmin`}>
                                <AddAdmin />
                            </AdminRoute>


                        </Switch>
                    </Col>

                </Row>

            </Container>

        </div>
    );
};

export default Dashboard;