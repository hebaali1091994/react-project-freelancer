import React from 'react'
import "./howitwork.css"
import one from "../../public/1.jpg"
import two from "../../public/2.jpg"
import three from "../../public/3.jpg"

import Header from '../../Components/header/Header'
import Footer from './../../Components/Footer';

const howitWork = () => {
    return (
        <div>
                        <div  className="cover-Image">
          <Header/>
                                <div className="container">
                                <div className="row">
                                <div className=" col-xl-5 col-md-6 col-sm-12 mt-5 text-white ">
                                <h2 className="header-title">How can freelancers help your business?
                                </h2>
                                <p className="header-paragraph">The possibilities are endless. We have expert freelancers who work in every technical, professional, and creative field imaginable.</p>
                                <a href="#" className="btn btn-primary btn-lg Color-button" tabindex="-1" role="button" > Post a Project </a>

                                </div>
                                <div className=" col-xl-5 col-md-6 col-sm-12"></div>
                                </div>
                                <div className="row g-0">
                                <div className="col-xl-3 flex-grow-1"></div>
                                <div className="col-xl-8 col-sm-12 nav-tab-new-future">
                                <nav>
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">

                                <button className="nav-link col-xl-5 col-sm-12  active  text-body" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true"> How to hire a freelancer </button>

                                <button className="nav-link col-xl-6 col-sm-12   text-body" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false"> How to earn money freelancing </button>



                                </div>
                                </nav>

                                </div>
                                <div className="col-xl-1"></div>
                                </div>
                                </div>
                        </div>
                    <div className="tab-content" id="nav-tabContent">

                    <div className="tab-pane fade show active p-3" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">

                    <div className="container">
                    <div className="mt-5">
                    <h2 className="headertitle">Choose from endless possibilities</h2>
                    <p>Get anything done, exactly how you want it. Turn that spark of an idea into reality.
                    </p>
                    <div className="row">
                    <div className="col-xl-4 col-md-6 col-sm-12">
                    <img src="../image/Any-sized-project.svg" alt=""/>
                    <h5>Any sized project</h5>
                    <p>Get any job done. From small one-off tasks to large, multi-stage projects.</p>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12">
                    <img src="../image/Flexible-payment-terms.svg" alt=""/>
                    <h5>Flexible payment terms</h5>
                    <p>Pay your freelancers a fixed price or by the hour. All secured by the Milestone Payments system.
                    </p>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12">
                    <img src="../image/Diverse-talent.svg" alt=""/>
                    <h5>Diverse talent
                    </h5>
                    <p>Choose from expert freelancers in over 1800 skill sets, from all around the globe.
                    </p>
                    </div>
                    </div>
                    </div> 
                    </div>
                    <hr/>
                    <div className="mt-5">
                    <div className="container">
                    <div className="row">
                    <div className="col-md-6 col-sm-12 how-work">
                    <img src="https://www.f-cdn.com/assets/main/en/assets/how-it-works/how-it-works.jpg" alt=""/>
                    </div>
                    <div className="col-md-6 col-sm-12 contest">
                    <h1>How does it work?</h1>
                    <div className="box">
                    <h3>1. Post a project or contest</h3>
                    <p>Simply post a project or contest for what you need done and receive competitive bids from freelancers within minutes.</p>
                    </div>
                    <div className="box">
                    <h3>2. Choose the perfect freelancer
                    </h3>
                    <p>Browse freelancer profiles. Chat in real-time. Compare proposals and select the best one. Award your project and your freelancer starts work.
                    </p>
                    </div>
                    <div className="box">
                    <h3>3. Pay when you???re satisfied
                    </h3>
                    <p>Pay securely using our Milestone Payment system. Release payments when it has been completed and you're 100% satisfied.</p>
                    </div>
                    <a href="#" className="btn btn-primary btn-lg background-master" tabindex="-1" role="button" > Post a Project </a>
                    </div>
                    </div>

                    </div>
                    <hr/>
                    </div>
                    <div className="container">
                    <div className="mt-5">
                    <div className="row">
                    <div className="col-md-6 col-sm-12">
                    <h2 className="header-title">Be in control. Keep in contact</h2>
                    <p> Use our collaboration tools to work efficiently with your freelancer. Share files, chat in real-time, monitor progress, and so much more</p>
                    <div className="row">
                    <div className=" col-md-6 col-sm-12">
                    <img src="../image/Live-chat.svg" alt=""/>
                    <h5>Diverse talent
                    </h5>
                    <p>Choose from expert freelancers in over 1800 skill sets, from all around the globe.
                    </p>
                    </div>  <div className=" col-md-6 col-sm-12">
                    <img src="../image/MobileApp.svg" alt=""/>
                    <h5>Diverse talent
                    </h5>
                    <p>Choose from expert freelancers in over 1800 skill sets, from all around the globe.
                    </p>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-6 col-sm-12 how-work">
                    <img src="https://www.f-cdn.com/assets/main/en/assets/how-it-works/be-in-control.jpg" alt=""/>
                    </div>
                    </div>
                    </div>
                    </div>
                    <hr/>
                    <div className="container">
                    <div className="mt-5">
                    <div className="row">
                    <div className="col-md-6 col-sm-12 how-work">
                    <img src="https://www.f-cdn.com/assets/main/en/assets/how-it-works/safety.jpg" alt=""/>
                    </div>
                    <div className="col-md-6 col-sm-12">
                    <h2 className="header-title">Safe and secure
                    </h2>
                    <p> Freelancer.com is a community that values your trust and safety as our number one priority. Our representatives are available 24/7 to assist you with any issues.
                    </p>
                    <div className="row">
                    <div className=" col-md-6 col-sm-12">
                    <img src="../image/7support.svg" alt=""/>
                    <h5>Pay with confidence</h5>
                    <p>Pay safely and securely in over 39 currencies through the Milestone Payments system. Only release payments when you are satisfied with the work.
                    </p>
                    </div>  <div className=" col-md-6 col-sm-12">
                    <img src="../image/Paywithconfidence.svg" alt=""/>
                    <h5>24/7 support
                    </h5>
                    <p>We're always here to help. Our representatives are available 24/7 to assist you with any issues.
                    </p>
                    </div>
                    </div>
                    </div>

                    </div>
                    </div>
                    </div>
                    <div className="waiting-for">
                    <div className="container">
                    <div className=" col-md-6 col-sm-12 mt-5 text-white ">
                    <h2 className="header-title">So what are you waiting for?

                    </h2>
                    <p className="header-paragraph">Post a project today and get bids from talented freelancers.
                    </p>
                    <a href="#" className="btn btn-primary btn-lg Color-button" tabindex="-1" role="button" > Post a Project </a>

                    </div>
                    </div>
                    </div>
                    <div className="blog">
                    <div className="container">
                    <h2 className="header-title">Still not convinced? Check out the results!


                    </h2>
                    <p className="header-paragraph">Here are just some of the things you could get done on Freelancer.com. For more completed projects, visit our Project Showcase.

                    </p>
                    <div className="row mt-5">
                    <div className="col-xl-4 col-md-6 col-sm-12 article">
                    <img className="img-size" src="../image/fristImage.png" alt=""/>
                    <h2> Logo Design.  $30 USD in 1 day. </h2>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12 article">
                    <img className="img-size" src="../image/fristImage.png" alt=""/>
                    <h2> Logo Design.  $30 USD in 1 day. </h2>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12 article">
                    <img className="img-size" src="../image/fristImage.png" alt=""/>
                    <h2> Logo Design.  $30 USD in 1 day. </h2>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12 article">
                    <img className="img-size" src="../image/fristImage.png" alt=""/>
                    <h2> Logo Design.  $30 USD in 1 day. </h2>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12 article">
                    <img className="img-size" src="../image/fristImage.png" alt=""/>
                    <h2> Logo Design.  $30 USD in 1 day. </h2>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12 article">
                    <img className="img-size" src="../image/fristImage.png" alt=""/>
                    <h2> Logo Design.  $30 USD in 1 day. </h2>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12 "></div>
                    <div className="col-xl-4 col-md-6 col-sm-12 article-button">
                    <a href="#" className="btn btn-primary btn-lg Color-button" tabindex="-1" role="button" > View More Projects  </a>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12 "></div>
                    </div>
                    </div>
                    </div>
                    <div className="Help">
                    <div className="container">
                    <div className=" col-md-6 col-sm-12 mt-5 text-white ">
                    <h2 className="header-title">Additional Help
                    </h2>
                    <p className="header-paragraph">Not sure where to start? Check out the links below:
                    </p>

                    </div>
                    <div className="row">
                    <div className=" col-md-4 col-sm-12 mt-5 text-white ">
                    <a href="#"> How to Hire with Freelancer.com </a>
                    </div>
                    <div className=" col-md-4 col-sm-12 mt-5 text-white ">
                    <a href="#"> Tips for posting projects </a>
                    </div>
                    <div className=" col-md-4 col-sm-12 mt-5 text-white "></div>
                    <div className=" col-md-4 col-sm-12 mt-5 text-white ">
                    <a href="#">  How to Select the Right Bidder  </a>
                    </div>
                    <div className=" col-md-4 col-sm-12 mt-5 text-white ">
                    <a href="#"> Milestone Payments  </a>
                    </div>
                    <div className=" col-md-4 col-sm-12 mt-5 text-white "></div>
                    </div>
                    </div>
                    </div>
                    </div>

                    <div className="tab-pane fade p-3" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">

                    <div className="mt-5">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 how-work">
                            <img src="https://www.f-cdn.com/assets/main/en/assets/how-it-works/get-started.jpg" alt=""/>
                        </div>
                        <div className="col-md-6 col-sm-12 contest">
                            <h1>How do I get started?</h1>
                            <div className="box">
                            <h3>1. Complete your profile</h3>
                            <p>Select your skills and expertise
                                Upload a professional profile photo
                                Go through the Verification Center checklist</p>
                        </div>
                        <div className="box">
                            <h3>2. Browse jobs that suit you</h3>
                            <p>We have jobs available for all skills. Maximize your job opportunities by optimizing your filters. Save your search and get alerted when relevant jobs are available.
                            </p>
                        </div>
                        <div className="box">
                            <h3>3. Write your best bid
                            </h3>
                            <p>Put your best foot forward and write the best pitch possible. Read the project and let the clients know you understand their brief. Tell them why you're the best person for this job. Writing a new brief for each project is more effective than using the same one!
                            </p>
                        </div>
                        <div className="box">
                            <h3>4. Get awarded and earn

                            </h3>
                            <p>Get ready to work once you get hired. Deliver high quality work and earn the agreed amount.
                            </p>
                        </div>
                        <a href="#" className="btn btn-primary btn-lg background-master" tabindex="-1" role="button" >  Browse Jobs  </a>
                        </div>
                    </div>

                    </div>


                    </div>
                    <hr/>
                    <div className="container">
                    <div className="mt-5">
                    <div className="row">
                    <div className="col-md-6 col-sm-12">
                    <h2 className="header-title">Manage Your Career</h2>
                    <p> Stay up to date on the Freelancer.com marketplace and keep in touch with your clients.
                    </p>
                    <div className="row">
                    <div className=" col-md-6 col-sm-12">
                    <img src="../image/Collaborate.svg" alt=""/>

                    <p>Collaborate with your clients on the go and get alerted on the latest jobs with our mobile app and desktop platform.

                    </p>
                    </div> 
                    <div className=" col-md-6 col-sm-12">
                    <img src="../image/JobAlerts.svg" alt=""/>

                    <p>Our job alerts system will keep you updated once new projects that fit your skills and expertise become available. Bid away!

                    </p>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-6 col-sm-12 how-work">
                    <img src="https://www.f-cdn.com/assets/main/en/assets/how-it-works/manage-your-career.jpg" alt=""/>
                    </div>
                    </div>
                    </div>
                    </div>
                    <hr/>

                    <div className="container">
                    <div className="mt-5">
                    <div className="row">
                    <div className="col-md-6 col-sm-12 how-work">
                    <img src="https://www.f-cdn.com/assets/main/en/assets/how-it-works/safety.jpg" alt=""/>
                    </div>
                    <div className="col-md-6 col-sm-12">
                    <h2 className="header-title">Safe and secure
                    </h2>
                    <p> Freelancer.com is a community that values your trust and safety as our number one priority. Our representatives are available 24/7 to assist you with any issues.
                    </p>
                    <div className="row">
                    <div className=" col-md-6 col-sm-12">
                    <img src="../image/7support.svg" alt=""/>
                    <h5>Pay with confidence</h5>
                    <p>Pay safely and securely in over 39 currencies through the Milestone Payments system. Only release payments when you are satisfied with the work.
                    </p>
                    </div>  <div className=" col-md-6 col-sm-12">
                    <img src={two} alt=""/>
                    <h5>24/7 support
                    </h5>
                    <p>We're always here to help. Our representatives are available 24/7 to assist you with any issues.
                    </p>
                    </div>
                    </div>
                    </div>

                    </div>
                    </div>
                    </div>
                    <div className="waiting-for">
                    <div className="container">
                    <div className=" col-md-6 col-sm-12 mt-5 text-white ">
                    <h2 className="header-title">So what are you waiting for?

                    </h2>
                    <p className="header-paragraph">Post a project today and get bids from talented freelancers.
                    </p>
                    <a href="#" className="btn btn-primary btn-lg Color-button" tabindex="-1" role="button" > Post a Project </a>

                    </div>
                    </div>
                    </div>
                    <div className="blog">
                    <div className="container">
                    <h2 className="header-title">Still not convinced? Check out the results!


                    </h2>
                    <p className="header-paragraph">Here are just some of the things you could get done on Freelancer.com. For more completed projects, visit our Project Showcase.

                    </p>
                    <div className="row mt-5">
                    <div className="col-xl-4 col-md-6 col-sm-12 article">
                    <img className="img-size" src="../image/testimonial-federico.jpg" alt=""/>
                    <q>"I honestly do not know where I would be if I hadn't discovered Freelancer when I did. It has formed the backbone of support for me over recent years."
                    </q>
                    <p>Elizabeth March</p>
                    <p>Copywriter</p>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12 article">
                    <img className="img-size" src="../image/testimonial-federico.jpg" alt=""/>
                    <q>"I honestly do not know where I would be if I hadn't discovered Freelancer when I did. It has formed the backbone of support for me over recent years."
                    </q>
                    <p>Elizabeth March</p>
                    <p>Copywriter</p>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12 article">
                    <img className="img-size" src="../image/testimonial-federico.jpg" alt=""/>
                    <q>"I honestly do not know where I would be if I hadn't discovered Freelancer when I did. It has formed the backbone of support for me over recent years."
                    </q>
                    <p>Elizabeth March</p>
                    <p>Copywriter</p>
                    </div>

                    <div className="col-xl-4 col-md-6 col-sm-12 "></div>
                    </div>
                    </div>
                    </div>
                    <div className="Help">
                    <div className="container">
                    <div className=" col-md-6 col-sm-12 mt-5 text-white ">
                    <h2 className="header-title">Additional Help
                    </h2>
                    <p className="header-paragraph">Not sure where to start? Check out the links below:
                    </p>

                    </div>
                    <div className="row">
                    <div className=" col-md-4 col-sm-12 mt-5 text-white ">
                    <a href="#"> How to Hire with Freelancer.com </a>
                    </div>
                    <div className=" col-md-4 col-sm-12 mt-5 text-white ">
                    <a href="#"> Tips for posting projects </a>
                    </div>
                    <div className=" col-md-4 col-sm-12 mt-5 text-white "></div>
                    <div className=" col-md-4 col-sm-12 mt-5 text-white ">
                    <a href="#">  How to Select the Right Bidder  </a>
                    </div>
                    <div className=" col-md-4 col-sm-12 mt-5 text-white ">
                    <a href="#"> Milestone Payments  </a>
                    </div>
                    <div className=" col-md-4 col-sm-12 mt-5 text-white "></div>
                    </div>
                    </div>
                    </div>

                    </div>
                    <Footer/>
                    </div>
        </div>
    )
}

export default howitWork
