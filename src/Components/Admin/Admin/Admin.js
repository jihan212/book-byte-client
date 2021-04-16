import React from 'react';
import './Admin.css';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';


/* image upload : onChange={handleImageUpload} */

const Admin = () => {
    const { handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div className="admin">
        <div className="side-div">
            <h2><Link to="/productDetail">Manage Products</Link></h2>
            <h2>Add Product</h2>
        </div>
        <div className="form-div">
        <form className="submitForm" onSubmit={handleSubmit(onSubmit)}>
            <h3>Input Product Information</h3>
        <input name="name" defaultValue="Product Name" />
        <br/>
        <input name="price" defaultValue="Product Price" />
        <br/>
        <input name="exampleRequired" type="file" />
        <br/>
        <input type="submit" />
        </form>
        </div>
    </div>
    );
};

export default Admin;