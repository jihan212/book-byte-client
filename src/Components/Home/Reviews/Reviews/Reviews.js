import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';



const Reviews = () => {

    const [reviews,setReviews] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:4000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])

    return (
        <section className="testimonials my-5">
           <div className="container">
               <div className="section-header">
                   <h5 style={{color: '#eda6be'}} className="text-uppercase">Reviews</h5>
                   <h1>What Our Customers <br/> Says </h1>
               </div>
               <div className="card-deck mt-5 row d-flex align-items-center">
                    {
                        reviews.map(review => <Review review={review} key={review.name} />)
                    }
                </div>
           </div>
       </section>
    );
};

export default Reviews;