import React from 'react'
import Footer from '../../Components/Footer'
import Nav2 from "./Nav2";
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import BidProject from './BidProject/BidProject';
import "./DetailsData.css"
import { Context } from "../../context/Context";

const DetailsData = () => {
    const location = useLocation();
    const { user } = useContext(Context)

    const path = location.pathname.split('/')[3];
    console.log(path);

    const [Project, setProject] = useState({})
    useEffect(() => {
        const getProject = async () => {
            const res = await axios.get(`/Project/oneproject/${path}`, {
                headers: {
                    token: user.accesToken
                }
            })
            setProject(res.data);
            console.log(res.data);

        }
        getProject();
    }, [path]);
    console.log(Project)

    return (
        <div>
            <div className="parent DetailsData ">
                <div className="bg-data pb-5">
                    <Nav2 />
                    <div className="container">
                        {Project.state === "Pending" ?
                            <div class="wrap">
                                <div className="row">
                                    <div className="col-md-9">
                                        <div class="text">Please Wait For Accepted</div>
                                    </div>
                                </div>
                            </div>


                            :

                            <div className="row">
                                <div className="col-md-9">
                                    <div className="col-ms-5 col-md-12 mt-2 bg-white"
                                        style={{ overflow: 'hidden' }}
                                    >
                                        <div className="row">
                                            <div className="col-md-12 bg-white mt-2 ">
                                                <div className="content m-2 w-100 p-relative">
                                                    <div className=" d-flex justify-content-between deailtsProejct ">
                                                        <h5 className="ProjectTitle">Project Details</h5>
                                                        <div className="ProjectTime pe-3">
                                                            <h6>{Project.Minimum_Per_hour} - {Project.Maximum_Per_hour} {Project.step_Four_Currency_code}</h6>
                                                            <span style={{ fontSize: '12px', fontWeight: '600' }}>
                                                                {new Date(Project.createdAt).toDateString()}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="">
                                                        <div
                                                            className=" d-flex justify-content-start  "
                                                            style={{ position: 'relative' }}
                                                        >
                                                            <div className="my-4">
                                                                <p class="">
                                                                    {Project.Tellus}

                                                                </p>
                                                                <h5>Skills Requiredsss</h5>

                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <BidProject />

                                    </div>
                                    <div className="col-ms-5 col-md-12 mt-2 bg-white" style={{ overflow: 'hidden' }}>
                                        <div className="row">
                                            <div className="col-ms-5 col-md-12">
                                                <div className="row">
                                                    <div className="col-md-4 d-flex align-items-center">
                                                        <div className="form-check">
                                                            <label className="form-check-label" for="flexCheckDefault">
                                                                <input
                                                                    className="form-check-input "
                                                                    type="checkbox"
                                                                    id="GUARANTEED"
                                                                    name="GUARANTEED"
                                                                />
                                                                <p>
                                                                    <b>FREE</b>
                                                                </p>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-ms-12 col-md-4 mx-auto d-flex align-items-center">
                                                        <span
                                                            class="badge bg-success px-3"
                                                            style={{ width: '100%' }}
                                                        >
                                                            GUARANTEED
                                                        </span>
                                                    </div>
                                                    <div className="col-ms-5 col-md-4">
                                                        <p>
                                                            Guarantee freelancers that a winner will be chosen and
                                                            awarded the prize. This will attract better entries from
                                                            more freelancers. Moneyback guarantee is not applicable
                                                            if a contest has a guaranteed upgrade.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            {/* --------------------------------------------------------2-------------------------------------------------*/}

                                            <div className="col-md-12">
                                                <div className="row">
                                                    <div className="col-sm-12 col-md-4 d-flex align-items-center">
                                                        <div class="form-check">
                                                            <label class="form-check-label" for="flexCheckDefault">
                                                                <input
                                                                    class="form-check-input"
                                                                    type="checkbox"
                                                                    name="FEATURED"
                                                                    id="FEATURED"
                                                                />
                                                                <p>
                                                                    <b>1,500.00</b>
                                                                </p>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 col-md-4 mx-auto d-flex align-items-center">
                                                        <span
                                                            class="badge bg-danger px-4"
                                                            style={{ width: '100%' }}
                                                        >
                                                            FEATURED
                                                        </span>
                                                    </div>
                                                    <div className="col-sm-12 col-md-4 d-flex align-items-center">
                                                        <p>
                                                            Attract more freelancers with a prominent placement in
                                                            our 'Featured Jobs and Contests' page
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            {/* --------------------------------------------------------3-------------------------------------------------*/}
                                            <div className="col-md-12">
                                                <div className="row">
                                                    <div className="col-md-4 d-flex align-items-center">
                                                        <div class="form-check">
                                                            <label class="form-check-label" for="flexCheckDefault">
                                                                <input
                                                                    class="form-check-input"
                                                                    type="checkbox"
                                                                    name="TOP_CONTEST"
                                                                    id="TOP_CONTEST"
                                                                />
                                                                <p>
                                                                    <b>1,500.00</b>
                                                                </p>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 col-md-4 mx-auto d-flex align-items-center">
                                                        <span
                                                            class="badge bg-secondary px-3"
                                                            style={{ width: '100%' }}
                                                        >
                                                            TOP CONTEST
                                                        </span>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <p>
                                                            We will contact our top freelancers to join your
                                                            contest.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            {/* --------------------------------------------------------4-------------------------------------------------*/}
                                            <div className="col-md-12">
                                                <div className="row">
                                                    <div className="col-md-4 d-flex align-items-center">
                                                        <div class="form-check">
                                                            <label class="form-check-label" for="flexCheckDefault">
                                                                <input
                                                                    class="form-check-input"
                                                                    type="checkbox"
                                                                    name="HIGHLIGHT"
                                                                    id="HIGHLIGHT"
                                                                />
                                                                <p>
                                                                    <b>750.00</b>
                                                                </p>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mx-auto d-flex align-items-center">
                                                        <span
                                                            class="badge bg-info text-dark px-4"
                                                            style={{ width: '100%' }}
                                                        >
                                                            HIGHLIGHT
                                                        </span>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <p>
                                                            Make your contest more visible in our main job search
                                                            pages.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            {/* --------------------------------------------------------5-------------------------------------------------*/}
                                            <div className="col-md-12">
                                                <div className="row">
                                                    <div className="col-md-4 d-flex align-items-center">
                                                        <div class="form-check">
                                                            <label class="form-check-label" for="flexCheckDefault">
                                                                <input
                                                                    class="form-check-input"
                                                                    type="checkbox"
                                                                    name="SEALED"
                                                                    id="SEALED"
                                                                />
                                                                <p>
                                                                    <b>1,500.00</b>
                                                                </p>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mx-auto d-flex align-items-center">
                                                        <span
                                                            class="badge text-light px-4"
                                                            style={{ backgroundColor: '#29b2fe', width: '100%' }}
                                                        >
                                                            {' '}
                                                            SEALED{' '}
                                                        </span>
                                                    </div>
                                                    <div className="col-md-4">
                                                        Only you can see individual entries, ensuring you get
                                                        unique ideas.
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            {/* --------------------------------------------------------6-------------------------------------------------*/}
                                            <div className="col-md-12">
                                                <div className="row">
                                                    <div className="col-md-4 d-flex align-items-center">
                                                        <div class="form-check">
                                                            <label class="form-check-label" for="flexCheckDefault">
                                                                <input
                                                                    class="form-check-input"
                                                                    type="checkbox"
                                                                    name="NDA"
                                                                    id="NDA"
                                                                />
                                                                <p>
                                                                    <b>1,000.00 </b>
                                                                </p>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mx-auto d-flex align-items-center">
                                                        <span class="badge bg-primary" style={{ width: '100%' }}>
                                                            NDA
                                                        </span>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <p>
                                                            Freelancers must sign a Non-Disclosure Agreement to see
                                                            your contest details.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            {/* --------------------------------------------------------7-------------------------------------------------*/}
                                            <div className=" col-md-12">
                                                <div className="row">
                                                    <div className="col-md-4 d-flex align-items-center">
                                                        <div class="form-check">
                                                            <label class="form-check-label" for="flexCheckDefault">
                                                                <input
                                                                    class="form-check-input"
                                                                    type="checkbox"
                                                                    name="PRIVATE"
                                                                    id="PRIVATE"
                                                                />
                                                                <p>
                                                                    <b>1,000.00 </b>
                                                                </p>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mx-auto d-flex align-items-center">
                                                        <span
                                                            class="badge bg-warning text-dark"
                                                            style={{ width: '100%' }}
                                                        >
                                                            PRIVATE
                                                        </span>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <p>
                                                            Hide project details from search engines and users that
                                                            are not logged in, for projects that you need to keep
                                                            confidential.
                                                        </p>
                                                    </div>
                                                    {/* class="text-wrap " style={{width: "20rem"}} */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className='col-md-3'>
                                    <div className='container'>
                                        <div className='row  '>
                                            <div className='col-12 card my-3 border-0'>


                                                <h5 class="card-header bg-white pl-0" >About the Client</h5>
                                                <div class="card-body">
                                                    <h4 style={{ fontSize: "16px" }}>Client Engagement</h4>
                                                    <ul className="list-unstyled footer-list-item">
                                                        <li >
                                                            <div >

                                                                <i class="fas fa-check footer-list-item-icon mr-2" style={{ color: "#999" }}></i>
                                                                <span className=' ' style={{ fontSize: "10px" }}>Contacted 0 freelancers
                                                                </span>

                                                            </div>
                                                        </li>
                                                        <li >
                                                            <div >

                                                                <i class="fas fa-check footer-list-item-icon mr-2" style={{ color: "#999" }}></i>
                                                                <Link to="#" style={{ fontSize: "10px" }}>Invited 0 freelancers to bid</Link>


                                                            </div>
                                                        </li>
                                                        <li >
                                                            <div >

                                                                <i class="fas fa-check footer-list-item-icon mr-2" style={{ color: "#999" }}></i>
                                                                <span className=' ' style={{ fontSize: "10px" }}>Completed 0 projects
                                                                </span>

                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <h4 style={{ fontSize: "16px" }}>Client Engagement</h4>
                                                    <ul className="list-unstyled footer-list-item">
                                                        <li >
                                                            <div >

                                                                <i class="fas fa-check footer-list-item-icon mr-2" style={{ color: "#999" }}></i>
                                                                <span className=' ' style={{ fontSize: "10px" }}>Contacted 0 freelancers
                                                                </span>

                                                            </div>
                                                        </li>
                                                        <li >
                                                            <div >

                                                                <i class="fas fa-check footer-list-item-icon mr-2" style={{ color: "#999" }}></i>
                                                                <Link to="#" style={{ fontSize: "10px" }}>Invited 0 freelancers to bid</Link>


                                                            </div>
                                                        </li>
                                                        <li >
                                                            <div >

                                                                <i class="fas fa-check footer-list-item-icon mr-2" style={{ color: "#999" }}></i>
                                                                <span className=' ' style={{ fontSize: "10px" }}>Completed 0 projects
                                                                </span>

                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <h4 style={{ fontSize: "16px" }}>Client Verification</h4>
                                                    <ul className="list-unstyled footer-list-item">
                                                        <li >
                                                            <div >

                                                                <i class="fas fa-check footer-list-item-icon mr-2" style={{ color: "#999" }}></i>
                                                                <span className=' ' style={{ fontSize: "10px" }}> Identity verified
                                                                </span>

                                                            </div>
                                                        </li>
                                                        <li >
                                                            <div >




                                                                <i class="fas fa-check footer-list-item-icon mr-2" style={{ color: "#999" }}></i>
                                                                <Link to="#" style={{ fontSize: "10px" }}>Payment method verified</Link>


                                                            </div>
                                                        </li>
                                                        <li >
                                                            <div >

                                                                <i class="fas fa-check footer-list-item-icon mr-2" style={{ color: "#999" }}></i>
                                                                <span className=' ' style={{ fontSize: "10px" }}>Deposit made
                                                                </span>

                                                            </div>
                                                        </li>
                                                        <li >
                                                            <div >

                                                                <i class="fas fa-check footer-list-item-icon mr-2" style={{ color: "#999" }}></i>
                                                                <span className=' ' style={{ fontSize: "10px" }}> Email address verified
                                                                </span>

                                                            </div>
                                                        </li>
                                                        <li >
                                                            <div >

                                                                <i class="fas fa-check footer-list-item-icon mr-2" style={{ color: "#999" }}></i>
                                                                <span className=' ' style={{ fontSize: "10px" }}>  Profile completed
                                                                </span>

                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                        <div className='row my-2 '>
                                            <div className='col-12 card border-0'>


                                                <h6 class="card-header bg-white pl-0" >Non-Disclosure Agreement</h6>
                                                <div class="card-body">
                                                    <div style={{ textAlign: "center", margin: "10px 0" }}>
                                                        <img _ngcontent-webapp-c127="" class="ImageElement img-fluid" src="https://www.f-cdn.com/assets/main/en/assets/project-view-page/icons-big/lock-fln.svg" alt="Freelancer Lock" data-aspect-ratio="false" />
                                                    </div>
                                                    <p className='bold'>
                                                        With the Non-Disclosure Agreement (NDA) upgrade, freelancers sign a contract to agree to keep details and files confidential.
                                                        Upgrade
                                                    </p>
                                                    <button className='btn w-100 btn-primary '>upgrade with DNA</button>

                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>



                            </div>
                        }
                    </div>
                </div>
                <Footer />
            </div>
        </div >
    )
}

export default DetailsData
