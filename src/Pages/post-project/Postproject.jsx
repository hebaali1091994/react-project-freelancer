import React from "react";
import "./Postoroject.css";
import freelancerlogolight from '../../public/imgPostproject/freelancerlogolight.svg'
import PostEnterFace from "../../Components/post_Steps/PostEnterFace";
const Postproject = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                {/*-------------------------------------------------------start section --------------------------  */}
                <div className="col-md-12 first-section">
                    <div className="container  w-75 mt-5">
                        <div className="row d-flex flex-column">
                            <div className="col-md-12 d-flex justify-content-start mb-5 mt-5">
                                <img className="img-fluid" src={freelancerlogolight} alt="freelancer logo" />
                            </div>
                            <div className="col-md-12 d-flex flex-column text-start text-light ">
                                <p className="fs-1"><b>Tell us what you need done</b></p>
                                <p>Contact skilled freelancers within minutes. View profiles, ratings, portfolios and chat with them. Pay the freelancer only when you are 100% satisfied with their work</p>
                            </div>
                            <div className="col-sm-12 col-md-12 bg-danger d-flex justify-content-center inf shadow p-3 mb-5 bg-body rounded">
                                   < PostEnterFace/>
                            </div>
                        </div>
                    </div>
                </div>
                {/*-------------------------------------------------------End section --------------------------  */}
            </div>
        </div>
    );
};

export default Postproject;
