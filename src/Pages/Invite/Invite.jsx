// import React from 'react'

// const Invite = () => {
//     return (
//         <div>
//                 <section class="Invite">
//         <div class="container-fluid">
//             <div class="row">
//                 <div class="text-content col">
//                     <div class="content">
//                         <h2>Invite a friend and you'll both get $20 USD*</h2>
//                         <p>If you enjoy using Freelancer, share it with friends and colleagues 
//                             to earn free credits.
//                         </p>
//                     </div>
//                 </div>
//                 <div class="content-img col">
//                     <img src="/images/2.png" alt=""/>
//                 </div>
//             </div>
//         </div>
//     </section>

//     <section class="card">
//         <div class="container">
//             <div class="row">
//                 <div class="card shadow">
//                     <div class="card-header">
//                         <h3>Refer by email</h3>
//                         <p>Enter your contacts manually and we'll invite them for you.</p>
//                     </div>
//                     <div class="card-body">
//                         <input type="email" class="form-control p-5" placeholder="Type your email address here"/><br>
//                         <p>$0 USD in potential account credits</p>
//                         <button class="btn-primary px-4">Send invites</button>
                        
//                         <span class="ico">
//                             <span>Or import</span>

//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>

//     <section class="progress-section">
//         <div class="container">
//             <div class="row">
//                 <div class="progress-content">
//                     <h2>Number of Friends Invited</h2>
//                     <div class="progress">
//                         <div
//                             class="progress-bar"
//                             role="progressbar"
//                             style="width: 2%;"
//                             aria-valuenow="2"
//                             aria-valuemin="0"
//                             aria-valuemax="100"
//                         ></div>
//                     </div>
//                     <span class="justify-between">POTENTIAL BONUS: $40 USD</span>
//                     <span>2/50</span>
//                 </div>
//             </div>
//         </div>
//     </section>
//     <hr/>
//     <section class="referrals-section">
//         <div class="container">
//             <div class="row">
//                 <h2>How referrals work</h2>
//                 <div class="svg-item col">
//                     <svg width="96" height="96" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g stroke="#139FF0" stroke-width="2" transform="translate(6 9)"><rect x="1" y="1" width="82" height="65" rx="6"/><rect fill="#D0ECFC" x="6" y="6" width="72" height="47" rx="4"/><path d="M30 69.667v6.666m24-6.666v6.666M19 77.5h46" stroke-linecap="square"/></g><path fill="#139FF0" d="M47.514 33.97L50.54 30H59l-6.275 3.97-1.484 8.152L41.937 50l1.772-10L37 33.97h4.295l-.9-3.451z"/></g></svg>
//                     <p>Get your friends to sign up via your custom signup link.</p>
//                 </div>
//                 <div class="svg-item col">

//                     <p>Your friend gets $20 USD to spend on their first project on Freelancer.</p>
//                 </div>
//                 <div class="svg-item col">
//                     <svg width="96" height="96" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><g transform="translate(9 9)" stroke="#139FF0" fill="none" fill-rule="evenodd"><rect stroke-width="2" fill="#FFF" x="6" y="22" width="66" height="56" rx="4"/><rect stroke-width="2" fill="#FFF" x="1" y="20" width="75" height="16" rx="4"/><path stroke-width="1.5" fill="#139FF0" d="M32.75 15.75h14.5v62.5h-14.5z"/><path d="M21.7 1.224A10.043 10.043 0 0 0 16.996 0c-3.5-.03-6.715 1.779-8.39 4.72-2.546 4.473-.818 10.185 3.855 12.732 1.163.634 3.525 1.484 10.575 1.545a110.04 110.04 0 0 0 7.466-.204 2.287 2.287 0 0 0 1.845-1.134 2.196 2.196 0 0 0 .015-2.133c-1.085-2.008-6.698-12.14-10.664-14.302zm36.409 0A10.043 10.043 0 0 1 62.81 0c3.5-.03 6.715 1.779 8.39 4.72 2.546 4.473.818 10.185-3.855 12.732-1.163.634-3.525 1.484-10.575 1.545a110.04 110.04 0 0 1-7.466-.204 2.287 2.287 0 0 1-1.845-1.134 2.194 2.194 0 0 1-.015-2.133c1.085-2.008 6.698-12.14 10.664-14.302z" stroke-width="2"/></g></svg>
//                     <p>You get $20 USD when your friend spends $50 USD on the site.</p>
//                 </div>
//             </div>
//         </div>
//     </section>
//     <hr/>

//     <section class="bonuse-section">
//         <div class="container">
//             <div class="row">
//                 <h1>You have earned <span>$0 USD</span> in bonuses this month.</h1>
//                 <div class="card shadow py-5  px-5" style="width: 100%;">
//                     <table class="table py-5  px-5">
//                         <thead>
//                             <tr>
//                                 <th scope="col">EMAIL</th>
//                                 <th scope="col">STATUS</th>
//                                 <th scope="col">NEXT ACTION</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <th scope="row">yassin_mo@outlook.com</th>
//                                 <td>Pending</td>
//                                 <td>
//                                     <button class=" btn-outline-secondary">Resend Invitation</button>
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <th scope="row">hassan_kh@gmali.com</th>
//                                 <td>Pending</td>
//                                 <td>
//                                     <button class=" btn-outline-secondary">Resend Invitation</button>
//                                 </td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>
//                 <div class="bon-text"> You will receive a $20 USD site credit to be used for specific purposes when your 
//                     friend fully releases a total of $50 USD worth of milestones in projects or contest prizes. 
//                     Your friend will receive a $20 USD site credit to be used for specific purposes on opening 
//                     their new account and verifying their payment method. This offer is subject to specific terms 
//                     and conditions under the heading "Referral Program". This site credit is not redeemable for cash.
//                 </div>
//             </div>
//         </div>
//     </section>

//         </div>
//     )
// }

// export default Invite
