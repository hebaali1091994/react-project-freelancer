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
import i18next from "i18next";
import '../i18n'
import { useTranslation } from 'react-i18next';

export default function Something() {

    const { t, i18n } = useTranslation();
    let lang=localStorage.getItem('lang')||'en'
 const change= (option)=> 
  {

    localStorage.setItem('lang',option.target.value)
     lang=localStorage.getItem('lang')||'en'
    i18next.changeLanguage(lang)
    // window.location.reload()
    console.log("lang", lang);
    console.log("option.target.value", option.target.value);
  }
    return (
            <div className="container">
         <div className="row">
            <div className="topSection col-md-12 mt-5">
                <p className="titleheder"><b>{t("Need something done?")}</b></p>
                <div className="row">
                    <div className="col-xl-3 col-md-6 col-sm-12">
                        <div className="row">
                            <div className="col-md-12 d-flex mb-4">
                                <img src={postaproject}/>
                                <p className="titlePhoto my-auto"><b>{t("Post a job")}</b></p>
                            </div>
                            <div className="article col-md-12">
                                <p>{t("It’s free and easy to post a job. Simply fill in a title, description and budget and competitive bids come within minutes.")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-12">
                        <div className="row">
                            <div className="col-md-12 d-flex mb-4">
                                <img src={work}/>

                                <p className="titlePhoto my-auto"><b>{t("Choose freelancers")}</b></p>
                            </div>
                            <div className=" article col-md-12">
                                <p>{t("No job is too big or too small. We've got freelancers for jobs of any size or budget,across 1800+ skills. No job is too complex. We can get it done.")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-12">
                        <div className="row">
                            <div className="col-md-12 d-flex mb-4">
                                <img src={paysafely}/>
                                <p className="titlePhoto my-auto"><b>{t("Pay safely")}</b></p>
                            </div>
                            <div className="article col-md-12">
                                <p>{t("Only pay for work when it has been completed and you're100% satisfied with the quality using our milestone payment system..")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-12">
                        <div className="row">
                            <div className="col-md-12 d-flex mb-4">
                                <img src={aboutme}/>
                                <p className="titlePhoto my-auto"><b>{t("We’re here to help")}</b></p>
                            </div>
                            <div className="article col-md-12">
                                <p>{t("Our talented team of recruiters can help you find the best freelancer for the job and our technical co-pilots can even manage the project for you..")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            {/* <!-- ---------------------------------------------------------------------- --> */}
            <div className="downSection col-md-12">
                <div className="row">
                    <p className="titleheder mt-5"><b>{t("What's great about it?")}</b></p>
                    <div className="row">
                        <div className="col-xl-3 col-md-6 col-sm-12">
                            <div className="row">
                                <div className="col-md-12 d-flex mb-4">
                                    <img src={browseportfolios}/>
                                    <p className="titlePhoto my-auto"><b>{t("Browse portfolios")}</b></p>
                                </div>
                                <div className="article col-md-12">
                                    <p>{t("Find professionals you can trust by browsing their samples of previous work and reading their profile reviews..")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 col-sm-12">
                            <div className="row">
                                <div className="col-md-12 d-flex mb-4">
                                    <img src={bidsalt}/>
                                    <p className="titlePhoto my-auto"><b>{t("Fast bids")}</b></p>
                                </div>
                                <div className=" article col-md-12">
                                    <p>{t("Receive obligation free quotes from our talented freelancers fast. 80% of projects get bid on within 60 seconds..")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 col-sm-12">
                            <div className="row">
                                <div className="col-md-12 d-flex mb-4">
                                    <img src={rankhigher}/>
                                    <p className="titlePhoto my-auto"><b>{t("Quality workPay")}</b></p>
                                </div>
                                <div className="article col-md-12">
                                    <p>{t("Freelancer.com has by far the largest pool of quality freelancers globally- over 50 million to choose from.")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 col-sm-12">
                            <div className="row">
                                <div className="col-md-12 d-flex mb-4">
                                    <img src={trackprogress}/>
                                    <p className="titlePhoto my-auto"><b>{t("Track progress")}</b></p>
                                </div>
                                <div className="article col-md-12">
                                    <p>{t("Keep up-to-date and on-the-go with our time tracker, and mobile app. Always know what freelancers are up to.")}</p>
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
