import React from 'react';
import Navigation from '../../Common/Navigation/Navigation';
import './AddService.css';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faGripHorizontal, faUsers } from '@fortawesome/free-solid-svg-icons';


const AddService = () => {

    const [imageURL,setImageURL] = useState();
    const { handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const productData = {
            name: data.name,
            description: data.description,
            imageURL : imageURL
        }
        const url = `http://localhost:4000/admin`;
    
        fetch(url,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then (response => console.log( 'Server side response', response) )
    };
    
    // ---------- image upload --------
        const handleImageUpload = product => {
            
            const imageData = new FormData();
            imageData.set('key','3f4dd576e7ec5e0aa1162eff92b248d7');
            imageData.append('image',product.target.files[0]);
    
            axios.post('https://api.imgbb.com/1/upload', imageData)
              .then(function (response) {
                setImageURL(response.data.data.display_url);
              })
              .catch(function (error) {
                console.log(error);
              });
    
        }
    

    return (
        <div>
            <Navigation></Navigation>
        <div className="admin">
        <div className="side-div">
            <ul className="list-unstyled">
                <li>
                    <Link to="/admin" className="text-white" style={{textDecoration:'none'}}>
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span><strong>Manage Services</strong></span> 
                    </Link>
                </li>
                <li>
                    <Link to="/addService" className="text-white" style={{textDecoration:'none'}}>
                        <FontAwesomeIcon icon={faCalendar} /> <span><strong>Add Service</strong></span> 
                    </Link>
                </li>
            </ul>
        </div>
        <div className="form-div">
        <form className="submitForm" onSubmit={handleSubmit(onSubmit)}>
            <h3>Input Services Information</h3>
        <input name="name" defaultValue="Service Name" />
        <br/>
        <input name="description" defaultValue="Description" />
        <br/>
        <input name="exampleRequired" type="file" onChange={handleImageUpload} />
        <br/>
        <input type="submit" />
        </form>
        </div>
    </div>
    </div>
    );
};

export default AddService;