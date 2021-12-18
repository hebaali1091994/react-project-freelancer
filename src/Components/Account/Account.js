import react from "react";
import { Link } from "react-router-dom";
export default function Account() {
  return(
    <div class="container">
        <div className="row">
          <div className="show">
          <aside id="asideleft" class="col-md-3">
                <div className="btn-group-vertical w-100">
                    <Link to="/Profile" className="btn text-primary text-start">Profile</Link>
                    <Link to="/Email" className="btn text-primary text-start">Email & Notifications</Link>
                    <Link to="/Membership" className="btn text-primary text-start">Membership</Link>
                    <Link to="/Password" className="btn text-primary text-start">Password</Link>
                    <Link to="/Payment" className="btn text-primary text-start">Payment & Financial</Link>
                    <Link to="/AccountSecurity" className="btn text-primary text-start">Account Security</Link>
                    <Link  to="/Trust" className="btn text-primary text-start">Trust & Verification</Link>
                    <Link to="/Account" className="btn btn-outline-primary text-start active">Account</Link>
                </div>
            </aside>
            <aside id="asideright" className="col-md-9 shadow-lg p-3 mb-5 bg-body rounded">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p className="fs-1"><b>Account</b></p>
                        </div>
                        <hr/>
                        <div className="col-md-12 mb-4">
                            <p className="fs-5"><b>Directory and Follow Setting</b></p>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked/>
                                <label className="form-check-label" for="flexSwitchCheckChecked"><b>List me on the Freelancer
                                    directory, allowing Employers to hire me directly for projects</b>
                                </label>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked2" checked/>
                                <label className="form-check-label" for="flexSwitchCheckChecked2"><b>Allow Freelancers to follow me, notifying them of projects and contests I've posted
                                    input</b></label>
                            </div>
                        </div>
                        <hr/>
                        <div className="col-md-12 mb-4">
                            <p className="fs-5"><b>Account Type</b></p>
                            <p><b>I'm looking for</b></p>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                <label className="form-check-label" for="inlineRadio1"><b>Work</b></label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                <label className="form-check-label" for="inlineRadio2"><b>Hire</b></label>
                              </div>
                              </div>
                              <hr/>
                              <div className="col-md-12 mb-4">
                                  <p className="fs-5"><b>Close Account</b></p>
                                  <a href="#" className="btn btn-outline-dark">Close My Account</a>
                              </div>
                              <hr/>
                              <div className="col-md-12 mb-4">
                              <a href="#" className="btn btn-outline-primary text-start active">Save Setting</a> 
                            </div>
                        </div>
                    </div>
                  </aside>
          </div>
           
                </div>
              </div>
         
  )
  
}