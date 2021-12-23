import Fredback from '../../Components/Fredback/Fredback';
import ContractSingle from './../../Components/ContractSingle/ContractSingle';
import "./Contract.css"
import Message from './../../Components/message/Message';
import Header from '../../Components/header/Header';
import Navbar from './../../Components/Navbar'
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useContext, useState, useEffect } from 'react';
import { Context } from "../../context/Context";

const Contract = () => {
    const location = useLocation();

    const path = location.pathname.split('/')[2];
    console.log(path);
    const { user } = useContext(Context)
    const [FreelancerData, setFreelancerData] = useState({})
    const [UserFreelancer, setUserFreelancer] = useState({})

    const [DataOfProject, setDataOfProject] = useState({})

    useEffect(() => {
        const getDataProject = async () => {
            const userdata = await axios.get(`/Project/oneproject/${path}`, {
                headers: {
                    token: user.accesToken
                }
            });
            setDataOfProject(userdata.data)
        }



        getDataProject()
    }, [path]);
    console.log(DataOfProject);

    console.log(DataOfProject);

    return (
        <div className="Contract">
            <Header />
            <Navbar />
            <div className="container">
                <div className="bg-white mt-3">


                    <ul class="nav nav-pills mb-3 justify-content-center align-items-end tabs" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="pills-Contract-tab" data-bs-toggle="pill" data-bs-target="#pills-Contract" type="button" role="tab" aria-controls="pills-Contract" aria-selected="true">Contract</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-Files-tab" data-bs-toggle="pill" data-bs-target="#pills-Files" type="button" role="tab" aria-controls="pills-Files" aria-selected="false">Messages & Files</button>
                        </li>

                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-Feedback-tab" data-bs-toggle="pill" data-bs-target="#pills-Feedback" type="button" role="tab" aria-controls="pills-Feedback" aria-selected="false">Feedback </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <Link class="nav-link" id="pills-Feedback-tab" data-bs-toggle="pill" data-bs-target="#pills-Feedback" to="" role="tab" aria-controls="pills-Feedback" aria-selected="false">End Contract </Link>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div className="container">
                            <div class="tab-pane fade show active" id="pills-Contract" role="tabpanel" aria-labelledby="pills-Contract-tab"><ContractSingle DataOfProject={DataOfProject} /></div>
                            <div class="tab-pane fade" id="pills-Files" role="tabpanel" aria-labelledby="pills-Files-tab">Home1 </div>

                            <div class="tab-pane fade" id="pills-Feedback" role="tabpanel" aria-labelledby="pills-Feedback-tab"><Fredback DataOfProject={DataOfProject} /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contract
