import React from 'react';
import logo from '../../../images/logo.png';

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                        <a className="nav-link mr-5" href="/"> <img style={{height:"30px"}} src={logo} alt=""/> <span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item">
                        <a style={{fontSize:"1.2vw"}} className="nav-link mr-5" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a style={{fontSize:"1.2vw"}} className="nav-link mr-5" href="/about">About</a>
                    </li>
                    <li className="nav-item">
                        <a style={{fontSize:"1.2vw"}} className="nav-link mr-5" href="/service">Services</a>
                    </li>
                    <li className="nav-item">
                        <a style={{fontSize:"1.2vw"}} className="nav-link mr-5" href="/Review">Reviews</a>
                    </li>
                    <li className="nav-item">
                        <a style={{fontSize:"1.2vw"}} className="nav-link mr-5" href="/admin">Log In</a>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    );
};

export default Navigation;