import React from 'react';
import { Row, Container, Col, ListGroup } from 'react-bootstrap';

import {
    Switch, Route, Link, useRouteMatch
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import Showdata from '../ShowData/Showdata';

const Dashboard = () => {
    const { user } = useAuth();
    let { path, url } = useRouteMatch();
    return (
        <div>
            <Container className="border border-outline-dark py-3">
                <Row>
                    <Col sm={12} md={4}>

                        <ListGroup as="ul">
                            <ListGroup.Item as={Link} to={`${url}/addproducts`}>
                                Add Product
                            </ListGroup.Item>
                            <ListGroup.Item as={Link} to={`${url}/allproducts`}>
                                All Products
                            </ListGroup.Item>
                            <ListGroup.Item as={Link} to={`${url}/myorders`}>
                                My Orders
                            </ListGroup.Item>
                            <ListGroup.Item as={Link} to={`${url}/allorders`}>
                                All Orders
                            </ListGroup.Item>
                            <ListGroup.Item as={Link} to={`${url}/reviews`} >
                                Reviews
                            </ListGroup.Item>
                            <ListGroup.Item as={Link} to={`${url}/addadmin`} >
                                Add Admin
                            </ListGroup.Item>

                        </ListGroup>
                    </Col>
                    <Col sm={12} md={8}>

                        <Switch>
                            <Route exact path={path}>
                                {user.email && <p className=" text-dark  text-center px-3 rounded me-3 fs-5 fw-bold">Hi, {user?.displayName} Welcome To Dashboard</p>}
                            </Route>
                            <Route path={`${path}/:topicId`}>
                                <Showdata />
                            </Route>
                        </Switch>
                    </Col>

                </Row>

            </Container>
        </div>
    );
};

export default Dashboard;