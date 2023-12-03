import React from "react";
import "./Project.css";
// import Project1 from './img/violet wave Image.jpg';
import Project1 from './img/blackhdwallpaperblack2Bwallpapers2Bfor2Bxp2B6jpg.jpg';

function Project() {
    return (
        <div className="project component__space" id="Portfolio">
            <div className="heading">
                <h1 className="heading">Projects</h1>
                <p className="heading p__color">
                    Here's some of my projects that I have worked on.,
                </p>
                <p className="heading p__color">
                    that can help to me,for more confidence in web development.
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
                                <h4 className="project__text">Airbnb Clone</h4>
                                <h6 className="project__text">Description</h6>
                                <p className="project__text">A replica of the Airbnb platform, allowing users to easily create accounts, discover accommodations through search, and list their properties for rent, offering a seamless experience for both hosts and guests.</p>
                                <div className="demo_details">
                                    <h6 className="demo_details">Credential</h6>
                                    <p className="demo_details">username :</p>
                                    <p className="demo_details">password :</p>
                                </div>
                                {/* <h5 className="project__text">Capstone Project</h5> */}
                                {/* <h4 className="project__text">Airbnb Clone</h4> */}
                                {/* <h6>Crafted a dynamic Airbnb clone, seamlessly connecting travelers with unique accommodations through a user-friendly platform.</h6> */}
                                <div>
                                    <a href="https://github.com/Vijay0806/Capstone-Frontend-final" className="project__btn" target={"_blank"}>Frontend Link</a>
                                    <a href="https://github.com/Vijay0806/Capstone-Backend" className="project__btn" target={"_blank"}>Backend Link</a>
                                    <a href="https://airbnb-booking-vj-08-clone.netlify.app/" className="project__btn" target={"_blank"}>Live</a>
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
                                <h4 className="project__text">Stack overflow Clone</h4>
                                <h6 className="project__text">Description</h6>
                                <p className="project__text">This is an clone of StackOverFlow website. Where we can create account,see solution by search, post our question in public for which we need solution and we can post our solution to the question.</p>
                                <div className="demo_details">
                                    <h6 className="demo_details">Credential</h6>
                                    <p className="demo_details">username :</p>
                                    <p className="demo_details">password :</p>
                                </div>
                                <div>
                                    <a href="https://github.com/Vijay0806/Webcode-Frontend-2" className="project__btn" target={"_blank"}>Frontend Link</a>
                                    <a href="https://github.com/Vijay0806/Webcode-Backend-2" className="project__btn" target={"_blank"}>Backend Link</a>
                                    <a href="https://stackoverflow-clone-web.netlify.app/" className="project__btn" target={"_blank"}>Live</a>
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
                                <h4 className="project__text">Movie App</h4>
                                <h6 className="project__text">Description</h6>
                                <p className="project__text">Discover and watch your favorite movies effortlessly with our user-friendly app.Where we can create account,Enjoy endless entertainment tailored just for you!</p>
                                <div className="demo_details">
                                    <h6 className="demo_details">Credential</h6>
                                    <p className="demo_details">username :</p>
                                    <p className="demo_details">password :</p>
                                </div>
                                <div>
                                    <a href="https://github.com/Vijay0806/Movie-Frontend" className="project__btn" target={"_blank"}>Frontend Link</a>
                                    <a href="https://github.com/Vijay0806/Movie_Backend" className="project__btn" target={"_blank"}>Backend Link</a>
                                    <a href="https://movie-frontend-vj08.netlify.app/" className="project__btn" target={"_blank"}>Live</a>
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
                                <h4 className="project__text">Library Management</h4>
                                <h6 className="project__text">Description</h6>
                                <p className="project__text">Where we can create account,Facilitate easy book tracking and borrower management with Library Management, ensuring a well-organized and accessible library experience for users.</p>
                                <div className="demo_details">
                                    <h6 className="demo_details">Credential</h6>
                                    <p className="demo_details">username :</p>
                                    <p className="demo_details">password :</p>
                                </div>
                                <div>
                                    <a href="https://github.com/Vijay0806/React-frontend-7" className="project__btn" target={"_blank"}>Frontend Link</a>
                                    <a href="https://github.com/Vijay0806/React--Backend-1" className="project__btn" target={"_blank"}>Backend Link</a>
                                    <a href="https://react-fsd-library-07.netlify.app/" className="project__btn" target={"_blank"}>Live</a>
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
                                <h4 className="project__text">Reset PassWord with auth</h4>
                                <h6 className="project__text">Description</h6>
                                <p className="project__text">This Application allows the user to register with mail verification, login, reset password with mail verification</p>
                                <div className="demo_details">
                                    <h6 className="demo_details">Credential</h6>
                                    <p className="demo_details">username :</p>
                                    <p className="demo_details">password :</p>
                                </div>
                                <div className="button_box">
                                    <a href="https://github.com/Vijay0806/Node-Task-5-Frontend" className="project__btn" target={"_blank"}>Frontend Link</a>
                                    <a href="https://github.com/Vijay0806/Node-Task-5-Backend" className="project__btn" target={"_blank"}>Backend Link</a>
                                    <a href="https://password-reset-frontend-vj-08.netlify.app" className="project__btn" target={"_blank"}>Live</a>
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