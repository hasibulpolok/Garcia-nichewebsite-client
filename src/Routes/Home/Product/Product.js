import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Product = ({ product }) => {
    const { title, thumbnailUrl } = product;
    return (
        <>
            <Col sm={12} md={4}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={thumbnailUrl} alt="product" />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <h5>Price: 99$</h5>
                        <div className="text-end">
                            <Button className="btn btn-outline-dark " variant="primary">Purchase</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            
        </>
    );
};

export default Product;