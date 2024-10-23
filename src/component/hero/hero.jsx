import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './hero.css';
import myImage from '../../assets/ezedin.jpg'

const Hero = () => {

    const [isScrolled, setIsScrolled] = useState(0);

    useEffect(() => { 
        AOS.init({
            duration: 1000,
            once: true
        });

        const handleScroll = () => {
            const scrolled = window.scrollY;
        setIsScrolled(scrolled);
        }
        window.addEventListener('scroll', handleScroll);
    },[])
    return ( 
        <section className="hero" id="hero">
            {isScrolled > 100 && <div className="goUpIcon"><a href="#hero"><i class="fa-solid fa-angles-up"></i></a></div>}
            <div data-aos="slide-right" className="myImage">
                <img src={myImage} alt="" />
            </div>
            <div data-aos="slide-left" className="discription">
                <p>Hello,I'm</p>
                <h1>Ezedin Gashaw</h1>
                <h2>Full-Stack Developer</h2>
                <div className="cvInfoCont">
                    <a href="/cv.pdf" download="MY_CV.pdf" className="downloadCV">Download CV</a>
                    <a href="/#contact" className="contactInfo">Contact info</a>
                </div>
                <div className="socialMedia">
                <a href="https://"><i class="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/Ezedingashaw"><i class="fa-brands fa-github"></i></a>
                </div>
            </div>
            
        </section>
     );
}
 
export default Hero;