import React from 'react'
import "./membership.css"
import Header from '../../Components/header/Header'

const membership = () => {

const paypal = ()=>{
 window.location.replace('/paypal/');
}

  return (
        <div>
                <div className="Project-contests">
                            <Header/>

      <div className="Member-ship bg-light">
        <div className="container">
          <h1 className="pt-5">Try Freelancer MemberShip</h1>
          <p className="pb-5">
            Designed to Maximize your freelancer success and earing! save up to
            20% on annual plans
          </p>
        </div>
      </div>
    </div>

    <div className="pricing my-5">
      <div className="container">
        <div className="plan d-flex justify-content-center">
          <button type="button" className="btn btn-secondary btn-sm">
            monthly plan
          </button>
          <button type="button" className="btn btn-secondary btn-sm">
            Annuaul Plan, Paid Monthly
          </button>
          <button type="button" className="btn btn-secondary btn-sm">
            Annuaul Plan, Prepaid
          </button>
        </div>
      </div>
    </div>

 

    <div className="table">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div className="col-lg-3  col-md-6 col-sm-12">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header min-height-280  py-3">
                <h4 className="my-0 fw-normal">
                  <img className="img-fluid" src="https://www.f-cdn.com/assets/main/en/assets/badges/membership/monthly-level-two.svg" alt="level-two" />
                  <p className="px-5">Basic</p>

                  <span className="pricing-currency text-dark">$</span>
                  <span className="my-5 pricing-price text-dark"
                    >4.<span className="pennies">95</span></span
                  >

                  <p>per month</p>
                </h4>
              </div>
              <button type="button" className="Button-plan btn btn-sm btn-primary" onClick={()=>paypal()}>
                Upgrade
              </button>
              <div className="card-body body-height">
                <ul className="list-unstyled mt-3 mb-4 text-left">
                  <div className="container">
                    <li>50 Bids Per Month</li>
                    <li>50 Skills</li>
                    <li>Unlock rewards</li>
                    <li>Unlimited project bookmarks</li>
                    <li>Preferred Freelancer eligible *</li>
                    <li>Custom Cover photo</li>
                    <li>3 Free highlighted contest entries / Month</li>
                    <li>12 Free sealed contest entries / Month</li>
                    <li>5 Employee followings</li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header min-height-280 py-3">
                <h4 className="my-0 fw-normal">
                  <img  className="img-fluid" src="https://www.f-cdn.com/assets/main/en/assets/badges/membership/monthly-level-three.svg" alt="level-two" />
                  <p className="px-5">Plus</p>
                  <div>
                    <p className="lead Offers-deal">FROM $9.95 USD TRY ONE MONTH</p>
                  </div>

                  <h2 className="my-3 pricing-price text-success">Free</h2>

                  <p>Or <a href="#">purchase now !</a></p>
                </h4>
              </div>
              <button type="button" className="Button-plan btn btn-sm btn-success"  onClick={()=>paypal()}>
                Try Free Trial
              </button>
              <div className="card-body body-height">
                <ul className="list-unstyled mt-3 mb-4 text-left">
                  <div className="container">
                    <li>100 Bids Per Month</li>
                    <li>80 Skills</li>
                    <li>Client Engagement</li>
                    <li>Daily withdrawal requests</li>
                    <li>Unlock rewards</li>
                    <li>Unlimited project bookmarks</li>
                    <li>Preferred Freelancer eligible*</li>
                    <li>Custom Cover photo</li>
                    <li>5 Free highlighted contest entries / Month</li>
                    <li>25 Free sealed contest entries / Month</li>
                    <li>10 Employee followings</li>
                    <li>5 External invoices</li>
                    <li>Project extensions</li>
                    <li>High value project bidding*</li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header min-height-280 py-3">
                <h4 className="my-0 fw-normal">
                  <img  className="img-fluid" src="https://www.f-cdn.com/assets/main/en/assets/badges/membership/monthly-level-four.svg" alt="level-two" />
                  <p className="px-5">Professional</p>

                  <span className="pricing-currency text-dark">$</span>
                  <span className="my-5 pricing-price text-dark"
                    >29.<span className="pennies">95</span></span
                  >

                  <p>per month</p>
                </h4>
              </div>
              <button type="button" className="Button-plan btn btn-sm btn-primary" onClick={()=>paypal()}>
                Upgrade
              </button>
              <div className="card-body body-height">
                <ul className="list-unstyled mt-3 mb-4 text-left">
                  <div className="container">
                    <li>300 Bids Per Month</li>
                    <li>100 Skills</li>
                    <li>Client Engagement</li>
                    <li>Bid Insights</li>
                    <li>Daily withdrawal requests</li>
                    <li>Unlock rewards</li>
                    <li>Unlimited project bookmarks</li>
                    <li>Preferred Freelancer eligible*</li>
                    <li>Custom cover photo</li>

                    <li>15 Free highlighted contest entries / Month</li>
                    <li>75 Free sealed contest entries / Month</li>
                    <li>20 Employee followings</li>
                    <li>15 External invoices</li>
                    <li>Project extensions</li>
                    <li>Sealed projects</li>
                    <li>Premium Freelancer Insights</li>
                    <li>High value project bidding*</li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header min-height-280 py-3">
                <h4 className="my-0 fw-normal">
                  <img src="https://www.f-cdn.com/assets/main/en/assets/badges/membership/monthly-level-five.svg" alt="level-two" />
                  <p className="px-5">Basic</p>

                  <span className="pricing-currency text-dark">$</span>
                  <span className="my-5 pricing-price text-dark"
                    >4.<span className="pennies">95</span></span
                  >

                  <p>per month</p>
                </h4>
              </div>
              <button type="button" className="Button-plan btn btn-sm btn-primary" onClick={()=>paypal()} >
                Upgrade
              </button>
              <div className="card-body body-height">
                <ul className="list-unstyled mt-3 mb-4 text-left">
                  <div className="container">
                    <li>1500 Bids Per Month</li>
                    <li>400 Skills</li>
                    <li>Client Engagement</li>
                    <li>Bid Insights</li>
                    <li>Daily withdrawal requests</li>
                    <li>Unlock rewards</li>
                    <li>Unlimited project bookmarks</li>
                    <li>Preferred Freelancer eligible*</li>
                    <li>Custom cover photo</li>

                    <li>30 Free highlighted contest entries / month</li>
                    <li>150 Free sealed contest entries / Month</li>
                    <li>Unlimited Employee followings</li>
                    <li>Unlimited External invoices</li>
                    <li>Project extensions</li>
                    <li>Sealed projects</li>
                    <li>Premium Freelancer Insights</li>
                    <li>Free NDA projects</li>
                    <li>High value project bidding*</li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <p className="w-50">
        Prices displayed are in USD. Change plans anytime, conditions apply see
        <a href="#"> FAQ.</a> * Benefits require Membership plan and additional
        criteria for eligibility.
      </p>
    </div>

    <div className="Membership-help bg-light bg-gradient">
      <div className="container">
        <h1 className="w-50 pt-5">
          Here's How Membership Helps You Grow Your Business
        </h1>
        <div className="row">
          <div className="pt-5"></div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <img className="img-fluid" src="https://www.f-cdn.com/assets/main/en/assets/badges/membership/monthly-level-five.svg" />
            <h3 className="text-left">Bids</h3>
            <p className="lead">
              Increase your chances of winning a project with more bids per
              month
            </p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <img src="image/Skills.svg" className="w-50svg" alt="" />
            <h3 className="text-left">Skills</h3>
            <p className="lead">
              Find the right work to best use your expertise and maximise your
              earnings
            </p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <img src="image/Custom cover photo.svg" className="w-50svg" alt="" />
            <h3 className="text-left">Custom Cover Photo</h3>
            <p className="lead">
              Make your profile stand out even more with your own custom cover
              photo
            </p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <img src="image/High value bidding.svg" className="w-50svg" alt="" />
            <h3 className="text-left">High Value Bidding</h3>
            <p className="lead">
              Get serious about freelancing with the ability to bid on high
              value projects
            </p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <img src="image/External invoicing.svg" className="w-50svg" alt="" />
            <h3 className="text-left">External Invoicing</h3>
            <p className="lead">
              Create invoices for any client, even if they are not a Freelancer
              user
            </p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <img src="image/Rewards.svg"  className="w-50svg" alt="" />
            <h3 className="text-left">Rewards</h3>
            <p className="lead">
              Spend credits on items such as free project upgrades, extra bids
              and more
            </p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <img src="image/Employer following.svg" className="w-50svg" alt="" />
            <h3 className="text-left">Employer Following</h3>
            <p className="lead">
              We will send you notifications so you can be one of the first to
              bid
            </p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <img src="image/Preferred freelancer.svg" className="w-50svg" alt="" />
            <h3 className="text-left">Preferred Freelancer</h3>
            <p className="lead">
              Get access to unlisted projects, unlimited support and a badge for
              your profile
            </p>
          </div>
        </div>
      </div>
    </div>


    <div className="faq">
      <div className="container">
        <div className="text-center py-5"><h1>Frequently Asked Questions</h1></div>
        <div className="row">
          <div className="col-lg-4 col-md-6"></div>
          <div className="col-lg-4 col-md-6">
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    Why should I upgrade?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div className="accordion-body">
                    <strong>You get more earning opportunities and better savings as a Basic, Plus, Professional or Premier member. Bid on more projects, add more skills, save on project listing upgrades and unlock special rewards!
                        </strong>

                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
 Can I change plans?                   </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingTwo"
                >
                  <div className="accordion-body">
                    <strong>Of course! Upgrade your membership plan at anytime to get additional benefits immediately. Alternatively, you can downgrade your membership and continue to receive the benefits of your current membership until it expires, before switching to the lower membership tier.
                        </strong>

                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
 What is the Preferred Freelancer Program?                   </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingThree"
                >
                  <div className="accordion-body">
                    <strong>Get Exclusive Access to the Best Projects with the Preferred Freelancer Program. </strong>
                      <a href="#">Read more</a>
                  </div>
                </div>
              </div>
                <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
              Can I cancel my membership?                   </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingThree"
                >
                  <div className="accordion-body">
                 Yes, you can cancel your membership at anytime with no additional charges.

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-grid gap-2 pt-5 col-6 mx-auto">
        <button type="button" className="btn btn-outline-dark mb-5 mx-auto"> Need more help? </button>

</div>

      </div>
    </div>
        </div>
    )
}

export default membership
