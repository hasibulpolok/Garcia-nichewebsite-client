import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Product = ({ product }) => {
    const { title,desc,price, img,_id } = product;
    const history = useHistory();

    const handledetails = (detailsid) => {
        const uri = `/detailspurchase/${detailsid}`;
        // console.log(uri);
        history.push(uri)
    }

    

    return (
        <>
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
                            <Button onClick={() =>
                            handledetails(_id)
                        } className="btn btn-outline-dark " variant="primary">Purchase</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>

        </>
    );
};

export default Product;