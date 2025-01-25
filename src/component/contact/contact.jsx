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
<<<<<<< HEAD
            <div className="contactCont" id="contact">
=======
            <div className="contactCont"  id="contact">
>>>>>>> 697d507eef47445363a594a3d9b134ca41ec3924
                <div data-aos="slide-up" className="contactText">
                    <p>Get in Touch</p>
                    <h2>Contact Me</h2>
                </div>
                <ContactForm />
                <div className="linksCont">
                    <div data-aos="zoom-in" className="contactLinks">
<<<<<<< HEAD
                        <a href="mailto:ezedingashaw@gmail.com"><div><i class="fa-regular fa-envelope"></i></div>ezedingashaw@gmail.com</a>
=======
                    <a href="mailto:ezedingashaw@gmail.com"><div><i class="fa-regular fa-envelope"></i></div>ezedingashaw@gmail.com</a>
>>>>>>> 697d507eef47445363a594a3d9b134ca41ec3924
                        <a href="https://www.linkedin.com/in/ezedin-gashaw-b184922a6" target='_blank'><div><i class="fa-regular fa-envelope"></i></div>Linkedin</a>
                    </div>
                </div>
            </div>
        </section>
<<<<<<< HEAD
    );
}

=======
     );
}
 
>>>>>>> 697d507eef47445363a594a3d9b134ca41ec3924
export default Contact;