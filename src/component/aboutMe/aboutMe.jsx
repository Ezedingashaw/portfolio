import React, {Fragment, useEffect, useState} from 'react';
import Modal from 'react-modal';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './aboutMe.css';
import myImage from '../../assets/ezedin.jpg'

const AboutMe = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handlemodalIsOpen = () => {
        setModalIsOpen(true);
    };

    const handlemodalClose = () => { 
        setModalIsOpen(false);
    }

    const customStyle = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            padding: 0,
            border: "none",
            transform: 'translate(-50%, -50%)'
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
        }
    };

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    });

    Modal.setAppElement('#root');

    return ( 
        <Fragment>
            <section className="aboutMe">
                <div data-aos="fade-up" className="aboutMeCont"  id="about">
                <p>Get To Know More</p>
                <h2>About Me</h2>
                 </div>
                <div className="aboutContent">
                    <div data-aos="zoom-in" className="imageCont">
                        <div className="image"><img src={myImage} alt="" /></div>
                    </div>
                    <div data-aos="zoom-out" className="skillDiscription">
                        <div className="experienceCont">
                            <i class="fa-solid fa-award"></i>
                            <h3>Experience</h3>
                            <p>1<sup>+</sup> Years</p>
                            <p>Full-Stack Developer</p>
                        </div>
                        <div className="educationCont">
                        <i class="fa-solid fa-laptop-code"></i>
                            <h3>Education</h3>
                            <p>Software Engineering</p>
                        </div>
                        <div className="mySkillAndEducationBreif">
                            <p className="myDiscText">Hi, I’m Ezedin, a passionate Full-Stack Developer. I specialize in creating dynamic and responsive web applications using modern technologies like React, Node.js, and MongoDB. With a strong foundation in both front-end and back-end development, I strive to deliver seamless user experiences and robust solutions. Let’s build something amazing together!</p>
                        </div>
                    </div>
                </div>
            </section>
            <Modal style={customStyle} isOpen={modalIsOpen} onRequestClose={handlemodalClose} />
        </Fragment>
     );
}
 
export default AboutMe;