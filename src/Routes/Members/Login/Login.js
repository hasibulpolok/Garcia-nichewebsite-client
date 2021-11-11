import React from 'react';
import { Form,Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="mt-5">
            
            <Container>
            <h5 className="text-center display-3 border border-2 display-5 pb-1">Login Please</h5>
            <div className="w-100 py-5 mb-5">
                <div className="w-50 mx-auto">
                <Form className="mt-5">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button className="btn btn-outline-dark" variant="light" type="submit">
                    Login
                </Button>
                <hr className="w-50"/>
                <p>Dont have an account ?<Link className="text-decoration-none text-danger fw-bold" to="/register">Register Here.</Link></p>
            </Form>
                </div>
                
            </div>
            </Container>
        </div>
    );
};

export default Login;