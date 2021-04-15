import React from 'react';
import Blog from '../Blog/Blog';


const blogData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi repudiandae voluptatibus dolores enim soluta dignissimos nostrum at facere maiores hic ut, accusantium blanditiis est temporibus debitis omnis voluptates! Dicta commodi aliquam, quam soluta quasi neque quos asperiores porro explicabo ipsum ipsam quisquam distinctio nam facere consectetur officiis necessitatibus praesentium odit.',
        name : 'Harry Potter'
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi repudiandae voluptatibus dolores enim soluta dignissimos nostrum at facere maiores hic ut, accusantium blanditiis est temporibus debitis omnis voluptates! Dicta commodi aliquam, quam soluta quasi neque quos asperiores porro explicabo ipsum ipsam quisquam distinctio nam facere consectetur officiis necessitatibus praesentium odit.',
        name : 'Hermione Granger'
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi repudiandae voluptatibus dolores enim soluta dignissimos nostrum at facere maiores hic ut, accusantium blanditiis est temporibus debitis omnis voluptates! Dicta commodi aliquam, quam soluta quasi neque quos asperiores porro explicabo ipsum ipsam quisquam distinctio nam facere consectetur officiis necessitatibus praesentium odit.',
        name : 'Ron Weasley'
    }
]

const Blogs = () => {
    return (
        <section className="testimonials my-5">
           <div className="container">
               <div className="section-header">
                   <h3 style={{color: '#eda6be'}} className="text-uppercase">Blogs</h3>
               </div>
               <div className="card-deck mt-5 row d-flex align-items-center">
                    {
                        blogData.map(blog => <Blog blog={blog} key={blog.name}></Blog>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Blogs;