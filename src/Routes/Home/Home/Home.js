import React from 'react';

import Reviews from '../../Reviews/Reviews';
import Newslater from '../../SubscribeNewslater/Newslater';
import Products from '../Products/Products';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>

            <TopBanner></TopBanner>
            <Products></Products>
            <Reviews></Reviews>
            <Newslater></Newslater>
        </div>
    );
};

export default Home;