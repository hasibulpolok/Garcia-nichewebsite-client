import React, { useEffect, useState } from 'react';
import { Container,  Button, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Allproduct from '../AllProduct/Allproduct';

const AllProducts = () => {
    const [allproducts, setAllproducts] = useState([]);

    useEffect(() => {
        fetch('https://blooming-meadow-45048.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setAllproducts(data))
    }, [])


    return (
        <div>
            <h3 className="display-3 text-center">All Products</h3>
            <Container>
                <Card>
                    <Card.Header className="  d-flex justify-content-between align-items-start "><span><strong>Orders</strong></span>  <span><span className="bg-danger p-2 rounded text-white"><b>Delete</b></span> <span className="ms-2 bg-primary p-2 rounded text-white"> <b>Approve</b> </span></span></Card.Header>
                    <Card.Body>

                        <Card.Text>
                            <ListGroup as="ol" numbered>

                                {
                                    allproducts.map(product =><Allproduct key={product._id} product={product}></Allproduct>)
                                }

                            </ListGroup>
                        </Card.Text>

                    </Card.Body>
                    <Card.Footer className="text-center">
                        <Button variant="primary">

                            <Link to="/home" className="text-decoration-none text-white ">Back To Home</Link>


                        </Button>
                    </Card.Footer>
                </Card>
            </Container>
        </div>
    );
};

export default AllProducts;