import { useParams } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import { Card, Container, Button, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PurchaseDetails = () => {
    const { id } = useParams();
    const { user } = useAuth();


    const nameRef = useRef();
    const addressRef = useRef();
    const phoneRef = useRef();

    console.log(user);
    const [details, setDetails] = useState([]);
    const [singledetails, setSingledetails] = useState({});
    const { title, desc, img, price } = singledetails;

    useEffect(() => {
        fetch('https://blooming-meadow-45048.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, []);

    useEffect(() => {
        if (details.length > 0) {
            const matched = details.find(detail => detail._id == id)
            setSingledetails(matched);
        }
    }, [details]);


    const handleorders = () => {
        const name = nameRef.current.value;
        const address = addressRef.current.value;
        const phone = phoneRef.current.value;

        const orderdetails = {
            Title: title,
            Price: price,
            Image: img,
            Description: desc,
            User: user.email,
            Status: "Pending",
            Name: name,
            Address: address,
            Phone: phone,
        };
        fetch('https://blooming-meadow-45048.herokuapp.com/book', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderdetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('purchase Successfully');
                }
            })

    }



    return (
        <div>
            <div className="my-5">
                <br />
                <h1 className="text-center display-2 fw-bold text-uppercase text-primary ">Know more and Purchase</h1>
                <Container>
                    <Row>
                        <Col sm={12} md={6}>
                            <Card className="mx-auto mt-5" style={{ width: '60%', marginBottom: "5px" }}>
                                <Card.Img style={{ height: "250px" }} variant="top" src={img} />
                                <Card.Body>
                                    <Card.Title>{title}</Card.Title>
                                    <p><i><strong>Price: {price} TK</strong></i></p>
                                    <Card.Text>
                                        <p>{desc}</p>
                                    </Card.Text>

                                </Card.Body>
                                <Button className=" mt-2 btn btn-primary rounded"><Link className="text-white text-decoration-none" to="/places">Back To Places</Link></Button>
                            </Card>
                        </Col>
                        <Col sm={12} md={6}>
                            <Form>
                                <Form.Group className="mb-3  " controlId="formGroup">
                                    <Form.Label>Your Name</Form.Label>
                                
                                    <Form.Control className=" " ref={nameRef} type="text" placeholder="name" required />
                                </Form.Group>
                                <Form.Group className="mb-3 " controlId="formGroup">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control className="py-2" ref={addressRef} type="text" placeholder="Address" required />
                                </Form.Group>
                                <Form.Group className="mb-3 " controlId="formGroup">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control className="py-2" ref={phoneRef} type="number" placeholder="Phone" />
                                </Form.Group>

                                <Button onClick={handleorders} className="btn btn-primary rounded">Purchase</Button>

                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default PurchaseDetails;