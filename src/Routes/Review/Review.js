import React from 'react';
import { Carousel, Col, Container } from 'react-bootstrap';
import Rating from 'react-rating';
import emptystar from '../../img/star-empty.png';
import fullstar from '../../img/star-full.png';

const Review = ({ rev }) => {

    const { userName, userImg, review, rating } = rev;

    return (
      <Col className="my-5" sm={6} md={3} >
     
            <div className="d-flex flex-column align-items-center ">
                <img
                    className="d-block rounded-circle w-30 h-30 "
                    src={userImg}
                    alt="slide"
                />
            </div>
            <div className="text-center">
                <h3>{userName}</h3>
                <p>{review}</p>
                <Rating
                    emptySymbol={<img src={emptystar} alt="empty-rating" className="icon" />}
                    fullSymbol={<img src={fullstar} alt="rating" className="icon" />}
                    initialRating={rating}
                    readonly
                />
            </div>
            </Col>



    );
};

export default Review;