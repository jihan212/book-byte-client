import React from 'react';

const Blog = (props) => {
    const {quote,name} = props.blog;
    return (
        <div className="card shadow-sm col-md-4 text-center review-card">
            <div className="card-body">
                <h4 style={{color: '#eda6be'}} >{name}</h4>
            </div>
            <div className="card-footer d-flex  align-items-center review-card-footer">
                <div>
                    <p className="card-text text-center">{quote}</p>
                </div>
            </div>
       </div>
    );
};

export default Blog;