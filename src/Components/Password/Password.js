import react from "react";
import { Link } from "react-router-dom";

export default function password() {
    return (
        <div class="container">
            <div className="show">

                <div id="divright" class="col-md-12 shadow-lg p-3 mb-5 bg-body rounded">
                    <div class="container">
                        <form class="row g-3 d-flex flex-column">
                            <p class="fs-1"><b>Password</b></p>
                            <hr />
                            <div className="col-md-6">
                                <p className="fs-5"><b>Change Password</b></p>
                                <label for="Password" className="form-label"><b>Password</b></label>
                                <input type="password" className="form-control" id="Password" />
                            </div>
                            <div className="col-md-6">
                                <label for="NewPassword" className="form-label"><b>New Password</b></label>
                                <input type="password" className="form-control" id="NewPassword" />
                            </div>
                            <div className="col-md-6">
                                <label for="Confirm" className="form-label"><b>Confirm Password</b></label>
                                <input type="password" className="form-control" id="Confirm" />
                            </div>

                            <div className="col-12">
                                <button type="submit" className="btn btn-primary">Save Setting</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )

}
