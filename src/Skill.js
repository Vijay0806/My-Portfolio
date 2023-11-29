// import React from 'react'
// import './Skill.css';
// import html from './img/html.png'
// import Css from './img/css.png'
// import Javasript from './img/js.png'
// import react from './img/reactjs.png'
// import Nodejs from './img/nodejs.png'

// function Skill() {
//   return (
//     <div className='skill' id='Skills'>
//         <div className='skill-section'>
//           <h1 className='head-skill'>Skills</h1>
//           <div className='skills-container'>

//           <div className='skill-card'>
//                 <img src={Javasript} className="skill-img" alt=""/>
//                 <div className='skill-level'>84%</div>
//                 <h1 className='skill-name'>JavaScript</h1>
//                 <p className='skill-info'>ES6 features,To cover basic and some of the advance topics are(Callback,Promise)
//                      learned</p>
//             </div>
//             <div className='skill-card'>
//                 <img src={html} className="skill-img" alt=""/>
//                 <div className='skill-level'>80%</div>
//                 <h1 className='skill-name'>HTML</h1>
//                 <p className='skill-info'>To cover basic and need for web development tags are
//                      learned</p>
//             </div>
//             <div className='skill-card'>
//                 <img src={Css} className="skill-img" alt=""/>
//                 <div className='skill-level'>75%</div>
//                 <h1 className='skill-name'>CSS</h1>
//                 <p className='skill-info'>To cover basic styles,grid,flex box,position-properties are covered
//                     </p>
//             </div>
            
//             <div className='skill-card'>
//                 <img src={react} className="skill-img" alt=""/>
//                 <div className='skill-level'>82%</div>
//                 <h1 className='skill-name'>React JS</h1>
//                 <p className='skill-info'>React Hooks,Props,Virtual Dom,Compoents and Redux concepts
//                      learned</p>
//             </div>
//             <div className='skill-card'>
//                 <img src={Nodejs} className="skill-img" alt=""/>
//                 <div className='skill-level'>75%</div>
//                 <h1 className='skill-name'>NodeJs</h1>
//                 <p className='skill-info'>Basic concepts,Authentication & Autherization
//                      learned</p>
//             </div>
//           </div>
//         </div>
      
//     </div>
//   )
// }

// export default Skill;



import React from 'react';
import "./Skill.css";
import { skills } from './SkillList';

const Skills = () => {
  return (
    <div className='p-5' id="skills">
    <div className='Container borde1'>
      <div className='Wrapper'>
        <div className='Title'>Skills</div>
        <div className='SkillsContainer'>
          {skills.map((skill) => (
            <div className='Skill' key={skill.id}>
              <h2 className='SkillTitle'>{skill.title}</h2>
              <div className='SkillList'>
                {skill.skills.map((item) => (
                  <li className='SkillItem'>
                    <h4 className='Skillicons'>{item.icons}</h4> 
                    {item.name}
                  </li>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Skills;