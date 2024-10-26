import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos';
import technologies from '../../services/technologies.js';
import './experience.css';
import 'aos/dist/aos.css';
import Loading from '../loading/loading';
import technologyByStack from '../../services/getTechnologyStack';

const Experience = () => {

    const [experience, setExperience] = useState([]);
    const [frontTechnology, setFrontTechnology] = useState([]);
    const [backTechnology, setBackTechnology] = useState([]);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });

        
        console.log(technologies);
                const data = technologies;
                 setExperience(data);
                const frontTechnology = technologyByStack(data, "Front");
                const backTechnology = technologyByStack(data, "Back");
                setFrontTechnology(frontTechnology);
                setBackTechnology(backTechnology);
                console.log(frontTechnology, backTechnology);
    }, []);

    return ( 
        <section className="experience">
            <div data-aos="fade-up" className="experienceText"  id="experience">
                <p>Explore My</p>
                <h2 className="expHeader">Experience</h2>
            </div>
            <div className="skills">
                <div data-aos="zoom-in" className="frontEndCont">
                    <h2>Front-End Development</h2>
                    {frontTechnology.length !== 0 ? <div className="cont">
                        {frontTechnology.map(technology => {
                            return (
                                <div>
                            <img src={technology.image} alt="" />
                        
                        </div>
                           )
                       })}
                    </div> : <Loading />}
                </div>
                <div data-aos="zoom-in" className="backEndCont">
                    <h2>Back-End Development</h2>
                    {backTechnology.length !== 0 ? <div className="cont">
                    {backTechnology.map(technology => {
                            return (
                                <div>
                            <img src={technology.image} alt="" />
                        
                        </div>
                           )
                       })}
                    </div> : <Loading />}
                </div>
            </div>
        </section>
     );
}
 
export default Experience;