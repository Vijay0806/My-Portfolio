import React from 'react';
import './Home.css';


function Home() {
  return (
    <div className='home'>
     <div className='home__bg'>
        <div className='header d_flex align__items__center pxy__30'>
         <div className='logo'>
            <img src="" alt=""/>
         </div>
         <div className='navigation pxy__30'>
          <ul className='navbar d__flex'>
           <a href="#Home"><li className='nav__items mx__15'>Home</li></a>
           <a href="#About"><li className='nav__items mx__15'>About</li></a>
           {/* <a href="#Services"><li className='nav__items mx__15'>Services</li></a> */}
           <a href="#Skills"><li className='nav__items mx__15'>Skills</li></a>
           <a href="#Portfolio"><li className='nav__items mx__15'>Projects</li></a>
           <a href="#exp"><li className='nav__items mx__15'>Experience</li></a>
           <a href="#Contact"><li className='nav__items mx__15'>Contact</li></a>

          </ul>
         </div>
        </div>
        {/* HOME CONTENT*/}
        <div className='container'>
           <div className='home__content'>
             <div className='home__meta'>
               <h1 className='home__text pz__10'>
                WELCOME TO MY PAGE
               </h1>
               <h2 className='home__text pz__10'>
               Hi,
               </h2>
               <h2 className='home__text pz__10 animate-color-change animate-random-color animate-random-animation'>
               I'm 𝕍𝕚𝕛𝕒𝕪,
               </h2>
               <style>
        {`
          @keyframes colorChange {
            0% { color: red; }
            25% { color: blue; }
            50% { color: green; }
            75% { color: orange; }
            100% { color: purple; }
          }

          @keyframes randomAnimation {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateY(10px); }
            50% { transform: translateX(-10px); }
            75% { transform: translateY(-10px); }
            .random-font {
              font-family: 'Arial', sans-serif;
              /* Add more font style attributes here */
            } 
        `}
      </style>
               <h3 className='home__text sweet pz__10 animate-color-change animate-random-color animate-random-animation'>
               𝕎𝕖𝕓 𝔻𝕖𝕧𝕖𝕝𝕠𝕡𝕖𝕣,
               </h3>
               <h4 className='home__text pz__10'>
               Based in India.
               </h4>
             </div>
           </div>
        </div>
     </div>
    </div>
  )
}

export default Home
