import React, { useState, useEffect } from 'react';
import './navBar.css';
import ListIcon from '../common/listIcon/listIcon';
import logo from './Ezu-removebg-preview.png';


const NavBar = () => {

    const [isToggled, setIsToggled] = useState(false);
    const [value, setValue] = useState(false);

    const displayNavBar = (value) => {
        setIsToggled(value);
        setValue(value);
    };

    
    return (
        <nav className="navBar">
            <span className="logo"><img src={ logo } alt="" /></span>
            <ul className={isToggled ? "active" : ""}>
                <li onClick={() => {
                    displayNavBar(false);
                    }}><a href="#about">About</a></li>
                <li onClick={() => {
                    displayNavBar(false);
                    }}><a href="#experience">Experience</a></li>
                <li onClick={() => {
                    displayNavBar(false);
                    }}><a href="#projects">Projects</a></li>
                <li onClick={() => {
                    displayNavBar(false);
                    }}><a href="#contact">Contact</a></li>
            </ul>
            <ListIcon value={value} displayNavBar={displayNavBar} />
        </nav>
     );
}
 
export default NavBar;