import React from 'react';

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link mr-5" href="/">Home <span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5" href="/">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5" href="/">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5" href="/">Reviews</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5" href="/">Blogs</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5" href="/">Contact Us</a>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    );
};

export default Navigation;