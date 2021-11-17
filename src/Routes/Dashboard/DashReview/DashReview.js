import React, { useRef } from "react";
import { Form, Button } from "react-bootstrap";
import Rating from "react-rating";
import useAuth from '../../../hooks/useAuth';
import emptystar from '../../../img/star-empty.png';
import fullstar from '../../../img/star-full.png';
import dummy from '../../../img/dummy.jpg';


const DashReview = () => {
    const { user } = useAuth();
    console.log(user);
    const rating = useRef();
    const review = useRef();
    const imageUrl =
        user.photoURL ||
        { dummy };
    const handlereview = (e) => {

        e.preventDefault();
        const data = {
            rating: rating.current.state.value,
            review: review.current.value,
            userName: user.displayName,
            userImg: imageUrl,
        };
        fetch("https://blooming-meadow-45048.herokuapp.com/reviews", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.insertedId) {
                    alert("Successfully added Review");
                }
            });
    };
    return (
        <Form className="w-100 " onSubmit={handlereview}>
            <Form.Group className="mb-3" controlId="describtion">
                <Form.Label>Select Stars </Form.Label>
                <br />
                <Rating
                    emptySymbol={
                        <img width="30px"
                        
                            src={emptystar}
                            className="icon"
                            alt="empty start"
                        />
                    }
                    fullSymbol={
                        <img
                        width="30px"
                            src={fullstar}
                            className="icon"
                            alt="empty start"
                        />
                    }
                    ref={rating}
                />
            </Form.Group>
            <Form.Group className="mb-3 " controlId="feedback">
                <Form.Label>Your Feedback !</Form.Label>
                <Form.Control as="textarea" rows={3} id="feedback" placeholder="Your FeedBack Here" ref={review} />
            </Form.Group>
            <Button variant="dark" className="w-100" type="submit">
                Add Review
            </Button>
        </Form>
    );
};

export default DashReview;