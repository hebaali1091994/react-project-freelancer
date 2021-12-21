import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Proposals.css'
import Nav2 from './Nav2'
import Footer from '../../Components/Footer';
import { PayPalButton } from "react-paypal-button-v2";
import { useContext } from 'react';
import { Context } from "../../context/Context";
import { useNavigate, useLocation } from 'react-router-dom';

import axios from 'axios';
import SingleProposer from '../../Components/SingleProposer/SingleProposer';
export default function Proposals() {
  const [state, setstate] = useState(0);
  const { user } = useContext(Context)
  const location = useLocation();
  const path = location.pathname.split('/')[3];
  const [Freelancer, setFreelancer] = useState([])
  useEffect(() => {
    const getProjects = async () => {

      const res = await axios.get('/Project/oneproject/' + path);
      setFreelancer(res.data);
    }
    getProjects();
  }, [path]);

  let freelancerdata = Freelancer.freelances;

  return (
    <div className="parent ">
      <Nav2 />
      <div className='bg-data pb-5'>
        <div className="container">

          <div className="row">

            <div className="col-md-8 mt-5">

              <div className="row">
                {freelancerdata.map((f) => (
                  <SingleProposer key={f.id} f={f} Freelancer={Freelancer} />
                ))}



              </div>
              <div className="col-md-12 bg-white mt-3 part2 d-flex justify-content-center align-items-center"
                style={{ height: "400px" }}>
                <div>
                  <input type="number" value={state} onChange={e => { setstate(e.target.value) }} />

                  <PayPalButton

                    options={{
                      clientId: "AbT1_mgcwnlpz_sqRm6u7W3nXN_Xikce50VB8_E1VPL6-mHUT0sD7RFx2ar0BvAMPTco1iHdgUKYaQx5",
                      currency: "USD"

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
                  <div className="content bg-white w-100 py-3 px-2 d-flex justify-content-around mr-3 mt-5 ">
                    <div > <p style={{ borderRight: ".6px solid #888", paddingRight: "70px", boxSizing: "border-box", textAlign: "center" }}>Bids<br />0</p></div>
                    <p style={{ borderBottom: "1px solid #000", borderWidth: "2%" }}>Avg bid</p>
                  </div>

                  <div className='col-12 card my-3 border-0'>


                    <h5 class="card-header bg-white pl-0" >Get started</h5>
                    <div class="card-body">

                      <ul className="list-unstyled footer-list-item">
                        <li className="inner ">
                          <div className='rr'>

                            <i class="fas fa-check footer-list-item-icon mr-4 ml-3" style={{ color: "#999" }}></i>
                            <span className=' '>Verify your email address
                            </span>

                          </div>
                        </li>
                        <li className="inner ">
                          <div className='rr'>

                            <i class="fas fa-check footer-list-item-icon mr-4" style={{ color: "#999" }}></i>
                            <Link to="#">Add payment method</Link>


                          </div>
                        </li>
                      </ul>
                    </div>

                  </div>
                  <div className='col-12 card my-3 border-0'>


                    <h5 class="card-header bg-white pl-0" >Not sure who to hire?</h5>
                    <div class="card-body">
                      <div style={{ textAlign: "center", margin: "10px 0" }}>
                        <img _ngcontent-webapp-c127="" class="ImageElement " src="https://www.f-cdn.com/assets/main/en/assets/project-view-page/icons-big/recruiter-logo.svg" alt="Recruiter Logo" data-aspect-ratio="false" />
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
      </div>
      <Footer />
    </div>
  )
}