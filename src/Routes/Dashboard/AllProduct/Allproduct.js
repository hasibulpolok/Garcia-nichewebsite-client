import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Allproduct = ({ product }) => {
    const { title, _id } = product;
    // Icons font awesome

    const trash = <FontAwesomeIcon className=" far fs-4 text-white" icon={faTrash} />;
    const check = <FontAwesomeIcon className=" fas fs-4 text-white" icon={faCheck} />;




    // Delete a product
    const handledeletproduct = (id) => {
        const decision = window.confirm("Are you sure want to delete ?")
        if (decision) {
            const uri = `https://blooming-meadow-45048.herokuapp.com/products/${id}`;
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
        <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                <div className="fw-bold">{title}</div>
                <b>Status:<strong>{ }</strong></b>
            </div>
            <span>
                <Button onClick={() => handledeletproduct(_id)} className="btn btn-danger rounded">{trash}</Button>
                <Button className="btn btn-primary rounded ms-3">{check}</Button>
            </span>
        </ListGroup.Item>


    );
};

export default Allproduct;