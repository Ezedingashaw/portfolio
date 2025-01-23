import React from 'react';
import AOS from 'aos';
import './contact.css';
import ContactForm from '../contactForm/contactForm';

const Contact = () => {
    
    AOS.init({
        duration: 1000,
        once: true
    });

    return (
        <section className="contact">
            <div className="contactCont"  id="contact">
                <div data-aos="slide-up" className="contactText">
                    <p>Get in Touch</p>
                    <h2>Contact Me</h2>
                </div>
                <ContactForm />
                <div className="linksCont">
                    <div data-aos="zoom-in" className="contactLinks">
                    <a href="mailto:ezedingashaw@gmail.com"><div><i class="fa-regular fa-envelope"></i></div>ezedingashaw@gmail.com</a>
                        <a href="https://www.linkedin.com/in/ezedin-gashaw-b184922a6" target='_blank'><div><i class="fa-regular fa-envelope"></i></div>Linkedin</a>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Contact;