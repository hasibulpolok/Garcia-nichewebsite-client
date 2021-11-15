import React from 'react';
import { Row, Container, Col, ListGroup } from 'react-bootstrap';

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





const Dashboard = () => {
    const { user, admin, logOut } = useAuth();
    let { path, url } = useRouteMatch();
    return (
        <div>
            <Container className="border border-outline-dark py-3">
                <Row>
                    <Col sm={12} md={4}>

                        <ListGroup as="ul">
                            {admin && <>       <ListGroup.Item as={Link} to={`${url}/addproducts`}>
                                Add Product
                            </ListGroup.Item>
                                <ListGroup.Item as={Link} to={`${url}/allproducts`}>
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
                        </ListGroup>
                    </Col>
                    <Col sm={12} md={8}>

                        <Switch>
                            <Route path={`${path}/reviews`}>
                                <DashReview />
                            </Route>
                            <Route exact path={path}>
                                {user.email && <p className=" text-dark  text-center px-3 rounded me-3 fs-5 fw-bold">Hi, {user?.displayName} Welcome To Dashboard</p>}
                            </Route>
                            <Route path={`${path}/myorders`}>
                                <MyOrders />
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