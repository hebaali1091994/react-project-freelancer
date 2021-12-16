import React from "react";
import { Link } from "react-router-dom";
export default function Trust() {
    return(
        <div class="container">
        <div class="row">
            <div className="show">
            <aside id="asideleft" class="col-xs-3 col-sm-3 col-md-3">
                <div class="btn-group-vertical w-100">
                <Link to="/Profile" class="btn text-primary text-start">Profile</Link>
                <Link to="/Email" class="btn text-primary text-start">Email & Notifications</Link>
                    <Link to="/Membership" class="btn text-primary text-start">Membership</Link>
                    <Link to="/Password" class="btn text-primary text-start">Password</Link>
                    <Link to="/Payment" class="btn text-primary text-start">Payment & Financial</Link>
                    <Link to="/AccountSecurity" class="btn text-primary text-start">Account Security</Link>
                    <Link  to="/Trust" class="btn text-primary text-start">Trust & Verification</Link>
                    <Link to="/Account" class="btn btn-outline-primary text-start active">Account</Link>
                </div>
            </aside>
          
            <aside id="asideright" class="col-xs-9 col-sm-9 col-md-9 shadow-lg p-3 mb-5 bg-body rounded">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <p class="fs-1"><b>Trust & Verification</b></p>
                        </div>
                        <hr/>
                        <div class="col-md-12">
                            <p class="fs-5"><b>What is a trust score?</b></p>
                            <p>The Freelancer Trust Score is at the core of how we handle verification, trust, and
                                payments. The Trust Score is a value that indicates to what extent we have been able to
                                verify who a user says they are. Employers and freelancers who are the safest to work
                                with are those who put in more effort to verify themselves to become highly trusted
                                users.</p>
                            <a href="#home" class="text-decoration-none"><b>Learn more</b></a>
                        </div>
                        <hr/>

                        <div class="col-sm-3 col-md-3" data-bs-toggle="tooltip" data-bs-placement="bottom"
                            title="Tooltip on bottom">
                            <svg height="100" width="100">
                                <circle cx="50" cy="50" r="10" stroke="#0dcaf0" stroke-width="3" fill="#0dcaf0" />
                            </svg>
                        </div>
                {/*  */}
                        <div class="cir1 col-sm-3 col-md-3" data-bs-toggle="tooltip" data-bs-placement="bottom"
                            title="Additional Benefits">
                            <svg height="100" width="100">
                                <circle cx="50" cy="50" r="10" stroke="#0dcaf0" stroke-width="3" fill="#ffff" />
                                <text x="10" y="50" fill="black"></text> 
                            </svg>
                            <div class="cir1A progress">
                                <div class="progress-bar bg-info" role="progressbar" style={{width:"100%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                        </div>
               {/*  */}
               <div class="cir2 col-sm-3 col-md-3" data-bs-toggle="tooltip" data-bs-placement="bottom"
                            title="Tooltip on bottom">
                            <svg height="100" width="100">
                                <circle cx="50" cy="50" r="10" stroke="#bec0c2" stroke-width="3" fill="#ffff" />
                            </svg>
                            <div class="cir2A progress">
                                <div class="progress-bar bg-info" role="progressbar" style={{width:"0"}}aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                        </div>
             {/*  */}
             <div class="cir3 col-sm-3 col-md-3" data-bs-toggle="tooltip" data-bs-placement="bottom"
                            title="Tooltip on bottom">
                            <svg height="100" width="100">
                                <circle cx="50" cy="50" r="10" stroke="#bec0c2" stroke-width="3" fill="#ffff" />
                            </svg>
                            <div class="cir3A progress">
                                <div class="progress-bar bg-info" role="progressbar"style={{width:"0"}}aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                        </div>
                        {/*  */}
                        <div class="col-md-12 text-center mt-3">
                            <p>Current Trust Score: <span class="badge text-dark">5</span></p>
                            <p>Strength <span class="badge text-dark">Low</span></p>
                        </div>
                        <hr/>

                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-6">
                                    <p><b>Email Address</b></p>
                                </div>
                                <div class="col-md-6  text-end mb-3">
                                    <a href="#home" class="btn btn-outline-primary text-start">Change
                                        Email</a>
                                    <span class="badge bg-light text-dark p-2"
                                       style={{border:"1px solid black"}}>5point</span>
                                </div>
                                <hr/>
                              
                                <div class="col-md-6">
                                    <p><b>phone Number</b></p>
                                </div>
                                <div class="col-md-6 text-end mb-3">
                                    <a href="#home" class="btn btn-outline-primary text-start">Add phone Nimber</a>
                                    <span class="badge bg-light text-dark p-2"
                                     style={{border:  "1px solid black"}}>10point</span>
                                </div>
                                <hr/>
                                
                                <div class="col-md-6">
                                    <p><b>Facebook</b></p>
                                </div>
                                <div class="col-md-6 text-end mb-3">
                                    <a href="#home" class="btn btn-outline-primary text-start">Add Facebook</a>
                                    <span class="badge bg-light text-dark p-2"
                                       style={{border:  "1px solid black"}}>20point</span>
                                </div>
                                <hr/>
                               
                                <div class="col-md-6">
                                    <p><b>Linkedin</b></p>
                                </div>
                                <div class="col-md-6  text-end mb-3">
                                    <a href="#home"  class="btn btn-outline-primary text-start">Add Linkedin</a>
                                    <span class="badge bg-light text-dark p-2"
                                       style={{border:  "1px solid black"}}>20point</span>
                                </div>
                                <hr/>
                               
                                <div class="col-md-6">
                                    <p><b>Authenticate Credit or Debit Card</b></p>
                                </div>
                                <div class="col-md-6  text-end mb-3">
                                    <a href="#home"  class="btn btn-outline-primary text-start">Authenticate Credit or Debit
                                        Card</a>
                                    <span class="badge bg-light text-dark p-2"
                                        style={{border:  "1px solid black"}}>45point</span>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </aside>
            </div>
           
                </div>
            </div>
                          
    )
    
}