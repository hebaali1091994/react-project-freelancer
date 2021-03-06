import React from 'react'
import { Link } from "react-router-dom";

function Membership() {
    return (
        <div className="container">
            <div className="row">
                <div className="show">
                    <aside id="asideright" className="col-md-12 shadow-lg p-3 mb-5 bg-body rounded">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <p className="fs-1"><b>Membership</b>
                                    </p>
                                </div>
                                <hr />
                                <article className="col-md-6 mb-5">
                                    <p className="fs-5"><b>Free</b>
                                    </p>
                                    <p>$0 Per month</p>
                                    <a href="#" className="btn btn-outline-dark">Manage</a>
                                </article>

                                <p className="fs-5"><b>Billing information</b>
                                </p>
                                <a href="#" className="text-decoration-none">View Transaction History</a>
                                <a href="#" className="text-decoration-none"> Manage Payment Mehtods</a>

                                <div className="alert alert-success col-md-12" role="alert">
                                    <strong>You are eligible for free Plus membership.</strong>To Claim your free 1 month trial,
                                    <a href="#" className="text-decoration-none"><b>Click here.</b>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>

            </div>
        </div>
    )
}
export default Membership;
