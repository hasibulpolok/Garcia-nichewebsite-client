import React, { useEffect, useState } from 'react';
import { Container, Row,Button } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>

            <Container>
                <h2 className="text-center display-3 text-uppercase border border-2 border-bg-light mt-2">Products</h2>
                <Row className="g-5">
                    {products.map(product => <Product
                        key={product.id}
                        product={product}></Product>).slice(0, 6)}
                    <div className="text-center display-3  border border-2 border-bg-light pb-2">
                        <Button className="btn btn-outline-dark mb-1" variant="light">Exploare All Products</Button>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Products;