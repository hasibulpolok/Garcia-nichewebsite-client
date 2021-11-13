import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';


const MyOrder = ({ orders }) => {
    const { Title, Image, Description, Price, Name, Address, Phone, _id } = orders;


    const handledeletebooking = id => {
        const decision = window.confirm("Are you sure want to delete ?")
        if (decision) {
            const uri = `https://blooming-meadow-45048.herokuapp.com/book/${id}`;
            fetch(uri, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Product Delete Successfully')
                        window.location.reload()

                    }
                })
        }
    }

    return (
        <Col sm={12} md={4}>
            <Card className="border-0">
                <Card.Img variant="top" src={Image} alt="product" />
                <Card.Body>
                    <Card.Title>{Title}</Card.Title>
                    <Card.Text>
                        {Description.slice(0, 100)}
                    </Card.Text>
                    <Card.Text>
                        Orderd For: {Name.slice(0, 150)}
                    </Card.Text>
                    <Card.Text>
                        {Address}
                    </Card.Text>
                    <Card.Text>
                        {Phone}
                    </Card.Text>
                    <h5>Price: {Price} $</h5>
                    <div className="text-end">

                    </div>
                    <Button onClick={() => handledeletebooking(_id)} className="btn btn-danger rounded text-white">Remove Booking</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default MyOrder;