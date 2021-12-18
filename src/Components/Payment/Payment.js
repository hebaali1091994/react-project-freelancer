import react from "react";
import { Link } from "react-router-dom";

export default function Payment() {
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
                    <div className="row">
                        <p className="fs-1"><b>Payment & Financials</b></p>
                        <hr/>
                        <div className="mb-4">
                            <p className="fs-5"><b>Payment Methods</b></p>
                            <a href="#" className="btn btn-outline-dark text-decoration-none"><i
                                    className="bi bi-plus"></i>Payment Methods</a>
                        </div>
                        <div className="mb-4 ">
                            <form className="row g-3 d-flex flex-column">
                                <p><b>Tax information</b></p>
                                <div className="col-md-4">
                                    <label for="validationCustom04" className="form-label">VAT Country</label>
                                    <select className="form-select" id="validationCustom04" required>
                                        <option selected disabled value="">Choose...</option>
                                        <option>...</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please select a valid state.
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <label for="validationCustomUsername" className="form-label">VAT Number</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text" id="inputGroupPrepend">GB</span>
                                        <input type="text" className="form-control" id="validationCustomUsername"
                                            aria-describedby="inputGroupPrepend" required/>
                                        <div className="invalid-feedback">
                                            Please choose a username.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary" type="submit">Add VAT Number</button>
                                </div>
                                <a href="#" className="text-decoration-none">Are you exempt from VAT?</a>
                            </form>
                        </div>
                        <hr/>
                        <div className="mb-4 ">

                            <form className="row g-3 d-flex flex-column">
                                <p><b>Finance Setting</b></p>
                                <div className="col-md-4">
                                    <label for="validationCustom04" className="form-label">My Currency</label>
                                    <select className="form-select" id="validationCustom04" required>
                                        <option selected disabled value="">Choose...</option>
                                        <option>...</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please select a valid state.
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label for="validationCustom04" className="form-label">Account type</label>
                                    <select className="form-select" id="validationCustom04" required>
                                        <option selected disabled value="">Choose...</option>
                                        <option>...</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please select a valid state.
                                    </div>
                                </div>
                                <div className="row">
                                <p><b>Texes(used when you create an invoice for an employer)</b></p>
                                    <div className="col-md-4">
                                        <div className="input-group has-validation">
                                            <input type="text" className="form-control" placeholder="Tex Type" id="validationCustomUsername"
                                                aria-describedby="inputGroupPrepend" required/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="input-group has-validation">
                                            
                                            <input type="text" className="form-control" placeholder="Rate" id="validationCustomUsername"
                                                aria-describedby="inputGroupPrepend" required/>
                                                <span className="input-group-text" id="inputGroupPrepend">%</span>
                                            <div className="invalid-feedback">
                                                Please choose a username.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="input-group has-validation">
                                            <input type="text" className="form-control" placeholder="Tax ID or Company No" id="validationCustomUsername"
                                                aria-describedby="inputGroupPrepend" required/>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mt-3">
                                        <a href="#" className="btn btn-outline-dark text-decoration-none"><i
                                                className="bi bi-plus"></i>Another Tax</a>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary" type="submit">Save Setting</button>
                                </div>
                                <a href="#" className="text-decoration-none">Are you exempt from VAT?</a>
                            </form>
                        </div>
                    </div>
                </div>
                </aside>
            </div>

         
             </div>
        </div>

     
    )
    
}