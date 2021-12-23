import "./BidProject.css"
import { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from "../../../context/Context";

const BidProject = () => {
    const { user } = useContext(Context);
    const [submitWork, setSubmitWork] = useState(false);
    const [getProject, setgetProject] = useState({});
    const [getFreelancerSendOffer, setgetFreelancerSendOffer] = useState({});
    const [Userdata, setUserdata] = useState({});
    const bidamount = useRef("");
    const NumberOfDay = useRef();
    const Desc = useRef("");
    const Projectmilestone = useRef("");
    const AmountMileStone = useRef(null);

    const location = useLocation();
    const path = location.pathname.split('/')[3];
    const getDataProject = async () => {
        const userdata = await axios.get(`/Project/oneproject/${path}`, {
            headers: {
                token: user.accesToken
            }
        });
        setgetProject(userdata.data)
    }
    getDataProject()


    const getUserData = async () => {
        const userdata = await axios.get(`/users/one/${user._id}`, {
            headers: {
                token: user.accesToken
            }
        });
        setUserdata(userdata.data)
    }
    // getUserData()




    const SubmitPropser = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(`/Project/apply/${path}`, {
                freelanceid: user._id,
                BidAmount: bidamount.current.value,
                numberofDay: NumberOfDay.current.value,
                deccription: Desc.current.value
            }, {
                headers: {
                    token: user.accesToken
                }
            });

            res.data && window.location.replace(`/DisplayProject/Proposals/${path}`);
        } catch (error) {
        }
    }
    return (
        < div className="BidProject bg-white" >
            {user._id === getProject.userid ?
                <div className="text-center border p-5 rounder">You Can't Make Bid Because Your Master For This Job</div> :
                <div className="container">
                    <nav class="navbar navbar-white ">
                        <h4 className="px-4 mt-3"> Place a Bid on this Project</h4>
                    </nav>
                    <hr />
                    <div className="DeatilsProject ">
                        <p>You will be able to edit your bid until the project is awarded to someone.
                        </p>

                    </div>
                    <form onSubmit={SubmitPropser}>
                        <div class="row">
                            <div class="col-md-4 mb-3">
                                <label for="validationTooltip01 ">Bid Amount
                                </label>
                                <input type="text" class="form-control" id="validationTooltip01" placeholder="Enter bid amount" ref={bidamount} />
                                <div class="valid-tooltip">
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <label for="validationTooltip02">This project will be delivered in
                                </label>
                                <input type="text" class="form-control" id="validationTooltip02" placeholder="Enter number of days" ref={NumberOfDay} />
                                <div class="valid-tooltip">
                                    Looks good!
                                </div>
                            </div>

                        </div>
                        <p>Paid to you: ₹12,501.00 - ₹1,250.10 fee = ₹11,250.90
                        </p>
                        <div class="col-md-4 mb-3">
                            <label for="validationTooltip01 ">Describe your proposal</label>
                            <textarea
                                className="  justify-content-center"
                                id="w3review"
                                ref={Desc}
                                rows="10"
                                cols="95"
                                placeholder="What makes you the best candidate for this project?"
                                style={{
                                    marginTop: "0px",
                                    marginLeft: "17px",
                                }}
                            ></textarea>
                            <div class="valid-tooltip">
                            </div>

                        </div>
                        <button
                            type="submit"
                            class="btn"
                            style={{ background: "#999", marginTop: "10px" }}>
                            Submit Your Proposal                        </button>
                        <hr></hr>
                    </form>
                </div>
            }
        </div >
    )
}

export default BidProject
