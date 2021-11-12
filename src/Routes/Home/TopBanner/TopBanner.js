import React from 'react';
import { Carousel } from 'react-bootstrap';
import camera1 from '../../../img/camera1.jpg';
import camera2 from '../../../img/camera2.jpg';

const TopBanner = () => {
    return (
        <div>
            <Carousel  variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={camera1}
                        alt="First slide"
                    />
                   
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={camera2}
                        alt="Second slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={camera1}
                        alt="Third slide"
                    />
                  
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default TopBanner;