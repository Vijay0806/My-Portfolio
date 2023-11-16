import React from 'react';
import Experience from './Experience.js';
import "./ExperienceContainer.css";

const ExperienceContainer = () => {
    return (
        <div className='experienceContainer' id='exp'>
            <h1 className='head'>Experience</h1>
            <div className='experienceContainer__info'>
                
                <Experience number="4month" tittle="MERN Stack Development Course" />
                <Experience number="300+" tittle="Problems solved in Guvi" style={{ backgroundColor: "rgb(56,26,210)" }} />
                <Experience number="+5" tittle="Beginner level projects" />
                {/* <Experience number="6+" tittle="Years Teaching" /> */}
               
            </div>
        </div>
    )
}

export default ExperienceContainer
