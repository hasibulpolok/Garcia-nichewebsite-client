import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Pay = () => {
    return (
        <div className="w-100">
                <h3 className="display-4 text-center"> Pays With Mobile Banking</h3>
            <div className=" w-50 mx-auto ">
                <Nav className="mt-5" variant="pills" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link as={Link} to="/bkash" className="text-dark border border-dark border-2 px-3 bg  me-2">Pay With Bkash</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/rocket"className="text-dark border border-dark border-2 px-3 bg ms-2">Pay With Rocket</Nav.Link>
                    </Nav.Item>


                </Nav>
            </div>
        </div>
    );
};

export default Pay;