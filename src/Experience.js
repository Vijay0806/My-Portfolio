import React from 'react';
import "./Experience.css";
const Experience = ({ number, tittle, style }) => {
    return (
        <div style={{ ...style }} className="experience">
             <p>{tittle}</p>
            <h1 className='experience-box-text'>{number}</h1>
           
        </div>
    )
}

export default Experience
