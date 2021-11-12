import React, { useEffect, useState } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://blooming-meadow-45048.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>

            <Container>
                <h2 className="text-center display-3 text-uppercase border border-2 border-bg-light mt-3">Products</h2>
                <Row className="g-2">
                    {products.map(product => <Product
                        key={product._id}
                        product={product}></Product>).slice(0, 6)}
                    <div className="text-center display-3  border border-2 border-bg-light pb-2">
                        <Button className="btn btn-outline-white mb-1" variant="dark"><Link className="text-decoration-none text-white" to='exploreproducts'>Exploare All Products</Link></Button>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Products;