import React from 'react';
import './ContactUs.css';


const ContactUs = () => {
    return (
        <section className="contact my-5 py-5">
           <div className="container">
               <div className="text-center mb-5">
                    <h5 style={{color: '#eda6be'}}>Contact</h5>
                    <h1>Always  connect with us</h1>
               </div>
               <div className="col-md-9 mx-auto">
                   <form action="">
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Email Address *"/>
                       </div>
                       <div className="form-group mt-2">
                           <input type="text" className="form-control" placeholder="Subject *"/>
                       </div>
                       <div className="form-group mt-2">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                       </div>
                       <div className="form-group mt-2 text-center">
                           <button type="button" className="btn btn-secondary"> Submit </button>
                       </div>
                   </form>
               </div>
           </div>
       </section>
    );
};

export default ContactUs;