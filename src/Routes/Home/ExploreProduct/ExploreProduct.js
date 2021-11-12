import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';
const ExploreProduct = ({product}) => {
    const { title, desc, price, img } = product;
    return (
        <Col sm={12} md={4}>
                <Card  className="border-0">
                    <Card.Img variant="top" src={img} alt="product" />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {desc.slice(0,150)}
                        </Card.Text>
                        <h5>Price: {price} $</h5>
                        <div className="text-end">
                            <Button className="btn btn-outline-dark " variant="primary">Purchase</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
    );
};

export default ExploreProduct;