import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';



const Login = () => {
    const location = useLocation();
    const { sigInUsingGoogle, handleSignIn, handleEmailChange, handlePasswordChange, setUser,setIsLoading } = useAuth();
    const uri = location.state?.from || '/home';
    const history = useHistory();
    // const [loginData,setLoginData] = useState({});

    const gtosignin = () => {
        sigInUsingGoogle().then(result => {
            setIsLoading(true);
            history.push(uri)
        })
            .finally(() => {
                setIsLoading(false);
            })
    }

    const signinwithmail = (e) => {
        handleSignIn().then(result => {
            setIsLoading(true);
            const user = result.user;
            history.push(uri);

        }).finally(() => {
            setIsLoading(false);
        })
        e.preventDefault();
    }



    //     const handlelogin = e =>{
    //         e.preventDefault()
    //     }

    //    const handleOnChange = e =>{
    //         const field = e.target.name;
    //         const value = e.target.value;
    //         const newLoginData = {...loginData}
    //         newLoginData[field] =value;
    //         setLoginData(newLoginData);
    //     }


    return (
        <div className="mt-5">

            <Container>
                <h5 className="text-center display-3 border border-2 display-5 pb-1">Login Please</h5>
                <div className="w-100 py-5 mb-5">
                    <div className="w-50 mx-auto">
                        <Form onSubmit={signinwithmail} className="mt-5">
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
                                Login
                            </Button>
                            <hr className="w-50" />
                            <p>Dont have an account ?<Link className="text-decoration-none text-danger fw-bold" to="/register">Register Here.</Link></p>
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

export default Login;