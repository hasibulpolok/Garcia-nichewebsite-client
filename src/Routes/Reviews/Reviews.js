import React, { useEffect, useState } from 'react';
import { Container, Row,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
                        reviews.map(rev => <Review key={rev._id} rev={rev}></Review>).slice(0, 6)
                    }

                    <div className="text-center display-3  border border-2 border-bg-light pb-2">
                        <Button className="btn btn-outline-white mb-1" variant="dark"><Link className="text-decoration-none text-white" to='/reviews'>Exploare All Reviews</Link></Button>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Reviews;