import React, { useEffect, useState, useContext } from 'react'
import MyAccount from '../../Components/myaccount/MyAccount';
import Navbar from "../../Components/Navbar";
import coverroduct from '../../public/coverroduct.jpg';
import "./MyProfile.css"

import Header from '../../Components/header/Header'
import axios from 'axios';
import { Context } from "../../context/Context";


import { Link, useLocation } from 'react-router-dom';

const MyProfile = () => {
    const { user } = useContext(Context);

    const location = useLocation();
    const path = location.pathname.split('/')[2];
    console.log(path);
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await axios.get("/users/one/" + path, {
                headers: {
                    token: user.accesToken
                }
            });
            setUserData(res.data)
        }
        fetchUsers()
    }, [])
    console.log(userData);
    return (
        <div className="Myprofile">
            <div className="container-fluid Topcontainer">
                <div className="row">
                    <div className="col-md-12 TopNav">
                        <Header />
                    </div>
                    <div className="col-md-12 bottomNav">
                        <Navbar />
                    </div>
                    <div className="col-md-12 my-profile-info ">
                        <div className="imgaccont">
                            <div className="MyAccounStyle">
                                <MyAccount userData={userData} />
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
