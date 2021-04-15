import React from 'react';
import Review from '../Review/Review';
import people1 from '../../../../images/people1.png';
import people2 from '../../../../images/people2.png';
import people3 from '../../../../images/people3.png';

const reviewData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Harry Potter',
        from : 'California',
        img : people1
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Hermione Granger',
        from : 'California',
        img : people2
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Ron Weasley',
        from : 'California',
        img : people3
    }
]

const Reviews = () => {
    return (
        <section className="testimonials my-5">
           <div className="container">
               <div className="section-header">
                   <h5 style={{color: '#eda6be'}} className="text-uppercase">Testimonial</h5>
                   <h1>What Our Customers <br/> Says </h1>
               </div>
               <div className="card-deck mt-5 row d-flex align-items-center">
                    {
                        reviewData.map(review => <Review review={review} key={review.name} />)
                    }
                </div>
           </div>
       </section>
    );
};

export default Reviews;