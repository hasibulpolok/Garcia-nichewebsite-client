import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import MyOrder from '../Dashboard/MyOrder/MyOrder';
// import MyOrder from '../Dashboard/MyOrder/MyOrder';

const MyOrders = () => {
    const [myorders,setMyorders] = useState([]);
    useEffect(()=>{
        fetch('https://blooming-meadow-45048.herokuapp.com/book')
        .then(res=>res.json())
        .then(data=>setMyorders(data))
    },[])
    return (
        <div>
            <h3 className="text-center display-3">My orders {myorders.length}</h3>
            <Container>
                <Row>
                    {
                       myorders.map(orders=><MyOrder key={orders._id} orders={orders}></MyOrder>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default MyOrders;