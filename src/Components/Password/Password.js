import react from "react";
import { Link } from "react-router-dom";

export default function password() {
    return(
        <div class="container">
        <div className="show">

            <div id="divright" class="col-md-12 shadow-lg p-3 mb-5 bg-body rounded">
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
            </div>
        </div>
        
        </div>
    )
    
}
