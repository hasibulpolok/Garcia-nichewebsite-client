import React from 'react';

const Bkash = () => {
    const handleclick = ()=>{
        alert("Payment Succesfully")
    }
    return (
        <div  className="w-100 border border-2 px-3">
            <div className="w-50 mx-auto p-5">
            <h3 className="me-1 Display-3">Pay With Bkash</h3>
            <label className="fw-bold">Enter Your Bkash Number</label><br/>
            <input type="number"></input><br/> 
            <input  onClick={handleclick} className="bg-danger border border-white rounded mt-2 ms-4 text-white fs-4 fw-bold" type="Submit" Value="Pay Now"></input>
            </div>
        </div>
    );
};

export default Bkash;