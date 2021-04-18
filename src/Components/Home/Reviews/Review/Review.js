import React from 'react';
import './Review.css'

const Review = ({review}) => {

    return (
        <div className="card shadow-sm col-md-4 text-center review-card">
            <div className="card-body">
                <h6 style={{color: '#eda6be'}} >{review.name}</h6>
                <p className="m-0">{review.from}</p>
            </div>
            <div className="card-footer d-flex  align-items-center review-card-footer">
                <img className="mx-3" src={review.imageURL} alt="" width="60"/>
                <div>
                    <p className="card-text text-center">{review.description}</p>
                </div>
            </div>
       </div>
    );
};

export default Review;