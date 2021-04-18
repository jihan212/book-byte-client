import React from 'react';
import Navigation from '../../Common/Navigation/Navigation';
import './AddReview.css';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import axios from 'axios';
import Sidebar from '../../Common/Sidebar/Sidebar';


const AddReview = () => {

    const [imageURL,setImageURL] = useState();
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);

        const reviewData = {
            name: data.value_name,
            from : data.value_from,
            description: data.value_description,
            imageURL : imageURL
        }
        const url = `http://localhost:4000/addReview`;
    
        fetch(url,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
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
            <Sidebar></Sidebar>
        </div>
        <div className="form-div">
        <form className="submitForm" onSubmit={handleSubmit(onSubmit)}>
            <h3>Input Reviews Information</h3>
        <input name="name" defaultValue="Name" {...register('value_name')} />
        <br/>
        <input name="from" defaultValue="From" {...register('value_from')} />
        <br/>
        <input name="description" defaultValue="Review Description" {...register('value_description')} />
        <br/>
        <input name="image" type="file" onChange={handleImageUpload} />
        <br/>
        <input type="submit" />
        </form>
        </div>
    </div>
    </div>
    );
};

export default AddReview;