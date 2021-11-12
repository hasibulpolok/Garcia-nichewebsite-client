import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

import { useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Register = () => {

    const location = useLocation();

    const { photoURL,updateName, email, password, name, sigInUsingGoogle, handleEmailChange, handlePasswordChange, handleRegistration, handleNameChange, setIsLoading } = useAuth();
    const uri = location.state?.from || '/home';
    const history = useHistory();

    const gtosignin = () => {
        sigInUsingGoogle().then(result => {
            setIsLoading(true);
            history.push(uri)
        })
            .finally(() => {
                setIsLoading(false);
            })
    }

    const registerwithmail = (e) => {
        handleRegistration(email, password,name,photoURL).then(result => {
            setIsLoading(true);
            updateName(name);
            const user = result.user;
            history.push(uri);
        })
            .finally(() => {
                setIsLoading(false);
            })
        e.preventDefault();
    }

 
    return (
        <div className="m-5">

<Container>
                <h5 className="text-center display-3 border border-2 display-5 pb-2">Register Please</h5>
                <div className="w-100 py-5 mb-5">
                    <div className="w-50 mx-auto">
                        <Form onSubmit={registerwithmail} className="mt-5">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control onBlur={handleNameChange} type="text" name="name" placeholder="Enter Your Name" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onBlur={handleEmailChange} type="email" name="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onBlur={handlePasswordChange} type="password" name="password" placeholder="Password" />
                            </Form.Group>

                            <Button className="btn btn-outline-dark" variant="light" type="submit">
                                Register
                            </Button>
                            <hr className="w-50" />
                            <p>Already have an account ?<Link className="text-decoration-none text-danger fw-bold" to="/login">Login Here.</Link></p>
                            <br />
                            <p className="ms-5 fw-bold">Or</p>
                            <Button onClick={gtosignin} className="btn btn-outline-dark ms-2" variant="light" >
                                Login With Google
                            </Button>

                        </Form>
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default Register;