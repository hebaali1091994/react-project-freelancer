import axios from 'axios';
import { useContext, useState, useEffect } from 'react';
import { Context } from "../../context/Context";
import { Link, useLocation } from 'react-router-dom';


const SingleProposer = ({ f, Freelancer }) => {

    const [DataOfProject, setDataOfProject] = useState({})
    const [Userdata, setUserdata] = useState({})
    const [FreelancerData, setFreelancerData] = useState({})
    const [ContarctData, setContarctData] = useState({})

    const location = useLocation();

    const path = location.pathname.split('/')[3];
    const { user } = useContext(Context)
    useEffect(() => {
        const getDataProject = async () => {
            const userdata = await axios.get(`/Project/oneproject/${path}`, {
                headers: {
                    token: user.accesToken
                }
            });
            setDataOfProject(userdata.data)
        }
        const getUserData = async () => {
            const userdata = await axios.get(`/users/one/${f.freelanceid}`, {
                headers: {
                    token: user.accesToken
                }
            });
            setFreelancerData(userdata.data)
        }


        getDataProject()
        getUserData()
    }, [path]);




    console.log(DataOfProject);
    console.log(f.freelanceid);

    const handlechat = async () => {
        const start = {
            senderId: f.freelanceid,
            reciverId: user._id,
        };
        try {
            await axios.post("/conversion/", start);

        } catch (err) {
            console.log(err);
        };
        <Link className="btn postproject m-1" exact="true" to="/Massenger"></Link>
    }

    const HandleHire = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.put(`/Project/${path}`, {
                freelanceId: f.freelanceid,
                feedbackfreelancer: "No Feedback Received",
                feedbackcilent: "No Feedback Received",
                reviewfreelancer: "No Review Received",
                reviewclient: "No Review Received",
                NewBudget: f.BidAmount,
                Newdate: Date,
                state: "Hired",
            }, {
                headers: {
                    token: user.accesToken
                }
            });


            res.data && window.location.replace(`/Contract/${path}`);
        } catch (error) {
        }
    }


    return (

        <div className='singlePro bg-white mb-3'>
            <div className="freelancer-deatils">
                <div className="col-md-12  mt-3 part2 d-flex justify-content-between deatils-pro bg-white" style={{ height: "100px" }}>
                    <div className="left">
                        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" class="img-fluid" alt="Responsive image" />
                    </div>
                    <div className="center">
                        <p>{FreelancerData.userName}</p>

                    </div>
                    <div className="right">


                        <span>     Freelancer price Is :   {f.BidAmount} {Freelancer.step_Four_Currency_code}</span>
                        <span>    Number Of Day:   {f.numberofDay} day</span>

                    </div>

                </div>
                <div className="container">
                    <div className="Desciption-freelancer mb-5 px-4">
                        {f.deccription}

                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-end mb-3">
                {DataOfProject.userid === user._id ?
                    <div>
                        <Link to="" class="btn btn-primary mr-3" onClick={(e) => HandleHire(e)}>Hire</Link>
                        <Link to="/Massenger"> <button type="button" class="btn btn-success" onClick={handlechat}>Chat</button>
                        </Link> </div> : ""
                }
            </div>
        </div>
    )
}

export default SingleProposer
