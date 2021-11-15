import React, { useState,useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Order from '../AllOrder/Order';

const AllOrder = () => {
    const { user } = useAuth()
    const [allorders, setAllorders] = useState([]);
    useEffect(() => {
        fetch('https://blooming-meadow-45048.herokuapp.com/book')
            .then(res => res.json())
            .then(data => setAllorders(data))
    }, [])


    return (
        <div>
        <h3 className="text-center display-3">All orders {allorders.length}</h3>
        <Container>
            <Row>
                {
                    allorders.map(order => <Order key={order._id} order={order}></Order>)
                }
            </Row>
        </Container>
    </div>
    );
};

export default AllOrder;