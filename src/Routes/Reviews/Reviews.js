import React from 'react';
import { Carousel } from 'react-bootstrap';

import Rating from 'react-rating';

const Reviews = () => {
    return (
        <Carousel className="mt-4">


            <Carousel.Item >
                <div className="d-flex flex-column align-items-center">
                    <img
                        className="d-block rounded-circle "
                        width='50'
                        height='50'

                        src="https://jssors8.azureedge.net/demos/image-slider/img/px-fun-man-person-2361598-image.jpg"
                        alt="Third slide"
                    />
                </div>


                <div className="text-center">
                    <h3>Professor</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    <Rating
                        emptySymbol={<img src="https://dreyescat.github.io/react-rating/assets/images/star-empty.png" alt="empty-rating" className="icon" />}
                        fullSymbol={<img src="https://dreyescat.github.io/react-rating/assets/images/star-full.png" alt="rating" className="icon" />}
                        initialRating={5}
                        readonly
                    />
                </div>
            </Carousel.Item>
            <Carousel.Item >
                <div className="d-flex flex-column align-items-center">
                    <img
                        className="d-block rounded-circle "
                        width='50'
                        height='50'

                        src="https://jssors8.azureedge.net/demos/image-slider/img/px-fun-man-person-2361598-image.jpg"
                        alt="Third slide"
                    />
                </div>


                <div className="text-center">
                    <h3>Tokyo</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    <Rating
                        emptySymbol={<img src="https://dreyescat.github.io/react-rating/assets/images/star-empty.png" alt="empty-rating" className="icon" />}
                        fullSymbol={<img src="https://dreyescat.github.io/react-rating/assets/images/star-full.png" alt="rating" className="icon" />}
                        initialRating={3}
                        readonly
                    />
                </div>
            </Carousel.Item>
            <Carousel.Item >
                <div className="d-flex flex-column align-items-center">
                    <img
                        className="d-block rounded-circle "
                        width='50'
                        height='50'

                        src="https://jssors8.azureedge.net/demos/image-slider/img/px-fun-man-person-2361598-image.jpg"
                        alt="Third slide"
                    />
                </div>


                <div className="text-center">
                    <h3>Helsenki</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    <Rating
                        emptySymbol={<img src="https://dreyescat.github.io/react-rating/assets/images/star-empty.png" alt="rating-empty" className="icon" />}
                        fullSymbol={<img src="https://dreyescat.github.io/react-rating/assets/images/star-full.png" alt="rating" className="icon" />}
                        initialRating={4}
                        readonly
                    />
                </div>
            </Carousel.Item>
        </Carousel>
    );
};

export default Reviews;