import react from "react";
import { Link } from "react-router-dom";

export default function password() {
    return(
        <div className="container">
        <div className="row">
        <div classNameName="show">
        <aside id="asideleft" className="col-md-3">
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
                    <form className="row g-3 d-flex flex-column">
                        <p className="fs-1"><b>Password</b></p>
                        <hr/>
                        <div className="col-md-6">
                            <p className="fs-5"><b>Change Password</b></p>
                            <label for="Password" className="form-label"><b>Password</b></label>
                            <input type="password" className="form-control" id="Password"/>
                        </div>
                        <div className="col-md-6">
                            <label for="NewPassword" className="form-label"><b>New Password</b></label>
                            <input type="password" className="form-control" id="NewPassword"/>
                        </div>
                        <div className="col-md-6">
                            <label for="Confirm" className="form-label"><b>Confirm Password</b></label>
                            <input type="password" className="form-control" id="Confirm"/>
                        </div>
                       
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Save Setting</button>
                        </div>
                    </form>
                </div>
            </aside>
        </div>
        
        </div>
    </div>
    )
    
}
