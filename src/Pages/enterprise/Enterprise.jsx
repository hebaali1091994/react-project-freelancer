import React from "react";
import Footer from '../../Components/Footer'
import { Link } from "react-router-dom";
import './enterprise.css'
const Enterprise= () => {

    return (
 
        <div>
          <div className="imgbig1 overflow-hidden">

            <nav
              className="navbar navbar-expand-lg navbar-dark "
           
            >
              <div className="container " style={{ width: "100%" }}>
                <a className="navbar-brand ">
                  <img
                    src="https://www.f-cdn.com/assets/img/fl-logo--light-091665c1.svg"
                    style={{ width: "170px" }}
                  />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse d-flex justify-content-between align-items-center"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  
                  </ul>
                  <ul  className="navbar-nav me-auto mb-2 mb-lg-0" style={{ listStyle: "none",display:"flex",justifyContent:"space-between" }}>
                    <li >
                    <Link className="text-white p-2" to="/Login">  Iog In</Link>

                    </li>
                    <li >
                  <Link  className="text-white p-4"to="/SignUp">  Sign Up</Link>

                    </li>
                    <li >
                    <Link   to="/Contactus"
                className="btn text-white"
                style={{
                  background: 'rgb(242,0,145)',
                  width: '110%',
                  height: '40px',
                
                }}
              >
                Request a Demo
              </Link>

                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            


            <div style={{ width: '30%', margin: '20% 0 0 10%' }}>
              <h1 className="bolder my-4">Freelancer Enterprise</h1>
              <p>
                Enables large organizations to accelerate their growth for less.
                Access a global workforce of over 42 million freelancers to
                drive your organization's innovation at scale, faster, and for a
                fraction of the price.
              </p>
              <Link
              to='/Contactus'
                className="btn text-white"
                style={{
                  background: 'rgb(242,0,145)',
                  width: '45%',
                  height: '50px',
                }}
              >
                Request a Demo
              </Link>
            </div>
          </div>
          {/* end section1 */}
          <div className="container my-5">
            <div className="row">
              <div className="col-md-4 text-center">
                <img src="https://www.f-cdn.com/assets/main/en/assets/enterprise/landing-page/global-icon-v2.svg" />
                <h4 className="my-5">Global Workforce</h4>
                <p>
                  Ten-time Webby award-winning Freelancer.com (ASX:FLN) is the
                  world's largest freelancing and crowdsourcing platform with
                  over 42 million users from over 247 countries, regions and
                  territories, in 34 languages and 39 currencies. No other
                  freelance marketplace is as global as Freelancer.com.
                </p>
              </div>
              <div className="col-md-4 text-center">
                <img src="https://www.f-cdn.com/assets/main/en/assets/enterprise/landing-page/highly-skilled-icon-v2.svg" />
                <h4 className="my-5">Global Workforce</h4>
                <p>
                  Ten-time Webby award-winning Freelancer.com (ASX:FLN) is the
                  world's largest freelancing and crowdsourcing platform with
                  over 42 million users from over 247 countries, regions and
                  territories, in 34 languages and 39 currencies. No other
                  freelance marketplace is as global as Freelancer.com.
                </p>
              </div>
              <div className="col-md-4 text-center">
                <img src="https://www.f-cdn.com/assets/main/en/assets/enterprise/landing-page/nofees-icon-v2.svg" />
                <h4 className="my-5">Global Workforce</h4>
                <p>
                  Ten-time Webby award-winning Freelancer.com (ASX:FLN) is the
                  world's largest freelancing and crowdsourcing platform with
                  over 42 million users from over 247 countries, regions and
                  territories, in 34 languages and 39 currencies. No other
                  freelance marketplace is as global as Freelancer.com.
                </p>
              </div>
            </div>
          </div>
          {/* end section2 */}
          <div style={{ background: 'rgb(222,222,222)' }}>
            <div className="container">
              <div className="row">
                <div className="col-5 text-center">
                  <img
                    className="my-5 w-100"
                    src="https://www.f-cdn.com/assets/main/en/assets/enterprise/landing-page/organization-unlimited-thumb.png"
                  />
                  <h3>Organization Unlimited</h3>
                  <span style={{ fontSize: '14px' }}>
                    Watch our presentation on the future of work and learn how
                    the world's best companies have used Freelancer.com to solve
                    their biggest challenges.
                  </span>
                  <br />
                  <a
                    className="btn  my-3 text-white bold"
                    style={{ background: 'rgb(242,0,145)' }}
                  >
                    View Vedio
                  </a>
                </div>
                <div className="col-1"></div>
                <div className="col-5 text-center">
                  <img
                    className="my-5 w-100"
                    src="https://www.f-cdn.com/assets/main/en/assets/enterprise/landing-page/nasa-whitepaper-thumb.png"
                  />
                  <h3>NASA | Harvard Whitepaper</h3>
                  <span style={{ fontSize: '14px' }}>
                    Watch our presentation on the future of work and learn how
                    the world's best companies have used Freelancer.com to solve
                    their biggest challenges.
                  </span>
                  <br />
                  <a
                    className="btn  my-3 text-white bold"
                    style={{ background: 'rgb(242,0,145)' }}
                  >
                    View Whitepaper
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* end section3 */}
          <div>
            <div className="container">
              <div className="row my-5">
                <div className="col-5 text-center">
                  <img
                    className=" w-100 h-100"
                    src="https://www.f-cdn.com/assets/main/en/assets/enterprise/landing-page/covid-blade-image.jpg"
                  />
                </div>

                <div className="col-1"></div>
                <div className="col-5 " style={{ textAlign: 'left' }}>
                  <h6>FREELANCER EXCLUSIVE</h6>
                  <h4
                    className="my-3"
                    style={{
                      color: 'rgb(242,0,145)',
                      fontSize: '40px',
                      fontWeight: '400',
                    }}
                  >
                    Covid-19 &<br /> Workforce
                    <br /> Efficiency
                  </h4>
                  <p>
                    Covid-19 is creating shifting demands within your
                    organization. Rapidly deploy your in-house talent to the
                    most urgent and critical areas of your business to grow
                    faster. Our AI-driven matchmaking algorithm and resource
                    management . Smart companies are seeing opportunities in
                    this downturn. Freelancer Enterprise can power you to be
                    agile and respond to change.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* end section4 */}
          <div className="my-5" style={{ background: 'rgb(31,40,54)' }}>
            <div
              className="text-center py-5"
              style={{ width: '60%', margin: 'auto' }}
            >
              <h6 className="text-white">FREELANCER EXCLUSIVE</h6>
              <h4
                className="my-3"
                style={{
                  color: 'rgb(242,0,145)',
                  fontSize: '50px',
                  fontWeight: '400',
                }}
              >
                Whatever skills you need, we can assemble the top 1% in your own
                Private Freelancer Cloud
              </h4>
              <p className="text-white bold">
                Whether you need a team of management consultants, machine
                learning experts or field service engineers in your local area,
                choose from freelancers with over 1,600 different skill sets who
                have been pre-vetted and approved according to success criteria
                defined by you.
              </p>
              <a
                className="btn  my-3 text-white bold"
                style={{ background: 'rgb(242,0,145)' }}
              >
                View Whitepaper
              </a>
            </div>
          </div>
          {/* end section5 */}
          <div>
            <div className="container">
              <div className="row my-5">
                <div className="col-5 " style={{ textAlign: 'left' }}>
                  <h6>FREELANCER EXCLUSIVE</h6>
                  <h4
                    className="my-3"
                    style={{
                      color: 'rgb(242,0,145)',
                      fontSize: '40px',
                      fontWeight: '400',
                    }}
                  >
                    Covid-19 &<br /> Workforce
                    <br /> Efficiency
                  </h4>
                  <p>
                    Covid-19 is creating shifting demands within your
                    organization. Rapidly deploy your in-house talent to the
                    most urgent and critical areas of your business to grow
                    faster. Our AI-driven matchmaking algorithm and resource
                    management . Smart companies are seeing opportunities in
                    this downturn. Freelancer Enterprise can power you to be
                    agile and respond to change.
                  </p>
                </div>
                <div className="col-1"></div>
                <div className="col-5 mb-4 text-center">
                  <img
                    className=" w-100 h-100"
                    src="https://www.f-cdn.com/assets/main/en/assets/enterprise/landing-page/project-managers-image.png"
                  />
                </div>
                <div className="col-5 text-center">
                  <img
                    className=" w-100 h-100"
                    src="https://www.f-cdn.com/assets/main/en/assets/enterprise/landing-page/compliance-image.png"
                  />
                </div>

                <div className="col-1"></div>
                <div className="col-5 " style={{ textAlign: 'left' }}>
                  <h6>FREELANCER EXCLUSIVE</h6>
                  <h4
                    className="my-3"
                    style={{
                      color: 'rgb(242,0,145)',
                      fontSize: '40px',
                      fontWeight: '400',
                    }}
                  >
                    Covid-19 &<br /> Workforce
                    <br /> Efficiency
                  </h4>
                  <p>
                    Covid-19 is creating shifting demands within your
                    organization. Rapidly deploy your in-house talent to the
                    most urgent and critical areas of your business to grow
                    faster. Our AI-driven matchmaking algorithm and resource
                    management . Smart companies are seeing opportunities in
                    this downturn. Freelancer Enterprise can power you to be
                    agile and respond to change.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* end section6 */}
          <div className=" imgbig imgbig6 overflow-hidden">
            <div style={{ width: '30%', margin: '5% 0 0 10%' }}>
              <h5 className='my-5'>CASE STUDY</h5>
              <h5 className="bold my-4" style={{ fontSize: "30px" }}>NASA uses Freelancer Enterprise to crowdsource the potential of human innovation.</h5>
              <p style={{ fontSize: "13px" }} className='my-5'>
                Over 230 designs were submitted by freelancers in a contest for the interface of a smart watch app for astronauts to use on the International Space Station.<br /><br />
                Project success managers then assisted NASA to hire the best programmers to deliver the completed app.
              </p>
              <img src='https://www.f-cdn.com/assets/main/en/assets/enterprise/landing-page/nasa-tournament-lab.png' />
            </div>
          </div>
          {/* end section7 */}
          <div style={{ background: "rgb(31,40,54)" }}>
            <div className='container'>
              <div className='row py-5'>
                <h4
                  className="my-3 text-center"
                  style={{
                    color: 'rgb(242,0,145)',
                    fontSize: '40px',
                    fontWeight: '400',
                  }}
                >Discover the benefits of Freelancer Enterprise
                </h4>
                <div className="col-md-4 text-center my-5 text-white">
                  <img src="https://www.f-cdn.com/assets/main/en/assets/enterprise/landing-page/enhance-trust.svg" />
                  <h4 className="my-2">Enhance Trust</h4>
                  <p>
                    Our compliance and worker classification solutions, along with a spot-checking service by US lawyers will build your comfort in collaborating with a global cloud workforce. Our rigorous know-your-customer and identity verification will let you collaborate with confidence.
                  </p>
                </div>
                <div className="col-md-4 text-center my-5 text-white">
                  <img src="https://www.f-cdn.com/assets/main/en/assets/enterprise/landing-page/workflow-automation.svg" />
                  <h4 className="my-2">Workflow Automation</h4>
                  <p>
                  Our fully featured API can help you fast track workforce automation and free up the time of your staff to focus on what matters. Integrate directly into your software, intranet or backend systems and make API calls into our virtual work cloud to task freelancers.
                  </p>
                </div>
                <div className="col-md-4 text-center my-5 text-white">
                  <img src="	https://www.f-cdn.com/assets/main/en/assets/enterprise/landing-page/managed-services.svg" />
                  <h4 className="my-2">Managed Services</h4>
                  <p>
                  We have a multi-lingual team of Enterprise Project Managers across multiple time-zones and geographies who are ready to help you find the perfect freelancer, curate your contest or assist in project managing your engagements.
                  </p>
                </div>
                <div className="col-md-4 text-center my-5 text-white">
                  <img src="https://www.f-cdn.com/assets/main/en/assets/enterprise/landing-page/total-transparency.svg" />
                  <h4 className="my-2">Total Transparency</h4>
                  <p>
                  We understand you want the quality and results you’re paying for. Our time-tracking app measures output, automates screen captures and routes approvals for deliverables so you can provide feedback in real-time.
                  </p>
                </div>
                <div className="col-md-4 text-center my-5 text-white">
                  <img src="https://www.f-cdn.com/assets/main/en/assets/enterprise/landing-page/increase-insights.svg" />
                  <h4 className="my-2">Increase Insights</h4>
                  <p>
                  Measure your success and track the data that matters to you. Get real-time reporting on metrics including usage and spend on your custom dashboard.
                  </p>
                </div>
                <div className="col-md-4 text-center my-5 text-white">
                  <img src="https://www.f-cdn.com/assets/main/en/assets/enterprise/landing-page/streamline-internal-adaption.svg" />
                  <h4 className="my-2">Streamline Internal Adoption
</h4>
                  <p>
                  We’ll provide workshops, video tutorials and 24/7 priority support to help you hit the ground running. Technical and training evangelists are ready to be onsite and prepare your staff for the future of work.
                  </p>
                </div>

              </div>
            </div>
          </div>
          {/* end section8 */}
          <div className="col-12">
<h6 className="text-center">Over 80% of Fortune 500 companies use Freelancer.com to accelerate their time to market</h6>
         <img className="imgbig9" src="https://www.f-cdn.com/assets/main/en/assets/enterprise/landing-page/partner-logos.jpg"/>
          </div>
          <Footer/>
        </div>
        );
   
  
  }
export default Enterprise


  
