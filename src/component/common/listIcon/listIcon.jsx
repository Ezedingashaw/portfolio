import React, { useState, useEffect } from 'react';
import './listIcon.css';

const ListIcon = ({displayNavBar, value}) => {

    const [isClicked, setIsClicked] = useState(value);

    useEffect(() => {
        setIsClicked(value);
    },[value])

    const handleToggle = () => {
        setIsClicked(!isClicked)
        displayNavBar(!isClicked)
    };

    console.log(value)
    return (
        <div onClick={handleToggle} className={isClicked ? "listIcon active" : "listIcon"}>
            <span className="one"></span>
            <span className="two"></span>
            <span className="three"></span>
        </div>
     );
}
 
export default ListIcon;