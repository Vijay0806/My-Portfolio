import React from "react";
import "./About.css";
import aboutImg from "./img/002.jpg";

function About() {
  //  Up To Top Btn
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
       upToTop.classList.toggle("active", window.scrollY > 0)
    });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
              I am Self-motivated, highly passionate and quickly adaptable person looking for an opportunity to work in a challenging organization 
              where I can learn new skills, expand my knowledge and to work towards the growth of the organization to the best of my abilities.
              </p>
              <p className="about__text p__color">
                Now recently Complete MERN stack developer Course in 
                Guvi and get more Knowledge about the programming.
              </p>
              <p className="about__text p__color">
               And now I'm looking for a job to enhance my skills.
                </p>
              <p className="about__text p__color">
                 Quote:<span>
                 "𝕶𝖎𝖑𝖑 𝖙𝖍𝖊𝖒 𝖜𝖎𝖙𝖍 𝖞𝖔𝖚𝖗 𝖘𝖚𝖈𝖈𝖊𝖘𝖘 𝖆𝖓𝖉 𝖇𝖚𝖗𝖞 𝖙𝖍𝖊𝖒 𝖜𝖎𝖙𝖍 𝖞𝖔𝖚𝖗 𝖘𝖒𝖎𝖑𝖊 😇". 
                </span>
              </p>
              <div className="about__button d__flex align__items__center">
              
              <a href="https://drive.google.com/file/d/1CSAIVCleSHsu6VQKpFidsPfNWUDw6ZGV/view?usp=sharing" target={"_blank"}>
                {/* <a href="https://drive.google.com/file/d/1Ldu2uhtLPMv02HtTwNsj0T5zd19_Y-OG/view?usp=sharing" target={"_blank"}> */}
                  <button className="about btn pointer" >Open Cv</button>
                </a>
                <a href="#Contact">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}

export default About;