import React, { useRef } from 'react';
import { Container, Button, Form } from 'react-bootstrap';

const AddProduct = () => {
    const titleRef = useRef();
    const descRef = useRef();
    const priceRef = useRef();
    const imgRef = useRef();

    const handleAdService = (e) => {

        const title = titleRef.current.value;
        const desc = descRef.current.value;
        const price = priceRef.current.value;
        const img = imgRef.current.value;

        const newproduct = { title, desc, price, img };
        fetch('https://blooming-meadow-45048.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newproduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Product Added Successfully')
                    e.target.reset();
                }
            })

        e.preventDefault();


    }

    return (
        <div>
            <h3 className="display-3 text-center">Add Your Products</h3>

            <Container>
                <Form onSubmit={handleAdService}>
                    <Form.Group className="mb-3  " controlId="formGroup">
                        <Form.Label>Title</Form.Label>
                        <Form.Control className=" " ref={titleRef} type="title" placeholder="Title" />
                    </Form.Group>
                    <Form.Group className="mb-3 " controlId="formGroup">
                        <Form.Label>Description</Form.Label>
                        <Form.Control className="py-2" ref={descRef} type="text" placeholder="Description" />
                    </Form.Group>
                    <Form.Group className="mb-3 " controlId="formGroup">
                        <Form.Label>Price</Form.Label>
                        <Form.Control className="py-2" ref={priceRef} type="number" placeholder="Price" />
                    </Form.Group>
                    <Form.Group className="mb-3 " controlId="formGroup">
                        <Form.Label>Image</Form.Label>
                        <Form.Control className="py-2" ref={imgRef} type="text" placeholder="photo url" />
                    </Form.Group>
                    <Button style={{ marginLeft: "25%" }} variant="primary" type="submit">
                        Submit
                    </Button>

                </Form>
            </Container>
        </div>
    );
};

export default AddProduct;