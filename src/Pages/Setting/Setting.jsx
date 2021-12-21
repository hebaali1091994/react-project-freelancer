import React from 'react'
import Account from './../../Components/Account/Account';
import Email from './../../Components/Email/Email';
import Membership from './../../Components/Membership/Membership';
import Password from './../../Components/Password/Password';
import Payment from './../../Components/Payment/Payment';
import Trust from './../../Components/Trust/Trust';
import AccountSecurity from './../../Components/AccountSecurity/AccountSecurity';
import "./Setting.css"
import { Link } from 'react-router-dom';
import Header from './../../Components/header/Header';
const Setting = () => {
    return (
        <div>
    <Header/>
  <div class="Setting bg-light  pt-5">
    <div class="container">
    <div class="d-flex align-items-start">

  <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <Link to="" class="nav-link active setting-title" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home"  role="tab" aria-controls="v-pills-home" aria-selected="true">Email & Notifications</Link>
    <Link class="nav-link setting-title" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" to="" role="tab" aria-controls="v-pills-profile" aria-selected="false">Membership</Link>
    <button class="nav-link setting-title " id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages"  role="tab" aria-controls="v-pills-messages" aria-selected="false">Password</button>
    <Link to="" class="nav-link setting-title" id="v-pills-Payment-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Payment"  role="tab" aria-controls="v-pills-Payment" aria-selected="false">Payment & Financials</Link>
    <Link to="" class="nav-link setting-title" id="v-pills-Security-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Security"  role="tab" aria-controls="v-pills-Security" aria-selected="false">Account Security</Link>
    <Link to="" class="nav-link setting-title" id="v-pills-Trust-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Trust"  role="tab" aria-controls="v-pills-Trust" aria-selected="false">Trust & Verification</Link>
    <Link  to="" class="nav-link setting-title" id="v-pills-Account-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Account"  role="tab" aria-controls="v-pills-Account" aria-selected="false">Account</Link>
  </div>
  <div class="tab-content w-200" id="v-pills-tabContent">
    <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"><Account/></div>
    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"><Email/></div>
    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab"><Membership/></div>
    <div class="tab-pane fade" id="v-pills-Payment" role="tabpanel" aria-labelledby="v-pills-Payment-tab"><Password/></div>
     <div class="tab-pane fade" id="v-pills-Payment" role="tabpanel" aria-labelledby="v-pills-Payment-tab"><Payment/></div>
      <div class="tab-pane fade" id="v-pills-Security" role="tabpanel" aria-labelledby="v-pills-Security-tab"><AccountSecurity/></div>
       <div class="tab-pane fade" id="v-pills-Trust" role="tabpanel" aria-labelledby="v-pills-Trust-tab"><Trust/></div>
        <div class="tab-pane fade" id="v-pills-Account" role="tabpanel" aria-labelledby="v-pills-Account-tab"><Account/></div>
  </div>
</div>
</div></div>

        </div>
    )
}

export default Setting
