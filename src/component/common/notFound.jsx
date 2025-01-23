import React from 'react';
import './notFound.css';

const NotFound = () => {
    return ( 
        <section className="notFound">
            <div className="cont">
                <div>
                    <h1 className="errorNumber">404</h1>
                    <h2>Page not found!</h2>
                </div>
                <p>The requested page was not found </p>
            </div>
        </section>
     );
}
 
export default NotFound;