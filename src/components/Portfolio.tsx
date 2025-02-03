import React from 'react';
import './style.css';
import IonIcon from '@reacticons/ionicons';

const Portfolio: React.FC = () => {
  return (
    <>
        <nav className="navbar navbar-expand-sm navbar-light mb-1">
        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="#">logo or name here</a>
            </li>
        </ul>
    </nav>

    <div className="container">
        <section className="landing">
            <div className="row vertical-center">
                <div className="col-lg-8 text-left pb-5">
                    <h1 className="display-1">Full Name</h1>
                    <p className="lead pl-2">Position or job profile</p>
                </div>
                <div className="col-lg-4 text-center my-auto pb-5 rounded-circle"><img className="img-fluid rounded-circle"
                        src="https://picsum.photos/512"></img></div>
            </div>
        </section>

        <section className="mt-5 mb-5">
                    <h4 className="display-4">A little about me,</h4>
                    <div className="row">
                        <div className="col-lg-6 wrap text-left">
                            <div className="about-desc">
                                <h1 className="bold-text">About</h1>
                                <div className="pt-5">
                                    <h2 className="mb-5">Hello!</h2>
                                    <p>Most bee jobs are small ones. But bees know that every small job, if it's done well means
                                        a lot. But choose carefully because you'll stay in the job you pick for the rest of your
                                        life.
                                    </p>
                                    <ul className="social-links list-unstyled mt-4">
                                        <li><a href="#">
                                            <IonIcon name="mail-outline" />
                                        </a></li>
                                        <li><a href="#">
                                            <IonIcon name="logo-github" />
        
                                        </a></li>
                                        <li><a href="#">
                                            <IonIcon name="logo-linkedin" />
                                        </a></li>
                                        <li><a href="#">
                                            <IonIcon name="logo-twitter" />
                                        </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wrap align-content-center">
                            <div className="row mt-5 flex-column">
                                <div className="col-md-8">
                                    <h2 className="mb-4">My Skills</h2>
                                </div>
                                <div className="col-md-6 mt-3">
                                    <div className="progress-wrap">
                                        <h4>Skill 1</h4>
                                        <div className="progress progress-style">
                                            <div
                                                className="progress-bar color-1"
                                                role="progressbar"
                                                aria-valuenow={75}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                                style={{ width: '85%' }}
                                            >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mt-3">
                                    <div className="progress-wrap">
                                        <h4>Skill 2</h4>
                                        <div className="progress progress-style">
                                            <div
                                                className="progress-bar color-1"
                                                role="progressbar"
                                                aria-valuenow={60}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                                style={{ width: '85%' }}
                                            >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mt-3">
                                    <div className="progress-wrap">
                                        <h4>Skill 3</h4>
                                        <div className="progress progress-style">
                                            <div
                                                className="progress-bar color-1"
                                                role="progressbar"
                                                aria-valuenow={85}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                                style={{ width: '85%' }}
                                            >
                                            </div>
        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        <section className="interests pt-5 pb-5">

            <h1 className="display-4">Tech I'm familiar with</h1>
                <h1 className="bold-text bg-text">Tech Stack</h1>

                <div className="row pt-5">
                    <div className="col-lg-3 col-md-4">
                        <div className="icon-box">
                                            <IonIcon name="logo-html5" />
                            <h3>Add</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                        <div className="icon-box">
                                            <IonIcon name="logo-css3" />
                            <h3>your</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                        <div className="icon-box">
                                            <IonIcon name="logo-javascript" />
                            <h3>tech</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                        <div className="icon-box">
                                            <IonIcon name="logo-react" />
                            <h3>stack here</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box">
                                            <IonIcon name="logo-android" />
                            <h3>Agent P</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box">
                                            <IonIcon name="logo-python" />
                            <h3>Doobie</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box">
                                            <IonIcon name="git-branch-outline" />
                            <h3>Doobie</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box">
                                            <IonIcon name="logo-github" />
                            <h3>Dooba</h3>
                        </div>
                    </div>
                </div>

        </section>
        <section>
            <h1 className="display-4 mt-5">Experience</h1>
                <h1 className="bold-text bg-text">Profile</h1>
                <div className="row d-flex">
                    <div className="col-md-10">
                        <h4 className="dmb-4 mt-2 profile-text">I'm a Job Profile from Location. Bees have 100 percent
                            employment, but we do jobs like taking the crud out.</h4>

                        <div className="mt-3">
                            <div className="py-4">
                                <div className="desc">
                                    <h4>UX & Interaction Designer</h4>
                                    <p>The Bee Company</p>
                                </div>
                                <div>
                                    <p>2020 - 2020</p>
                                </div>
                            </div>

                            <div className="py-4">
                                <div className="desc">
                                    <h4>jobPosition</h4>
                                    <p>company</p>
                                </div>
                                <div>
                                    <p>startYear - endYear</p>
                                </div>
                            </div>

                            <div className="py-4">
                                <div className="desc">
                                    <h4>jobPosition</h4>
                                    <p>company</p>
                                </div>
                                <div>
                                    <p>startYear - endYear</p>
                                </div>
                            </div>
                        </div>



                        <h1 className="display-4 mt-5">Education</h1>
                            <h1 className="bold-text bg-text">Academics</h1>
                            <div className="py-4">
                                <div className="desc">
                                    <h4>Master Degree in Computer Science</h4>
                                    <p>Harvard University</p>
                                </div>
                                <div>
                                    <p>2013 - 2014</p>
                                </div>
                            </div>

                            <div className="py-4">
                                <div className="desc">
                                    <h4>degree</h4>
                                    <p>schoolName</p>
                                </div>
                                <div>
                                    <p>startYear - endYear</p>
                                </div>
                            </div>

                            <div className="py-4">
                                <div className="desc">
                                    <h4>degree</h4>
                                    <p>schoolName</p>
                                </div>
                                <div>
                                    <p>startYear - endYear</p>
                                </div>
                            </div>
                    </div>
                </div>
        </section>
        <section>
            <h1 className="display-4 mt-5">Some of my blogs</h1>
                <h1 className="bold-text bg-text">Blogs</h1>
                <div className="row mt-5 mb-5">
                    <div className="col-md-4">
                        <div className="blog-entry">
                            <a href="#">
                                <img className="img-fluid" src="https://placeimg.com/640/640/any"></img>
                            </a>
                            <div className="text p-4 d-block">
                                <div className="meta mb-3">
                                    <div>July 22, 2020</div>
                                </div>
                                <h3 className="heading"><a className="link" href="#">You like jazz?</a></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="blog-entry">
                            <a href="#">
                                <img className="img-fluid" src="https://placeimg.com/640/640/any"></img>
                            </a>
                            <div className="text p-4">
                                <div className="meta mb-3">
                                    <div>July 22, 2020</div>
                                </div>
                                <h3 className="heading"><a className="link" href="#">You like jazz?</a></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="blog-entry">
                            <a href="#">
                                <img className="img-fluid" src="https://placeimg.com/640/640/any"></img>
                            </a>
                            <div className="text p-4">
                                <div className="meta mb-3">
                                    <div>July 22, 2020</div>
                                </div>
                                <h3 className="heading"><a className="link" href="#">You like jazz?</a></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="blog-entry">
                            <a href="#">
                                <img className="img-fluid" src="https://placeimg.com/640/640/any"></img>
                            </a>
                            <div className="text p-4 d-block">
                                <div className="meta mb-3">
                                    <div>July 22, 2020</div>
                                </div>
                                <h3 className="heading"><a className="link" href="#">You like jazz?</a></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="blog-entry">
                            <a href="#">
                                <img className="img-fluid" src="https://placeimg.com/640/640/any"></img>
                            </a>
                            <div className="text p-4">
                                <div className="meta mb-3">
                                    <div>July 22, 2020</div>
                                </div>
                                <h3 className="heading"><a className="link" href="#">You like jazz?</a></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="blog-entry">
                            <a href="#">
                                <img className="img-fluid" src="https://placeimg.com/640/640/any"></img>
                            </a>
                            <div className="text p-4">
                                <div className="meta mb-3">
                                    <div>July 22, 2020</div>
                                </div>
                                <h3 className="heading"><a className="link" href="#">You like jazz?</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
        <section>
            <h1 className="display-4 mt-5">Let's Talk</h1>
            <h1 className="bold-text bg-text">Contact</h1>
                    <div className="text-left">
                            <div className="pt-5">
                                <h2 className="mb-5">Have a great product and need a job profile or just want to have a chat? 
                                <br/>
                                My inbox is always open!</h2>
                                <ul className="social-links list-unstyled mt-4">
                                                                <li><a href="#">
                                                                    <IonIcon name="mail-outline" />
                                                                </a></li>
                                                                <li><a href="#">
                                                                    <IonIcon name="logo-github" />
                                
                                                                </a></li>
                                                                <li><a href="#">
                                                                    <IonIcon name="logo-linkedin" />
                                                                </a></li>
                                                                <li><a href="#">
                                                                    <IonIcon name="logo-twitter" />
                                                                </a></li>
                                                            </ul>
                            </div>
                    </div>
        </section>
    </div>

    </>
  );
};

export default Portfolio;
