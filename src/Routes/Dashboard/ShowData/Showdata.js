import React from 'react';
import { useParams } from 'react-router';
import AddAdmin from '../AddAdmin/AddAdmin';
import AddProduct from '../AddProduct/AddProduct';
import AllOrder from '../AllOrders/AllOrder';
import AllProducts from '../AllProducts/AllProducts';
import MyOrder from '../MyOrders/MyOrders';
import Reviews from '../Reviews/Reviews';

const Showdata = () => {
    let { topicId } = useParams();
    console.log(topicId)
    return (
        <>
           {topicId === 'addproducts' ? <AddProduct/> :''}
           {topicId === 'allproducts' ? <AllProducts/> :''}
           {topicId === 'myorders' ? <MyOrder/> :''}
           {topicId === 'allorders' ? <AllOrder/> :''}
           {topicId === 'reviews' ? <Reviews/> :''}
           {topicId === 'addadmin' ? <AddAdmin/> :''}
        </>
    );
};

export default Showdata;