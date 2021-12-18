import react from "react";
import { Link } from "react-router-dom";

export default function password() {
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
                    <form class="row g-3 d-flex flex-column">
                        <p class="fs-1"><b>Password</b></p>
                        <hr/>
                        <div class="col-md-6">
                            <p class="fs-5"><b>Change Password</b></p>
                            <label for="Password" class="form-label"><b>Password</b></label>
                            <input type="password" class="form-control" id="Password"/>
                        </div>
                        <div class="col-md-6">
                            <label for="NewPassword" class="form-label"><b>New Password</b></label>
                            <input type="password" class="form-control" id="NewPassword"/>
                        </div>
                        <div class="col-md-6">
                            <label for="Confirm" class="form-label"><b>Confirm Password</b></label>
                            <input type="password" class="form-control" id="Confirm"/>
                        </div>
                       
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary">Save Setting</button>
                        </div>
                    </form>
                </div>
            </aside>
        </div>
        
        </div>
    </div>
    )
    
}
