import React from 'react'
import { Link } from "react-router-dom";

 function AccountSecurity() {
    return (
        <div className="container sec">
        <div className="row">
        <div className="show">

            <aside id="asideright" className="col-md-12 shadow-lg p-3 mb-5 bg-body rounded">
                <div className="container">
                    <div className="row">
                        <p className="fs-1"><b>Account Security</b></p>
                        <hr/>
                        <div className="col-md-12">
                            <svg xmlns="http://www.w3.org/2000/svg" style={{display: "none"}}>
                                <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                </symbol>
                                <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
                                    <path
                                        d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                                </symbol>
                                <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
                                    <path
                                        d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                </symbol>
                            </svg>
                            <div className="alert  d-flex align-items-center" role="alert">
                                <svg className="bi flex-shrink-0 me-2 text-warning" width="24" height="24" role="img"
                                    aria-label="info:">
                                    <use xlinkHref="#info-fill" />
                                </svg>
                                <div>
                                    <b>Two-Factor Authentication</b>
                                </div>
                            </div>
                        </div>
                        <div className="alert alert-warning col-md-12" role="alert">
                            <strong>You must verify your email before you cna enable two factor authentication</strong>
                        </div>
                        <div className="col-md-12 mb-4">
                            <p>Your account does not have two-factor authentication turned on.</p>
                            <p>
                                Two-factor authentication ensures that only devices you trust are able to access your
                                Freelancer.com account. Whenever a new device attempts to login to your account, you
                                will be required to confirm the login by using a code sent to your email address or
                                phone number.
                            </p>
                            <a href="#home" className="text-decoration-none"><b>Learn more</b></a>
                            <a href="#home" className="btn btn-primary float-end">Get Started</a>
                        </div>
                        <div style={{clear: "both"}}></div>
                        <hr/>
                        <div className="col-md-12">
                            <p className="fs-5"><b>Login Devices</b></p>
                            <p>The following are the most recent devices that have logged into your account in the last 30 days.
                                suspicious? Contact Us at <a href="#home" className="text-decoration-none linksupport"><b>Support@freelancer.com</b></a></p>
                            <div className="mx-md-5 win10" style={{width: "15rem"}}>
                                <p><b>Win10(Chrome Generic)(Web)</b>
                                london,United Kingdom<br/>
                                Last login at Oct 9,2021 at 12:18 PM BST</p>
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
export default AccountSecurity;
