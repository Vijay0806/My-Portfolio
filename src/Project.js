import React from "react";
import "./Project.css";
// import Project1 from './img/violet wave Image.jpg';
import Project1 from './img/blackhdwallpaperblack2Bwallpapers2Bfor2Bxp2B6jpg.jpg';

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Latest Projects</h1>
        <p className="heading p__color">
          Design MERN Stack Projects that can help to me, 
        </p>
        <p className="heading p__color">
          for more confidence in web development.
        </p>
      </div>
       <div className="container">
           <div className="row">

           <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Capstone Project</h5>
                     <h4 className="project__text">Airbnb Clone</h4>
                     <div>
                     <a href="https://github.com/Vijay0806/Capstone-Frontend-final" className="project__btn" target={"_blank"}>Github Link</a>
                     <a href="https://airbnb-booking-vj-08-clone.netlify.app/" className="project__btn" target={"_blank"}>Deploy URL</a>
                    </div>
                     </div>
                 </div>
             </div>
              
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Webcode Project</h5>
                     <h4 className="project__text">Stack overflow Clone</h4>
                     <div>
                     <a href="https://github.com/Vijay0806/Webcode-Frontend-2" className="project__btn" target={"_blank"}>Github Link</a>
                     <a href="https://stackoverflow-clone-web.netlify.app/" className="project__btn" target={"_blank"}>Deploy URL</a>
                    </div>
                     </div>
                 </div>
             </div>
              
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Webcode Project</h5>
                     <h4 className="project__text">Pokemon API</h4>
                     <div>
                     <a href="https://github.com/Vijay0806/Web-Code-1" className="project__btn" target={"_blank"}>Github Link</a>
                     <a href="https://pokemon-webcode.netlify.app/" className="project__btn" target={"_blank"}>Deploy URL</a>
                    </div>
                     </div>
                 </div>
             </div>
             
           <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Library Management</h5>
                     <h4 className="project__text">To Design Library Books Management</h4>
                     <div>
                     <a href="https://github.com/Vijay0806/React-Task-7" className="project__btn" target={"_blank"}>Github Link</a>
                     <a href="https://library-management-react-task-7.netlify.app/" className="project__btn" target={"_blank"}>Deploy URL</a>
                    </div>
                     </div>
                 </div>
             </div>
             
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">CRUD Operations</h5>
                     <h4 className="project__text">To Design Form Using CRUD Operations</h4>
                     <div className="button_box">
                     <a href="https://github.com/Vijay0806/React-Task-4" className="project__btn" target={"_blank"}>Github Link</a>
                     <a href="https://crud-react-task-4.netlify.app/"  className="project__btn" target={"_blank"}>Deploy URL</a>
                    </div>
                     </div>
                 </div>
             </div>
         </div>
       </div>
    </div>
  );
}

export default Project;