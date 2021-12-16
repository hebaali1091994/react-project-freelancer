import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Proposals.css'
import Nav2 from './Nav2'
import Footer from '../../Components/Footer';
import { PayPalButton } from "react-paypal-button-v2";
export default function Proposals(){
  const[state, setstate] = useState(0)
    return (
      <div className="parent ">
          <Nav2/>
        <div className="container">
        
          <div className="row">
       
            <div className="col-md-8">
          
              <div className="row">
                <div className="col-md-12 bg-white mt-2 dddd pl-4 py-4">
                  <div className="alert  svgg">
                      <div className='d-flex'>
                    <svg
                      width="4%"
                      height="17%"
                      fill="red"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      fit=""
                      preserveAspectRatio="xMidYMid meet"
                      focusable="false"
                    >
                      <path
                        d="M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 12,2 Z M13,17 L11,17 L11,15 L13,15 L13,17 Z M13,13 L11,13 L11,7 L13,7 L13,13 Z"
                        fill-rule="nonzero"
                      ></path>
                    </svg>
                    <h6>Email verification required</h6>
                    </div>
                    <p style={{marginLeft:"35px"}}>
                      We noticed that you have not verified your email yet.
                      Please check the email we sent to dsda@gmail. com to
                      activate your account and continue posting your project.
                      <Link to="#">Resend Email</Link>
                    </p>
                  </div>
                </div>

                <div className="col-md-12 bg-white mt-3 part2 d-flex justify-content-center align-items-center" style={{height:"400px"}}>
                    <div>
                  <img
                    ngcontent-webapp-c127=""
                    class=" ImageElement"
                    src="https://www.f-cdn.com/assets/main/en/assets/project-view/project_frozen.svg"
                    alt="Project frozen"
                    data-aspect-ratio="false"
                  />
                  <h6 style={{ textAlign: 'center' }}>
                    This project is closed for bidding
                  </h6>
                  <p>
                    There are no bids on this project. Try{' '}
                    <Link to="#">reposting this project</Link> to get more bids.
                  </p>
                </div>
                </div>
              </div>



              <div className="col-md-12 bg-white mt-3 part2 d-flex justify-content-center align-items-center" style={{height:"400px"}}>


              <div>
<input type="number" value={state}  onChange={e=>{setstate(e.target.value)}}/>

            <PayPalButton
    
            options={{
                clientId:"AbT1_mgcwnlpz_sqRm6u7W3nXN_Xikce50VB8_E1VPL6-mHUT0sD7RFx2ar0BvAMPTco1iHdgUKYaQx5",
                currency:"USD"
    
            }}
            amount={state}
            // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
            onSuccess={(details, data) => {
              alert("Transaction completed by " + details.payer.name.given_name);
    
              // OPTIONAL: Call your server to save the transaction
              return fetch("/paypal-transaction-complete", {
                method: "post",
                body: JSON.stringify({
                  orderID: data.orderID
                })
              });
            }}
          />
        </div>




                </div>












            </div>
          
          <div className="col-4  ml-8 mt-2">
            <div className='row'>  
            <div className='col-12'>
            <div className="content bg-white w-100 py-3 px-2 d-flex justify-content-around mr-3 ">
              <div > <p style={{borderRight:".6px solid #888" ,paddingRight:"70px",boxSizing:"border-box",textAlign:"center"}}>Bids<br/>0</p></div>   
              <p style={{borderBottom:"1px solid #000",borderWidth:"2%"}}>Avg bid</p>
            </div>
            
            <div className='col-12 card my-3 border-0'>

             
                        <h5 class="card-header bg-white pl-0" >Get started</h5>
                        <div class="card-body">
                       
                                <ul className="list-unstyled footer-list-item">
                                    <li className="inner ">
                                                <div className='rr'>

                                                <i class="fas fa-check footer-list-item-icon mr-4 ml-3" style={{color:"#999"}}></i>
                                                <span className=' '>Verify your email address
                                                </span>
                                                
                                                </div>
                                        </li>
                                        <li className="inner ">
                                                <div className='rr'>
                                            
                                                <i class="fas fa-check footer-list-item-icon mr-4" style={{color:"#999"}}></i>
                                                <Link to="#">Add payment method</Link> 
                                            
                                                
                                                </div>
                                        </li>
                                </ul>
                        </div>
                
            </div>
            <div className='col-12 card my-3 border-0'>

             
                        <h5 class="card-header bg-white pl-0" >Not sure who to hire?</h5>
                        <div class="card-body">
                                <div style={{textAlign:"center" , margin:"10px 0"}}>
                                       <img _ngcontent-webapp-c127="" class="ImageElement " src="https://www.f-cdn.com/assets/main/en/assets/project-view-page/icons-big/recruiter-logo.svg" alt="Recruiter Logo" data-aspect-ratio="false"/>
                                </div>
                                <p className='bold'>
                                    Our expert Recruiters will find you the perfect freelancer. Upgrade your project to Recruiter now and get a handpicked freelancer recommendation that matches your requirements.
                                </p>
                                <button className='btn w-100 btn-primary '>upgrade to recruiter</button>
                                
                        </div>
                
            </div>
            </div>
            </div>
          </div>
        </div>
        </div>
        <Footer/>
      </div>
    )
  }