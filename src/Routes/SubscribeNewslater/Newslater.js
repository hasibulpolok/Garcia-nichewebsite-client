import React from 'react';
import { Col, Button, Container, Row,Form } from 'react-bootstrap';
import camera from '../../img/camera1.jpg';

const Newslater = () => {
    return (
        <div>
            <Container className="text-center my-5 bg-dark px-5 py-4 rounded">
                <h3 className="text-center display-4 text-white"> Subscribe Our Newslater</h3>
                <Form className="py-3">
                    <Row>
                        <Col sm={12} md={6}>
                            <img className="img-fluid" src={camera} alt />
                        </Col>
                        <Col sm={12} md={6}>
                            <br/>
                            <Form.Control className="mt-5" placeholder="Email" />
                            <Button className="btn btn-light rounded mt-3"> Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    );
};

export default Newslater;