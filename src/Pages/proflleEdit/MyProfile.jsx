import React from 'react'
import Header from '../../Components/Header';
import MyAccount from '../../Components/myaccount/MyAccount';
import Navbar from "../../Components/Navbar";
import coverroduct from '../../public/coverroduct.jpg';
import "./MyProfile.css"
const MyProfile = () => {
    return (
        <div className="Myprofile">
        <div className="container-fluid Topcontainer">
            <div className="row">
                <div className="col-md-12 TopNav">
                       <Header/>
                </div>
                <div className="col-md-12 bottomNav">
                <Navbar />
                </div>
                <div className="col-md-12 my-profile-info ">
                <div className="imgaccont">
                <div className="MyAccounStyle">
                    <MyAccount/>
                    </div>
                </div>
                
               </div>
            </div>
            {/* <div className="col-md-12 position-absolute top-50 ">
          
            </div> */}
             {/* <img className="img-fluid w-100" src={coverroduct} alt=""/>/ */}
        </div>
        </div>
    )
}

export default MyProfile
