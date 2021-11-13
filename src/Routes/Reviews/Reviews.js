import React, { useEffect, useState } from 'react';
import { Carousel, Container, Row } from 'react-bootstrap';

import Rating from 'react-rating';
import Review from '../Review/Review';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://blooming-meadow-45048.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <Container>
                <h2 className="text-center display-3">Reviews</h2>
                <Row>




                    {
                        reviews.map(rev => <Review rev={rev}></Review>)
                    }


                </Row>
            </Container>
        </div>
    );
};

export default Reviews;