
import React, { useRef } from 'react';
import { Container, Button, Form } from 'react-bootstrap';

const Reviews = () => {
    const titleRef = useRef();
    const descRef = useRef();
    const ratingRef = useRef();


    const handleAdService = (e) => {

        const title = titleRef.current.value;
        const desc = descRef.current.value;
        const rating = ratingRef.current.value;
   

        const newproduct = { title, desc, rating };
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
            <h3 className="text-center display-3">Reviews</h3>
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
                        <Form.Label>Rating out of 5</Form.Label>
                        <Form.Control className="py-2" ref={ratingRef} type="number" placeholder="Rating" />
                    </Form.Group>

                    <Button style={{ marginLeft: "25%" }} variant="primary" type="submit">
                        Submit
                    </Button>

                </Form>
            </Container>
        </div>
    );
};

export default Reviews;