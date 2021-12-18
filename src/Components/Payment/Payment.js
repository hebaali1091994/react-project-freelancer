import react from "react";
import { Link } from "react-router-dom";

export default function Payment() {
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
                        <p class="fs-1"><b>Payment & Financials</b></p>
                        <hr/>
                        <div class="mb-4">
                            <p class="fs-5"><b>Payment Methods</b></p>
                            <a href="#" class="btn btn-outline-dark text-decoration-none"><i
                                    class="bi bi-plus"></i>Payment Methods</a>
                        </div>
                        <div class="mb-4 ">
                            <form class="row g-3 d-flex flex-column">
                                <p><b>Tax information</b></p>
                                <div class="col-md-4">
                                    <label for="validationCustom04" class="form-label">VAT Country</label>
                                    <select class="form-select" id="validationCustom04" required>
                                        <option selected disabled value="">Choose...</option>
                                        <option>...</option>
                                    </select>
                                    <div class="invalid-feedback">
                                        Please select a valid state.
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <label for="validationCustomUsername" class="form-label">VAT Number</label>
                                    <div class="input-group has-validation">
                                        <span class="input-group-text" id="inputGroupPrepend">GB</span>
                                        <input type="text" class="form-control" id="validationCustomUsername"
                                            aria-describedby="inputGroupPrepend" required/>
                                        <div class="invalid-feedback">
                                            Please choose a username.
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-primary" type="submit">Add VAT Number</button>
                                </div>
                                <a href="#" class="text-decoration-none">Are you exempt from VAT?</a>
                            </form>
                        </div>
                        <hr/>
                        <div class="mb-4 ">

                            <form class="row g-3 d-flex flex-column">
                                <p><b>Finance Setting</b></p>
                                <div class="col-md-4">
                                    <label for="validationCustom04" class="form-label">My Currency</label>
                                    <select class="form-select" id="validationCustom04" required>
                                        <option selected disabled value="">Choose...</option>
                                        <option>...</option>
                                    </select>
                                    <div class="invalid-feedback">
                                        Please select a valid state.
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label for="validationCustom04" class="form-label">Account type</label>
                                    <select class="form-select" id="validationCustom04" required>
                                        <option selected disabled value="">Choose...</option>
                                        <option>...</option>
                                    </select>
                                    <div class="invalid-feedback">
                                        Please select a valid state.
                                    </div>
                                </div>
                                <div class="row">
                                <p><b>Texes(used when you create an invoice for an employer)</b></p>
                                    <div class="col-md-4">
                                        <div class="input-group has-validation">
                                            <input type="text" class="form-control" placeholder="Tex Type" id="validationCustomUsername"
                                                aria-describedby="inputGroupPrepend" required/>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="input-group has-validation">
                                            
                                            <input type="text" class="form-control" placeholder="Rate" id="validationCustomUsername"
                                                aria-describedby="inputGroupPrepend" required/>
                                                <span class="input-group-text" id="inputGroupPrepend">%</span>
                                            <div class="invalid-feedback">
                                                Please choose a username.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="input-group has-validation">
                                            <input type="text" class="form-control" placeholder="Tax ID or Company No" id="validationCustomUsername"
                                                aria-describedby="inputGroupPrepend" required/>
                                        </div>
                                    </div>
                                    <div class="col-md-4 mt-3">
                                        <a href="#" class="btn btn-outline-dark text-decoration-none"><i
                                                class="bi bi-plus"></i>Another Tax</a>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-primary" type="submit">Save Setting</button>
                                </div>
                                <a href="#" class="text-decoration-none">Are you exempt from VAT?</a>
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