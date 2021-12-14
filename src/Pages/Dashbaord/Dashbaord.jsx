import React from 'react'
import Header from '../../Components/header/Header'
import './Dashbaord.css'
import { Context } from '../../context/Context';
import { useContext } from 'react';

export default function Dashbaord() {
  const {user} = useContext(Context)
    return (
      <div className="Dashbaord">
          <Header/>
              <div className="container">
      {/* <!-- Start Section Refer Friend --> */}
      <div className="row">
        <div className="col">
          <div className="col-12 mt-5 bg-white border rounded Refer-friend">
            <div className="row">
              <div className="col-9">
                <p className="font-weight-bold pt-4 display-6">
                  Refer a Friend, get $ 15 GBP
                </p>
                <p>
                  if you enjoy using freelancer, Share it with friend and
                  colleagues to earn free credits
                </p>
                <button type="button" className="ml-1 p-2 btn btn-primary">
                  Invite now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </button>
              </div>
              <div className="col-3">
                <img src="Image/gift.png" alt="giftImage" />
              </div>
            </div>
          </div>
          <div className="col-12 mt-5 bg-white border rounded">
            <div className="d-flex justify-content-between border-bottom px-5">
              <h3 className="p-2 font-weight-bold">Recent Projects
              
              </h3>

              <p className="pt-3 pe-3 lead text-primary">
                View All
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </p>
            </div>
            {/* <!-- End Recent Project  --> */}
            <div className="p-5">
              <p className="text-center mt-3 lead">
                Millions of amazing freelancers are waiting to turn your dreams
                into reality.
              </p>
              <div className="d-flex justify-content-center">
                <button
                  type="button"
                  className="
                    btn btn-light btn-lg
                    border
                    lead
                    rounded
                    mx-4
                    mb-3
                    button-style
                  "
                >
                  Get a website built
                </button>
                <button
                  type="button"
                  className="btn btn-light btn-lg border mb-3 rounded button-style"
                >
                  Get a design
                </button>
              </div>
              <div className="d-flex justify-content-center">
                <button
                  type="button"
                  className="btn btn-light btn-lg border mx-4 rounded button-style"
                >
                  Get data entry done
                </button>
                <button
                  type="button"
                  className="btn btn-light btn-lg border rounded button-style"
                >
                  Get articles written
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 mt-5 bg-white border rounded Recent-Projects mb-5">
            {/* <!-- Start Recent Project  --> */}
            <div className="d-flex justify-content-between border-bottom">
              <h3 className="p-2 font-weight-bold px-5">News Feed</h3>
            </div>
            <div className="d-flex justify-content-center mt-4 px-5">
              <div className="row">
                <div className="col-1">
                  <img src="/image/Freelancer.svg" alt="" />
                </div>
                <div className="col-10 pb-5">
                  <p className="lead">
                    Welcome to Freelancer. This is where you'll receive updates
                    for project and account activity. Select an option below to
                    get started.
                  </p>
                  <p className="lead font-weight-bold">5 days age</p>
                  <button type="button" className="btn btn-outline-secondary">
                    Post a Project
                  </button>
                  <button type="button" className="btn btn-outline-secondary">
                    Browse Projects
                  </button>
                  <button type="button" className="btn btn-outline-secondary">
                    Set up account details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-sm-12">
          <div className="col-12">
            <div className="info bg-white">
              <div
                className="mt-5 dark-blue border rounded Recent-Projects p-3 mb-5"
              >
                <h6>Welcome back,</h6>

                <h5>abobakerhanfy</h5>
                <div className="d-flex justify-content-between">
                  <h5>@abobakerhanfy</h5>
                  <p>FREE MEMBER</p>
                </div>
              </div>
              <div className="container">
                <div className="d-flex justify-content-between">
                  <h5>Set up your account</h5>
                  <p>13%</p>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped pro "
                    role="progressbar"
                    style={{  "width": "13%",
                        "aria-Valuenow":"13",
                    "aria-valuemin":"0",
                    "aria-valuemax":"100"}}
                  ></div>
                </div>
                <div
                  className="d-flex justify-content-between mt-3 gray-bk text-white"
                >
                  <img src="/Image/contact User.svg" alt="" />
                  <a className="font-weight-bold text-decoration-none pt-2" href="#"
                    >Verify your email</a
                  >
                  <p className="px-2 pt-2 text-secondary">+ 6%</p>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <div>
                    <h5>Account balance</h5>
                    <h5>£0.00 GBP</h5>
                  </div>
                  <h6 className="pt-3 pe-3 lead text-primary">
                    Deposit funds
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                      />
                    </svg>
                  </h6>
                </div>
                <hr />
                <div className="mb-3"></div>
              </div>
            </div>
          </div>
          <div className="col-12 bg-white mt-5">
            <div className="polls-info">
              <div className="d-flex justify-content-between border-bottom">
                <h3 className="p-2 font-weight-bold">Polls</h3>
              </div>
              <div className="px-5 mt-5">
                <label
                  for="exampleFormControlInput1"
                  className="Quesion-style form-label"
                  >Whats Is Your Gender ?</label
                >

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label" for="flexRadioDefault1">
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked
                  />
                  <label className="form-check-label" for="flexRadioDefault2">
                    Female
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col-3"></div>
                <div className="col-4 text-primary mt-5">Skip Question</div>
                <div className="col-5">
                  <button type="button" className="mt-5 btn btn-secondary">
                    Submit Answer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- end Section Refer Friend --> */}
    </div>
        </div>
    )
}
