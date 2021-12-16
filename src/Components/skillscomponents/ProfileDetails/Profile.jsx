import React from 'react'
import "./Profile.css"
const Profile = () => {
    return (

    <div className="row">
        <div className="col-md-6 m-auto uploadphoto d-flex flex-column">
            <div className="profile_img m-auto d-flex justify-content-center align-items-center border border-2 w-25">
                <i className="fas fa-user fs-1"></i>

                <button type="button" className="btn btn-light shadow p-3 mb-5 bg-light rounde btn-circle btn-xl" onclick="chooseFile()">
                    <div style={{height:"0px",overflow:"hidden"}}>
                        <input type="file" id="fileInput" name="fileInput" />
                     </div>
                            <i className="fas fa-camera text-primary"></i>
                </button>
            </div>
           
            <div className="skill mt-5">
                
                <p className="fs-3"><b>what is your name?</b></p>
                <p>Please use your real name as this will be required for identity verification.</p>
            {/* <!---------------------------input--------------------------------------> */}
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label w-100">First name
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your first name"/>
                    </label>
                  </div>
            {/* <!---------------------------textarea --------------------------------------> */}
            <div className="mb-5">
                <label for="exampleFormControlInput1" className="form-label w-100">Last name
                <input type="email" className="form-control" id="exampleFormControlInput1"
                 placeholder="Enter your last name"/>
                </label>
              </div>
           
        </div>
            </div>
        </div>
    )
}

export default Profile
