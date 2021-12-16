import react from "react";
import { Link } from "react-router-dom";
export default function Account() {
  return(
    <div class="container">
        <div class="row">
          <div className="show">
          <aside id="asideleft" class="col-md-3">
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
            <aside id="asideright" class="col-md-9 shadow-lg p-3 mb-5 bg-body rounded">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <p class="fs-1"><b>Account</b></p>
                        </div>
                        <hr/>
                        <div class="col-md-12 mb-4">
                            <p class="fs-5"><b>Directory and Follow Setting</b></p>
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked/>
                                <label class="form-check-label" for="flexSwitchCheckChecked"><b>List me on the Freelancer
                                    directory, allowing Employers to hire me directly for projects</b>
                                </label>
                            </div>
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked2" checked/>
                                <label class="form-check-label" for="flexSwitchCheckChecked2"><b>Allow Freelancers to follow me, notifying them of projects and contests I've posted
                                    input</b></label>
                            </div>
                        </div>
                        <hr/>
                        <div class="col-md-12 mb-4">
                            <p class="fs-5"><b>Account Type</b></p>
                            <p><b>I'm looking for</b></p>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                <label class="form-check-label" for="inlineRadio1"><b>Work</b></label>
                              </div>
                              <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                <label class="form-check-label" for="inlineRadio2"><b>Hire</b></label>
                              </div>
                              </div>
                              <hr/>
                              <div class="col-md-12 mb-4">
                                  <p class="fs-5"><b>Close Account</b></p>
                                  <a href="#" class="btn btn-outline-dark">Close My Account</a>
                              </div>
                              <hr/>
                              <div class="col-md-12 mb-4">
                              <a href="#" class="btn btn-outline-primary text-start active">Save Setting</a> 
                            </div>
                        </div>
                    </div>
                  </aside>
          </div>
           
                </div>
              </div>
         
  )
  
}