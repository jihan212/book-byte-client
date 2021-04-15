import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    const authers = [
        {name: "Jane Auston"},
        {name: "J.K. Rowling"},
        {name: "Paolo Coelho"},
        {name: " Louisa May Alcott"},
    ]
    const ourAddress = [
        {name: "New York - 101010 Hudson" , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
       
    ]
    const ourBooks = [
        {name: "Pride And Prejudice"},
        {name: "Emma" },
        {name: "Sense and Sensibility"},
        {name: "Persuasion (novel)"},
    ]
    const services = [
        {name: "Book Borrow"},
        {name: "Book Selling"},
        {name: "Book Buying"},
        {name: "Book Donate"}
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"Authers"} menuItems={authers}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Our Books" menuItems={ourBooks}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-brand">+102521452</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p> &#169; 2021 All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;