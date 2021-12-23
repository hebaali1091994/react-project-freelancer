import React from 'react'
import unknown from "../../public/unknown.png";
import illustration from "../../public/illustration.svg";
import "./MyAccount.css";
import { useState } from 'react'
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { Context } from "../../context/Context";

const MyAccount = ({ userData }) => {
    const location = useLocation();
    const { user } = useContext(Context)
    const PF = "http://localhost:5000/images/"

    const path = location.pathname.split('/')[2];
    console.log(path);

    const [Title, setTitle] = useState("");
    const [Desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const [UpdateMode, setUpdateMode] = useState(false);
    const UpdateData = async () => {
        const UpdataDataUser = {
            userName: Title,
            Description: Desc,
        }
        if (file) {
            const data = new FormData();
            const filename = file.name;
            data.append("name", filename);
            data.append("file", file);
            UpdataDataUser.img = filename;
            try {
                await axios.post("/upload", data);
            } catch (err) { }
        }
        try {
            const res = await axios.put(`/users/${path}`, UpdataDataUser, {
                headers: {
                    token: user.accesToken
                }
            })
            window.location.replace("/ProfileUser/" + path);
        } catch (err) { }

    }

    console.log(userData);
    return (
        <div className="container">

            <div className="row">
                <div className="col-md-8 leftContainer me-auto">
                    <div className="row">
                        <div className="col-md-12 DetelsProfile shadow-lg p-3 mb-5 bg-body rounded">
                            <div className="row">
                                <div className="col-md-3 imgProfile d-flex flex-column">
                                    {
                                        UpdateMode &&
                                        <div className="writeFormGroup">
                                            <label htmlFor="fileInput">
                                                <i className="writeIcon fas fa-plus"></i>
                                            </label>
                                            <input
                                                type="file"
                                                id="fileInput"
                                                style={{ display: "none" }}
                                                value={File}
                                                onChange={(e) => setFile(e.target.files[0])}

                                            />

                                        </div>


                                    }
                                    {userData.img ? <img src={PF + userData.img} alt="" /> : <img src={unknown} alt="" />}
                                    <input type="file" id="myfile" name="myfile" /> :

                                    <p className="position-relative"><span className="position-absolute top-0 end-70 translate-middle p-2 bg-success border border-light rounded-circle me-1">
                                        <span className="visually-hidden">New alerts</span>
                                    </span> I'm Online!</p>
                                    <p>Qena, Egypt</p>
                                    <p><i class="far fa-clock"></i>{new Date(userData.createdAt).toDateString()}</p>
                                    {UpdateMode &&
                                        <button className='btn btn-success' onClick={UpdateData}>Update</button>
                                    }
                                </div>
                                <div className="col-md-9 infoProfile">
                                    <div className="d-flex justify-content-between">
                                        {UpdateMode ? <input type="text" onChange={(e) => setTitle(e.target.value)} value={Title} /> :
                                            <p>{userData.userName}</p>
                                        }
                                        {user._id === userData._id &&
                                            <button type="button" onClick={() => setUpdateMode(true)}

                                                className="btn btn-primary">Edit Profile</button>
                                        }
                                    </div>
                                    <div className="col-md-12"><p>WebDeveloper(mearn)</p></div>
                                    <div className="dicribtion col-md-12">
                                        {UpdateMode ? <textarea onChange={(e) => setDesc(e.target.value)} className='descriptionEdittext' value={Desc} /> :
                                            <p>{userData.Description ? userData.Description : "Sorry No Description Added "}</p>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 ReviewsProfile mt-5 shadow-lg p-3 mb-5 bg-body rounded">
                            <div className="row">
                                <div className="col-md-12"><p>Reviews</p></div>
                                <hr />
                                <div className="col-md-12 d-flex flex-column text-center">
                                    <img className="img-fluid m-auto" src={illustration} alt="" />
                                    <p>No reviews to see here!</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*--------------------------------------------------------------------------------------*/}
                <div className="col-md-3 RightContainer shadow-lg p-3 mb-5 bg-body rounded">
                    <div className="row">
                        <div className="col-md-12 d-flex mb-2">
                            <p className="me-auto">Top Skills</p>
                            <button type="button" className="btn btn-primary">Edit Skills</button>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default MyAccount
