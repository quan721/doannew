import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faNodeJs  } from '@fortawesome/free-brands-svg-icons';



 function Body() {

  return (
    <div id="page-top">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none">Clarence Taylor</span>
          <span className="d-none d-lg-block">
            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={require('./img/Avatar.jpg')} alt="" />
          </span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Education</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#interests">Interests</a></li>
            <li><button className="DarkModeToggle" id='DarkModeToggle'><img src={require('./img/bongden.jpg')} alt=""  width="30" height="30"/>
      </button>
      </li>
          </ul>
        </div>
      </nav>
      <div className="container-fluid p-0">
      <section className="resume-section" id="about">
            <div className="resume-section-content">
                <h1 className="mb-0">
                    Quan
                    <span className="text-primary">Be Minh</span>
                </h1>
                <div className="subheading mb-5">
                    200 Le Van Viet · TP.HCM · (08) 353-898-758 ·
                    <a href="mailto:name@email.com">bequan806@gmail.com</a>
                </div>
                <p className="lead mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for
                    high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to
                    further the overall value proposition.</p>
                    <div className="social-icons">
                    <a className="social-icon" href="https://github.com/quan721"> <FontAwesomeIcon icon={faGithub} /></a>
                    <a className="social-icon" href="https://twitter.com/QuanA4424"> <FontAwesomeIcon icon={faTwitter} /></a>
                    <a className="social-icon" href="https://www.facebook.com/puan.minhpuan.7"> <FontAwesomeIcon icon={faFacebook} /></a>
    </div>
            </div>
        </section>
        <hr className="m-0" />
        <section className="resume-section" id="experience">
            <div className="resume-section-content">
                <h2 className="mb-5">Experience</h2>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Web Developer</h3>
                        <div className="subheading mb-3">Intelitec Solutions</div>
                        <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.
                            Override the digital divide with additional clickthroughs from DevOps. Nanotechnology
                            immersion along the information highway will close the loop on focusing solely on the bottom
                            line.</p>
                    </div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-3">Apprentice web designer</h3>
                        <div className="subheading mb-3">Shout! Media Productions</div>
                        <p>Podcasting operational change management inside of workflows to establish a framework. Taking
                            seamless key performance indicators offline to maximise the long tail. Keeping your eye on
                            the ball while performing a deep dive on the start-up mentality to derive convergence on
                            cross-platform integration.</p>
                    </div>
                </div>
            </div>
        </section>
        <hr className="m-0" />
        <section className="resume-section" id="education">
            <div className="resume-section-content">
                <h2 className="mb-5">Education</h2>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Ispace Cyber Security College</h3>
                    </div>
                    <div className="flex-shrink-0"><span class="text-primary">August 2022 - Present</span></div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Dong Phu High School</h3>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">August 2019 - May 2022</span></div>
                </div>
            </div>
        </section>
        <hr class="m-0" />
        <section className="resume-section" id="skills">
            <div className="resume-section-content">
                <h2 className="mb-5">Skills</h2>
                <div className="subheading mb-3">Programming Languages & Tools</div>
                <ul className="list-inline dev-icons">
      <li className="list-inline-item"><FontAwesomeIcon icon={faHtml5} /></li>
      <li className="list-inline-item"><FontAwesomeIcon icon={faCss3Alt} /></li>
      <li className="list-inline-item"><FontAwesomeIcon icon={faJsSquare} /></li>
      <li className="list-inline-item"><FontAwesomeIcon icon={faReact} /></li>
      <li className="list-inline-item"><FontAwesomeIcon icon={faNodeJs} /></li>
                </ul>
            </div>    
        </section>
        <hr className="m-0" />
        <section className="resume-section" id="interests">
            <div className="resume-section-content">
                <h2 className="mb-5">Interests</h2>
                <p>esides being a web developer, I like to spend most of my time
                    to learn more about new technologies. In addition, I am also passionate about some sports to improve
                    my health.
                    Sometimes it also helps me have more inspiration at work.</p>
                <p className="mb-0">When forced to stay indoors, I watch some science fiction and fantasy movies and TV
                    shows, and I'm an aspiring chef.</p>
            </div>
        </section>
        <hr class="m-0" />
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
    <script src="js/scripts.js"></script>
    </div>
  );
  }
export default Body;