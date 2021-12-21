import { getByDisplayValue } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";
import "./Proposals.css";
import Nav2 from "./Nav2";
import Footer from './../../Components/Footer';
export default function Details() {
  return (
    <div className="parent Deatils ">
      <Nav2 />
      <div className='bg-data pb-5'>

        <div className="container">
          <div className="row">
            <div className="col-md-9  ">
              <div
                className="col-ms-5 col-md-12 mt-2 bg-white "
                style={{ overflow: "hidden" }}
              >
                <div className="row">
                  <div className="col-md-12 bg-white mt-2 ">
                    <div className="container">

                      <div className="content m-2 w-100 p-relative">
                        <div className=" d-flex justify-content-between ">
                          <h5 className="mt-4">Project Details</h5>
                          <div className="">
                            <h6>$15.00 – 25.00 USD /hr</h6>
                            <span style={{ fontSize: "12px", fontWeight: "600" }}>
                              BIDDING ENDS IN 5 DAYS, 23 HOURS
                            </span>
                          </div>
                        </div>
                        <hr className="bar" />
                        <div className="">
                          <div
                            className=" d-flex justify-content-start  "
                            style={{ position: "relative" }}
                          >
                            <div className="my-4">
                              <p class="">
                                {" "}
                                krjewdnfslkwemlkfkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
                              </p>
                              <h5>Skills Required</h5>
                              <button className="btn btn-warning bg-transparent mt-2">
                                Website Design
                              </button>
                            </div>
                            <p
                              style={{
                                position: "absolute",
                                bottom: "2%",
                                right: "2%",
                              }}
                            >
                              Project ID: 32367252
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-ms-5 col-md-12 mt-2 bg-white "
                style={{ overflow: "hidden" }}
              >
                <div className="container">

                  <h5 className="mt-4">Place a Bid on this Project</h5>
                  <hr></hr>
                  <p>
                    You will be able to edit your bid until the project is awarded
                    to someone.
                  </p>
                  <div className="row">
                    <div className="col-6">
                      <h6>
                        Bid Amount<span>(required)</span>
                      </h6>

                      <div className="border d-flex flex-row">
                        <p id="symbol2" className="m-auto">
                          <b>$</b>
                        </p>
                        <input
                          type="number"
                          style={{
                            width: "80%",
                            height: "5vh",
                            border: "0",
                          }}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <h6>This project will be delivered in</h6>
                      <div className="border d-flex flex-row">
                        <input
                          type="number"
                          name="Maximum_Per_hour"
                          style={{
                            width: "80%",
                            height: "5vh",
                            border: "0",
                          }}
                          className="form-control"
                        />
                        <p id="symbol2" className="m-auto">
                          <b>Days</b>
                        </p>
                      </div>
                    </div>
                  </div>
                  <h6 style={{ margin: "25px 0px" }}>
                    <b>Describe your proposal</b>
                  </h6>

                  <textarea
                    className="  justify-content-center"
                    id="w3review"
                    rows="10"
                    cols="95"
                    style={{
                      marginLeft: "17px",
                    }}
                  ></textarea>
                  <p>
                    We care about your safety. Stay safe and secure online by
                    keeping your communication and payment within the site. Only
                    Freelancer.com is authorized to collect fees from its users
                  </p>
                  <hr></hr>
                  <h6>Suggest a milestone payment</h6>
                  <p>Define the tasks that you will complete for this</p>
                  <div className="row">
                    <div className="col-7">
                      <div className="border d-flex flex-row">
                        <input
                          type="text"
                          placeholder="Project milestone"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="border d-flex flex-row">
                        <p id="symbol2" className="m-auto">
                          <b>$</b>
                        </p>
                        <input
                          type="number"
                          value="2800"
                          style={{
                            width: "80%",
                            height: "5vh",
                            border: "0",
                          }}
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    class="btn"
                    style={{ background: "#999", marginTop: "10px" }}
                  >
                    Add another milestone payment
                  </button>
                  <hr></hr>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="row">
                        <div className="col-md-4">
                          <div class="form-check">
                            <label class="form-check-label" for="flexCheckDefault">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                name="TOP_CONTEST"
                                id="TOP_CONTEST"
                              />
                              <p>
                                <b>$4.99 USD</b>
                              </p>
                            </label>
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-4 mx-auto">
                          <span
                            class="badge  px-3"
                            style={{
                              width: "100%",
                              backgroundColor: "rgb(255,163,45)",
                            }}
                          >
                            SPONSORED
                          </span>
                        </div>
                        <div className="col-md-4">
                          <p>
                            We will contact our top freelancers to join your
                            contest.
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    {/* --------------------------------------------------------1-------------------------------------------------*/}
                    <div className="col-md-12">
                      <div className="row">
                        <div className="col-md-4">
                          <div class="form-check">
                            <label class="form-check-label" for="flexCheckDefault">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                name="HIGHLIGHT"
                                id="HIGHLIGHT"
                              />
                              <p>
                                <b>$0.10 USD</b>
                              </p>
                            </label>
                          </div>
                        </div>
                        <div className="col-md-4 mx-auto">
                          <span
                            class="badge bg-info text-dark px-4"
                            style={{
                              width: "100%",
                              backgroundColor: "rgb(41,178,254)",
                            }}
                          >
                            SEALED
                          </span>
                        </div>
                        <div className="col-md-4">
                          <p>
                            Make your contest more visible in our main job search
                            pages.
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    {/* --------------------------------------------------------2-------------------------------------------------*/}
                    <div className="col-md-12">
                      <div className="row">
                        <div className="col-md-4">
                          <div class="form-check">
                            <label class="form-check-label" for="flexCheckDefault">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                name="SEALED"
                                id="SEALED"
                              />
                              <p>
                                <b>$1.00 USD</b>
                              </p>
                            </label>
                          </div>
                        </div>
                        <div className="col-md-4 mx-auto">
                          <span
                            class="badge text-light px-4"
                            style={{
                              backgroundColor: "rgb(48,219,227)",
                              width: "100%",
                            }}
                          >
                            {" "}
                            SEALED{" "}
                          </span>
                        </div>
                        <div className="col-md-4">
                          Make your bid highlighted in yellow for greater visibility
                          to the client and a higher chance of being awarded the
                          project.
                        </div>
                        <hr />
                        <button className="btn w-50  " style={{ backgroundColor: "dodgerblue", border: "1px solid black", marginTop: '16px', marginLeft: '320px' }}>
                          Learn more
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* --------------------------------------------------------3-------------------------------------------------*/}
                </div>
              </div>
            </div>
            {/* bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb */}
            <div className="col-md-3">
              <div className="container">
                <div className="row  ">
                  <div className="col-12 card my-3 border-0">
                    <h5 class="card-header bg-white pl-0">About the Client</h5>
                    <div class="card-body">
                      <h4 style={{ fontSize: "16px" }}>Client Engagement</h4>
                      <ul className="list-unstyled footer-list-item">
                        <li>
                          <div>
                            <i
                              class="fas fa-check footer-list-item-icon mr-2"
                              style={{ color: "#999" }}
                            ></i>
                            <span className=" " style={{ fontSize: "10px" }}>
                              Contacted 0 freelancers
                            </span>
                          </div>
                        </li>
                        <li>
                          <div>
                            <i
                              class="fas fa-check footer-list-item-icon mr-2"
                              style={{ color: "#999" }}
                            ></i>
                            <Link to="#" style={{ fontSize: "10px" }}>
                              Invited 0 freelancers to bid
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div>
                            <i
                              class="fas fa-check footer-list-item-icon mr-2"
                              style={{ color: "#999" }}
                            ></i>
                            <span className=" " style={{ fontSize: "10px" }}>
                              Completed 0 projects
                            </span>
                          </div>
                        </li>
                      </ul>
                      <h4 style={{ fontSize: "16px" }}>Client Engagement</h4>
                      <ul className="list-unstyled footer-list-item">
                        <li>
                          <div>
                            <i
                              class="fas fa-check footer-list-item-icon mr-2"
                              style={{ color: "#999" }}
                            ></i>
                            <span className=" " style={{ fontSize: "10px" }}>
                              Contacted 0 freelancers
                            </span>
                          </div>
                        </li>
                        <li>
                          <div>
                            <i
                              class="fas fa-check footer-list-item-icon mr-2"
                              style={{ color: "#999" }}
                            ></i>
                            <Link to="#" style={{ fontSize: "10px" }}>
                              Invited 0 freelancers to bid
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div>
                            <i
                              class="fas fa-check footer-list-item-icon mr-2"
                              style={{ color: "#999" }}
                            ></i>
                            <span className=" " style={{ fontSize: "10px" }}>
                              Completed 0 projects
                            </span>
                          </div>
                        </li>
                      </ul>
                      <h4 style={{ fontSize: "16px" }}>Client Verification</h4>
                      <ul className="list-unstyled footer-list-item">
                        <li>
                          <div>
                            <i
                              class="fas fa-check footer-list-item-icon mr-2"
                              style={{ color: "#999" }}
                            ></i>
                            <span className=" " style={{ fontSize: "10px" }}>
                              {" "}
                              Identity verified
                            </span>
                          </div>
                        </li>
                        <li>
                          <div>
                            <i
                              class="fas fa-check footer-list-item-icon mr-2"
                              style={{ color: "#999" }}
                            ></i>
                            <Link to="#" style={{ fontSize: "10px" }}>
                              Payment method verified
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div>
                            <i
                              class="fas fa-check footer-list-item-icon mr-2"
                              style={{ color: "#999" }}
                            ></i>
                            <span className=" " style={{ fontSize: "10px" }}>
                              Deposit made
                            </span>
                          </div>
                        </li>
                        <li>
                          <div>
                            <i
                              class="fas fa-check footer-list-item-icon mr-2"
                              style={{ color: "#999" }}
                            ></i>
                            <span className=" " style={{ fontSize: "10px" }}>
                              {" "}
                              Email address verified
                            </span>
                          </div>
                        </li>
                        <li>
                          <div>
                            <i
                              class="fas fa-check footer-list-item-icon mr-2"
                              style={{ color: "#999" }}
                            ></i>
                            <span className=" " style={{ fontSize: "10px" }}>
                              {" "}
                              Profile completed
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* end 1 */}
                <div className="row my-2 ">
                  <div className="col-12 card border-0">
                    <h6 class="card-header bg-white pl-0">Your Bids</h6>
                    <div class="card-body">
                      <p>4 bids left out of 6</p>
                      <i class="far fa-clock"></i>
                      <p>
                        4 days, 21 hours until next additional bid (1x
                        replenishment rate)
                      </p>
                      <button
                        className="btn w-150"
                        style={{ backgroundColor: "white", border: "1px solid " }}
                      >
                        Get more bids now!
                      </button>
                    </div>
                  </div>
                </div>
                {/* end 2 */}
                <div className="row my-2 ">
                  <div className="col-12 card border-0">
                    <h6 class="card-header bg-white pl-0">
                      How to write a winning bid
                    </h6>
                    <div class="card-body">
                      <div style={{ textAlign: "center", margin: "10px 0" }}>
                        <img
                          ngcontent-webapp-c127=""
                          class="ImageElement"
                          src="https://www.f-cdn.com/assets/main/en/assets/project-view-page/icons-big/highlight.svg"
                          alt="Winning Bid Guide"
                          data-display="block"
                          data-align-center="true"
                          data-aspect-ratio="false"
                        ></img>
                      </div>
                      <p className="bold">
                        Your best chance of winning this project is writing a great bid proposal here!
                      </p>
                      <p>Great bids are ones that:</p>
                      <ul>
                        <li>Are engaging and well written without spelling or grammatical errors</li>
                        <li>Show a clear understanding of what is required for this specific project - personalize your respo</li>
                        <li>Explain how your skills & experience relate to the project and your approach to working on it</li>
                        <li>Ask questions to clarify any unclear details</li>
                      </ul>
                      <p>Most of all - don't spam or post cut-and-paste bids. You will be penalized or banned if you do so.</p>
                      <button className="btn w-100  " style={{ backgroundColor: "white", border: "1px solid " }}>
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
