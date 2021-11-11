import React from 'react';

import Reviews from '../../Reviews/Reviews';
import Products from '../Products/Products';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>

            <TopBanner></TopBanner>
            <Products></Products>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;