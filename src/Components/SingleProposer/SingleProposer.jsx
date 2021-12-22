import axios from 'axios';
import { useContext, useState, useEffect } from 'react';
import { Context } from "../../context/Context";
import { Link, useLocation } from 'react-router-dom';


const SingleProposer = ({ f, Freelancer }) => {

    const [DataOfProject, setDataOfProject] = useState({})
    const [Userdata, setUserdata] = useState({})
    const [ProjectMaster, setProjectMaster] = useState({})

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
            const userdata = await axios.get(`/users/one/${DataOfProject.userid}`, {
                headers: {
                    token: user.accesToken
                }
            });
            setProjectMaster(userdata.data)
        }
        getDataProject()
        getUserData();
    }, [path, DataOfProject]);


    console.log("Freelancer", f._id);
    console.log(ProjectMaster);

    console.log(DataOfProject);

    // useEffect(() => {
    //     const getUserData = async () => {
    //         const userdata = await axios.get(`/users/one/${ProjectMaster.freelanceid}`, {
    //             headers: {
    //                 token: user.accesToken
    //             }
    //         });
    //         setUserdata(userdata.data)
    //     }
    //     getUserData();

    // }, [])
    // console.log(Userdata);

    const handlechat = async () => {
        const start = {
            senderId: "61b9dc948241174bd6f310c2",
            reciverId: "61c06f86dd92c8b10ca12316"
        };
        try {
            await axios.post("/conversion/", start);

        } catch (err) {
            console.log(err);
        };
        <Link className="btn postproject m-1" exact="true" to="/Massenger"></Link>
    }
<<<<<<< HEAD
    getUserData();

const handlechat=async ()=>{
    const start = {
     senderId:"61c21c496c61dbd8d80958e5",
    reciverId:"61c1e0eb513c0ccc569d1962"
    };
    try {
     await axios.post("/conversion/", start);

      } catch (err) {
        console.log(err);
      };
{/* <Link className="btn postproject m-1" exact="true" to="/Massenger"></Link> */}
}
=======
>>>>>>> 860a5f097337c5fef03246446ba8041a7b6c1ddd

    return (

        <div className='singlePro bg-white mb-3'>
            <div className="freelancer-deatils">
                <div className="col-md-12  mt-3 part2 d-flex justify-content-between deatils-pro bg-white" style={{ height: "100px" }}>
                    <div className="left">
                        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" class="img-fluid" alt="Responsive image" />
                    </div>
                    <div className="center">
                        <p>{Userdata.userName}</p>

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

            <p> userid = {DataOfProject.userid}</p>
            <p>id = {ProjectMaster._id}</p>
            <div className="d-flex justify-content-end mb-3">
                {ProjectMaster._id === DataOfProject.userid && ProjectMaster.acountType === "hire" ?
                    <div>
                        <Link to="" class="btn btn-primary mr-3">Hire</Link>
                        <Link to="/Massenger"> <button type="button" class="btn btn-success" onClick={handlechat}>Chat</button>
                        </Link> </div> : "Wait For Data"
                }
            </div>
        </div>
    )
}

export default SingleProposer
