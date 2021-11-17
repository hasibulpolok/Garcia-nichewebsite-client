import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import AllReview from '../AllReview/AllReview';

const AllReviews = () => {
    const [allreviews, setAllReviews] = useState([]);

    useEffect(() => {
        fetch('https://blooming-meadow-45048.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setAllReviews(data))
    }, [])
    return (
        <div>
            <Container>
                <h2 className="text-center display-3">Reviews</h2>
                <Row>




                    {
                        allreviews.map(allrev => <AllReview key={allrev._id} allrev={allrev}></AllReview>)
                    }


                </Row>
            </Container>
        </div>
    );
};

export default AllReviews;