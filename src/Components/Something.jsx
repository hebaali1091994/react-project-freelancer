import React from 'react'
import './Something.css'

import postaproject from '../public/imgHome/postaproject.svg'
import work from '../public/imgHome/work.svg'
import paysafely from '../public/imgHome/paysafely.svg'
import aboutme from '../public/imgHome/aboutme.svg'
import browseportfolios from '../public/imgHome/browseportfolios.svg'
import bidsalt from '../public/imgHome/bidsalt.svg'
import rankhigher from '../public/imgHome/rankhigher.svg'
import trackprogress from '../public/imgHome/trackprogress.svg'

export default function Something() {
    return (
            <div class="container">
         <div class="row">
            <div class="topSection col-md-12 mt-5">
                <p class="titleheder"><b>Need something done?</b></p>
                <div class="row">
                    <div class="col-md-3">
                        <div class="row">
                            <div class="col-md-12 d-flex mb-4">
                                <img src={postaproject}/>
                                <p class="titlePhoto my-auto"><b>Post a job</b></p>
                            </div>
                            <div class="article col-md-12">
                                <p>It’s free and easy to post a job. Simply fill in a title, description and budget
                                    and competitive bids come within minutes.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="row">
                            <div class="col-md-12 d-flex mb-4">
                                <img src={work}/>

                                <p class="titlePhoto my-auto"><b>Choose freelancers</b></p>
                            </div>
                            <div class=" article col-md-12">
                                <p>No job is too big or too small. We've got freelancers for jobs of any size or
                                    budget,across 1800+ skills. No job is too complex. We can get it done.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="row">
                            <div class="col-md-12 d-flex mb-4">
                                <img src={paysafely}/>
                                <p class="titlePhoto my-auto"><b>Pay safely</b></p>
                            </div>
                            <div class="article col-md-12">
                                <p>Only pay for work when it has been completed and you're100% satisfied with the
                                    quality using our milestone payment system..</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="row">
                            <div class="col-md-12 d-flex mb-4">
                                <img src={aboutme}/>
                                <p class="titlePhoto my-auto"><b>We’re here to help</b></p>
                            </div>
                            <div class="article col-md-12">
                                <p>Our talented team of recruiters can help you find the best freelancer for the job and
                                    our technical co-pilots can even manage the project for you..</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            {/* <!-- ---------------------------------------------------------------------- --> */}
            <div class="downSection col-md-12">
                <div class="row">
                    <p class="titleheder mt-5"><b>What's great about it?</b></p>
                    <div class="row">
                        <div class="col-md-3">
                            <div class="row">
                                <div class="col-md-12 d-flex mb-4">
                                    <img src={browseportfolios}/>
                                    <p class="titlePhoto my-auto"><b>Browse portfolios</b></p>
                                </div>
                                <div class="article col-md-12">
                                    <p>Find professionals you can trust by browsing their samples of previous work and
                                        reading their profile reviews..</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="row">
                                <div class="col-md-12 d-flex mb-4">
                                    <img src={bidsalt}/>
                                    <p class="titlePhoto my-auto"><b>Fast bids</b></p>
                                </div>
                                <div class=" article col-md-12">
                                    <p>Receive obligation free quotes from our talented freelancers fast. 80% of
                                        projects get bid on within 60 seconds..</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="row">
                                <div class="col-md-12 d-flex mb-4">
                                    <img src={rankhigher}/>
                                    <p class="titlePhoto my-auto"><b>Quality workPay</b></p>
                                </div>
                                <div class="article col-md-12">
                                    <p>Freelancer.com has by far the largest pool of quality freelancers globally- over
                                        50 million to choose from.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="row">
                                <div class="col-md-12 d-flex mb-4">
                                    <img src={trackprogress}/>
                                    <p class="titlePhoto my-auto"><b>Track progress</b></p>
                                </div>
                                <div class="article col-md-12">
                                    <p>Keep up-to-date and on-the-go with our time tracker, and mobile app. Always know
                                        what freelancers are up to.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           <hr/>
         {/*  _____________________________________________________________________________________________________________________________ */}
           

        </div>
        </div>


      
    )
}