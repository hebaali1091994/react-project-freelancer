import React from "react";
import "./Documentation.css";

import Footer from '../../Components/Footer';
import { Link } from "react-router-dom";

const Documentation = () => {
  return (
    <>
     <nav
  className="navbar navbar-expand-lg navbar-dark "
  style={{
    background: "rgb(54,73,103)",
    marginLeft: "15px",
    marginRight: "0px",
    position:"fixed",
    width:"100%"
  }}
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
        <li className="nav-item border-0  border" style={{border:"none  !import"}}>
          <a className="nav-link text-white">Documentation</a>
        </li>
        <li className="nav-item border-0  border">
          <a className="nav-link text-white">Help</a>
        </li>
        <li className="nav-item border-0  border">
          <a className="nav-link text-white">Contact Us</a>
        </li>
      </ul>
      <ul style={{ listStyle: "none", textAlign: "center" }}>
        <li className="text-white">
          PRODUCTION MODE <br />
          Sandbox |Live
        </li>
      </ul>
    </div>
  </div>
</nav>
      <div className="container-fluid" style={{ margin: "0px" }}>
        <div className="imgbig">
          <div className="container">
          
              <div className="row d-flex">
                <div className=" col-xl-8 col-md-6 col-sm-12 text-white text-left ">
                  <h1 className="header-title ">
                    <strong>
                      Use the Freelancer API to access a cloud workforce of
                      skilled freelancers from your website, app or software.
                    </strong>
                  </h1>
                  <p className="header-paragraph">
                    Why hire people when you can just make an API call to the
                    cloud?
                  </p>
                  <div></div>

                  <Link
                    to="https://developers.freelancer.com/docs"
                    className="btn btn-primary btn-lg Color-rgb(0,135,224) "
                    tabindex="-1"
                    role="button"
                  >
                    View Documentation
                  </Link>
                  <Link to="./Contactus" className="butnn2  abc" role="button">
                    Contact Us
                  </Link>
                </div>
                <div class=" col-3 Grid-col Grid-col--tablet-5 ">
                  <img
                    class="main-api-image img2"
                    src="	https://developers.freelancer.com/img/API_LANDING_HERO_KEY.png"
                    alt=""
                  />
                </div>
              </div>
           
          </div>
        </div>
        <div className="secation">
          <div class="Container">
            <div class="row d-flex sec21">
              <div class="col-4">
                <div class="integrationsLanding-features-icon">
                  <img
                    className="sec21"
                    src="	https://developers.freelancer.com/img/ILLUSTRATION_ICON_GLOBE.svg"
                    alt=""
                  />
                </div>
                <h3 class="integrationsLanding-features-heading">
                  Global Workforce
                </h3>
                <p class="integrationsLanding-features-copy">
                  Ten-time ​Webby ​award-winning Freelancer.com ​is ​the
                  ​world’s ​largest ​freelancing ​and crowdsourcing ​marketplace
                  ​by ​total ​number ​of ​users ​and ​jobs ​posted with 27M
                  users from over 247 countries, regions and territories.
                </p>
              </div>
              <div class="col-4">
                <div class="integrationsLanding-features-icon">
                  <img
                    className="sec21"
                    src="	https://developers.freelancer.com/img/ILLUSTRATION_ICON_GRAPH.svg"
                    alt=""
                  />
                </div>
                <h3 class="integrationsLanding-features-heading">
                  Unmatched Liquidity
                </h3>
                <p class="integrationsLanding-features-copy">
                  Over 80% of online jobs get bids within 60 seconds. Jobs in a
                  specific location get bid on average within 25 minutes–which
                  is improving month by month. No other freelance marketplace is
                  as liquid as Freelancer.com.
                </p>
              </div>
              <div class="col-4">
                <div class="integrationsLanding-features-icon">
                  <img
                    src="	https://developers.freelancer.com/img/ILLUSTRATION_ICON_COST.png"
                    alt=""
                    style={{ width: "70px", marginTop: "30px" }}
                  />
                </div>
                <h3 class="integrationsLanding-features-heading">
                  Cost Effective
                </h3>
                <p class="integrationsLanding-features-copy">
                  Why hire full time staff when you can simply make an API call
                  to the cloud? You'll never fire freelancers, because you only
                  pay as you task them. And you can scale up your operations
                  with just a few lines of code.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        {/* section 3 */}
        <div className="sec3">
          <div class="Container">
            <div class="Grid-col Grid-col--tablet-8">
              <strong>
                <h4 class="integrationsLanding-intro-heading integrationsLanding-section-heading">
                  Over 13 million jobs across 1,000 categories have been posted
                  on Freelancer.com.
                </h4>
              </strong>

              <h6 class="integrationsLanding-intro-copy">
                Hire in any profession you can think of using our API, on
              </h6>
              <h6>
                {" "}
                demand–developers, designers, photographers, copywriters,
                delivery people, manufacturers and more.
              </h6>
              <a
                class=" btn  btn-large  btn-primary"
                href="/https://developers.freelancer.com/docs"
                style={{ marginTop: "25px" }}
              >
                View Documentation
              </a>
              <div>
                <img
                  src="https://developers.freelancer.com/img/API_LANDING_INTRO_MAP.jpg"
                  alt=""
                  style={{ Width: "100%" }}
                  className="imgsec3"
                />

                <p> displays our users by geolocation</p>
              </div>
            </div>
          </div>
        </div>
        {/* section4 */}
        <div className="sec4">
          <div className="containor">
            <div className="row d-flex se4">
              <div className="col-8">
                <img
                  className="img4"
                  src="https://developers.freelancer.com/img/API_LANDING_SINGULARITY.png"
                  alt=""
                ></img>
              </div>
              <div className="col-4">
                <h1 style={{ marginRight: "48px" }}>The Singularity is Near</h1>
                <p className="p4">
                  Futurists hypothesize about a coming singularity; a time in
                  the future where machine intelligence will explode,
                  accelerating technological progress at a rate so quickly that
                  the future will be radically different from today. The human
                  brain cannot even begin to comprehend the sophistication of
                  this future.
                </p>
                <p className="p4">
                  The release of the Freelancer API brings this connection
                  between man and machine even closer. For over 60 years, humans
                  have programmed computers through software and for the first
                  time a sophisticated programming interface exists for humans.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* ////////////////////////////////////////////////// */}
        {/* section 5 */}
        <div className="sec5">
          <div className="containor">
            <div className="row d-flex">
              <div className="col part1-sec5">
                <h3>
                  {" "}
                  <strong>Built for developers, by developers</strong>
                </h3>
                <p>
                  We engineered our API to let you spend more time running your
                  business and less time worrying about fulfillment of services.
                  It is your opportunity to create applications that leverage
                  the Freelancer platform, and the army of freelancers that use
                  the site!
                </p>
                <p>
                  You can build entire businesses – desktop apps, mobile apps
                  and anything you can think of – all powered by our technology
                  and marketplace. The possibilities are endless!
                </p>
              </div>

              <div className="col part2-2">
                <ul class="demo">
                  <div className="row">
                    {/* 1///////// */}
                    <li className="col">
                      <div className="row">
                        <img
                          className="imgsec5"
                          src="https://developers.freelancer.com/img/API_LANDING_ICON_DOCS.svg"
                          alt=""
                        ></img>
                        <h6 className="h6sec5">Beautiful Documentation</h6>
                      </div>
                      <div>
                        <p>
                          Our API reference documentation and step by step
                          guides allow you to focus on building awesome apps.
                        </p>
                      </div>
                    </li>
                    {/* /////////////////////// */}
                    <li className="col">
                      <div className="row">
                        <img
                          className="imgsec5"
                          src="https://developers.freelancer.com/img/API_LANDING_ICON_BOX.svg"
                          alt=""
                        ></img>
                        <h6 className="h6sec5">Versioning</h6>
                      </div>
                      <div>
                        <p>
                          With our versioning system, you can be sure your app
                          will work consistently as we add new and exciting
                          features.
                        </p>
                      </div>
                    </li>
                  </div>
                  <div className="row">
                    <li className="col">
                      <div className="row">
                        <img
                          className="imgsec5"
                          src="	https://developers.freelancer.com/img/API_LANDING_ICON_VERSION.svg"
                          alt=""
                        ></img>
                        <h6 className="h6sec5">Sandbox Environment</h6>
                      </div>
                      <div>
                        <p>
                          The Freelancer.com sandbox allows you to test your
                          applications without touching production data. Explore
                          the API in our developer friendly sandbox environment
                          before you go live.
                        </p>
                      </div>
                    </li>
                    <li className="col">
                      <div className="row">
                        <img
                          className="imgsec5"
                          src="https://developers.freelancer.com/img/API_LANDING_ICON_COMPUTER.svg"
                          alt=""
                        ></img>
                        <h6 className="h6sec5">Developers First</h6>
                      </div>
                      <div>
                        <p>
                          With our interactive documentation and support
                          helplines, we're always making it easier for you to
                          build awesome stuff!
                        </p>
                      </div>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
            <a
              class=" btn  btn-large  btn-primary"
              href="/https://developers.freelancer.com/docs"
              style={{ marginTop: "25px" }}
            >
              View Documentation
            </a>
          </div>
        </div>
        {/* //////////////////////////////////////////////// */}
        <hr></hr>

        <div className="container nnn bg-white">
          <div className="row text-center bg-white my-2">
            {" "}
            <h2>Disrupt the Disruptors</h2>
          </div>
          <div className="row ">
            <div className="col-md-4 ">
              <div
                className="m-1 p-5 "
                style={{ height: "340px ", background: "rgba(24,130,248,.05)" }}
              >
                <div>
                  <div className="my-4">
                    <img
                      src=" https://developers.freelancer.com/img/API_LANDING_ICON_TAXI.svg"
                      alt=""
                      style={{ width: "40px" }}
                    />
                  </div>
                  <span style={{ color: "rgb(24,130,248)", fontSize: "18px" }}>
                    <b>
                      {" "}
                      Uber built the largest taxi company in the world without
                      owning any cars. Could you build a bigger one without
                      using any staff?
                    </b>
                  </span>
                  <a href="/https://developers.freelancer.com/docs">
                    <button class="btn btn-info btn-large text-white bolder my-5 bg-primary">
                      View Documentation
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/* card2 */}
            <div className="col-md-4 ">
              <div className="m-1 bg-white">
                <img
                  src="https://developers.freelancer.com/img/API_LANDING_DISRUPT_AUTOMATE.jpg"
                  className="w-100 mb-3"
                  alt="ben"
                />
                <h3>Automate something</h3>
                <p style={{ fontSize: "16px" }}>
                  A few lines of javascript that can be dropped into a website
                  that taps into a service to internationalize copy–say goodbye
                  to poor quality machine translation.
                </p>
              </div>
            </div>
            <div className="col-md-4 ">
              {/* 3 */}
              <div className="m-1 bg-white">
                <img
                  src="https://developers.freelancer.com/img/API_LANDING_DISRUPT_BUTTON.jpg"
                  className="w-100 mb-3"
                  alt="ben"
                />
                <h3>Button for everything</h3>
                <p style={{ fontSize: "16px" }}>
                  Imagine an app with one button. Once it's pressed, no matter
                  where you are in the world, your favorite flowers delivered!
                  Or chocolate, or a photographer.
                </p>
              </div>
            </div>
            {/* 4 */}
            <div className="col-md-4 ">
              <div className="m-1 bg-white">
                <img
                  src="
                https://developers.freelancer.com/img/API_LANDING_DISRUPT_CHARITY.jpg"
                  className="w-100 mb-3"
                  alt="ben"
                />
                <h3>Charity done right</h3>
                <p style={{ fontSize: "16px" }}>
                  A village in India needs a well fixed. They post their
                  project, which freelancers bid to fix. The website then
                  displays these projects for benefactors to fund.
                </p>
              </div>
            </div>
            {/* 5 */}
            <div className="col-md-4 ">
              <div className="m-1 bg-white">
                <img
                  src="https://developers.freelancer.com/img/API_LANDING_DISRUPT_SERVICES.jpg"
                  className="w-100 mb-3"
                  alt="ben"
                />
                <h3>Services in an app</h3>
                <p style={{ fontSize: "16px" }}>
                  Take a photo and have a caricature sent back, a birthday card,
                  a 3D model, a floorplan or even a song about the scene! You're
                  only limited by your imagination.
                </p>
              </div>
            </div>
            {/* 6 */}
            <div className="col-md-4 ">
              <div className="m-1 bg-white">
                <img
                  src="https://developers.freelancer.com/img/API_LANDING_DISRUPT_DELIVERY.jpg"
                  className="w-100 mb-3"
                  alt="ben"
                />
                <h3>Food delivery</h3>
                <p style={{ fontSize: "16px" }}>
                  Why hire an expensive fleet of cyclists and drivers when you
                  can use the Freelancer API as a low cost delivery network.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* section 7 */}
        <div className="sec7">
          <div className="container">
            {/* <div className="row"> */}
            <div className="row d-flex justify-content-center ">
              <div
                className=" col-5 text-white text-left "
                style={{ paddingTop: "110px" }}
              >
                <p className="text-white mt-5">CASE STUDY</p>
                <h1 className="header-title my-3">
                  <strong>
                    Use the Freelancer API to build apps of the future
                  </strong>
                </h1>
                <h6 className="header-paragraph my-2">
                  Assetio by Flobox combines the power of the Freelancer API
                  with Artificial Intelligence and Data Science to automatically
                  cycle creatives to avoid advertising fatigue.d?
                </h6>
              </div>
              <div class=" col-7 mr-1  d-flex align-items-end justify-content-center ">
                <img
                  class="main-api-image imgsec7 "
                  src="	https://developers.freelancer.com/img/API_LANDING_CASESTUDY_ASSETIO.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        {/* section 8 */}
        <div className="container">
          <div className="row">
            <div className="col-12 my-3 text-center">
              <h2>Benefits of integrating the Freelancer API</h2>
            </div>
            <div className="col-md-3 my-2">
              <div className="p-3">
                <img
                  src="https://developers.freelancer.com/img/ILLUSTRATION_ICON_GRAPH.svg"
                  alt="ben"
                />
                <h3 className="my-4">On demand & scalable</h3>
                <p>
                  With the largest online workforce in history, Freelancer
                  scales to your needs instantly. Task people at scale in an
                  instant.
                </p>
              </div>
            </div>
            <div className="col-md-3 my-2">
              <div className="p-3">
                <img
                  src="https://developers.freelancer.com/img/ILLUSTRATION_ICON_GEARS.svg"
                  alt="ben"
                />
                <h3 className="my-4">Automate your workforce</h3>
                <p>
                  The Freelancer API allows you to automate your business
                  processes at scale across the globe. Wherever you need talent
                  and skills, we have it- instantly.
                </p>
              </div>
            </div>
            <div className="col-md-3 my-2">
              <div className="p-3">
                <img
                  src="https://developers.freelancer.com/img/ILLUSTRATION_ICON_SAVING.svg"
                  alt="ben"
                />
                <h3 className="my-4">Dramatically cut costs</h3>
                <p>
                  It's free to post a project, free to bid & chat. If a job is
                  accepted, we charge 3% to the employer with no minimum project
                  fee.
                </p>
              </div>
            </div>
            <div className="col-md-3 my-2">
              <div className="p-3">
                <img
                  src="https://developers.freelancer.com/img/ILLUSTRATION_ICON_MATCHMAKING.svg
                  "
                  alt="ben"
                />
                <h3 className="my-4">Sophisticated Matching</h3>
                <p>
                  Using artificial intelligence, Freelancer's reputation system
                  automatically ranks the best freelancers for the job based
                  upon sophisticated algorithms.
                </p>
              </div>
            </div>
            <div className="col-md-3 my-2">
              <div className="p-3">
                <img
                  src="https://developers.freelancer.com/img/ILLUSTRATION_ICON_SERVICE.svg"
                  alt="ben"
                />
                <h3 className="my-4">Enterprise</h3>
                <p>
                  A perfect companion for Freelancer Enterprise customers, the
                  Freelancer API is perfect for large organizations doing big
                  things.
                </p>
              </div>
            </div>
            <div className="col-md-3 my-2">
              <div className="p-3">
                <img
                  src="
                  https://developers.freelancer.com/img/ILLUSTRATION_ICON_COMPUTER.svg
                  "
                  alt="ben"
                />
                <h3 className="my-4">Open source SDKs</h3>
                <p>
                  With existing SDKs for Python and Android, you can get started
                  with the Freelancer API today. More SDKs and expanded support
                  coming soon.
                </p>
              </div>
            </div>
            <div className="col-md-3 my-2">
              <div className="p-3">
                <img
                  src="https://developers.freelancer.com/img/ILLUSTRATION_ICON_PAYMENT.svg"
                  alt="ben"
                />
                <h3 className="my-4">Pay only when satisfied</h3>
                <p>
                  With our milestone payments system, your payment is safe until
                  you are 100% satisfied with the work done.
                </p>
              </div>
            </div>
            <div className="col-md-3 my-2">
              <div className="p-3">
                <img
                  src="
                  https://developers.freelancer.com/img/ILLUSTRATION_ICON_LIST.svg"
                  alt="ben"
                />
                <h3 className="my-4">Unprecedented flexibility</h3>
                <p>
                  Choose between a projects, contests or services, and pay a
                  fixed price or on an hourly basis, we have you covered for all
                  kinds of ways to work.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="row">
          <div className="col-8">
            <h6 style={{textAlign:"start",marginLeft:"50px"}}>Supercharge your business with the Freelancer API today</h6>
            <p style={{fontSize:"16px",marginLeft:"50px"}}>
              With access to over 25 million users the we’re excited to see what
              you can create
            </p>
          </div>
          <div className="col-4">
            <Link
              to="/Contactus" 
              className="btn btn-primary btn-lg Color-rgb(0,135,224) "
              tabindex="-1"
              role="button"
            >
       Contact Us
            </Link>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default Documentation;
