import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h3 className="display-3 text-center "> 404 Not found</h3>
            <div className="text-center">
            <button className="btn btn-danger rounded mt-2"> <Link className="text-decoration-none text-white" to="/home">Back Home</Link></button>
            </div>
            
        </div>
    );
};

export default NotFound;