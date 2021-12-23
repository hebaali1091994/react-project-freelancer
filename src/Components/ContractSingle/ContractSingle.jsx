import axios from "axios";
import "./ContractSingle.css"
import { Context } from "../../context/Context";
import { useContext, useState, useEffect } from 'react';

const ContractSingle = ({ DataOfProject }) => {
    const [FreelancerDate, setFreelancerData] = useState({})
    const { user } = useContext(Context)

    useEffect(() => {
        const getDataProject = async () => {
            const userdata = await axios.get(`/users/one/${DataOfProject.freelanceId}`, {
                headers: {
                    token: user.accesToken
                }
            });
            setFreelancerData(userdata.data)
        }



        getDataProject()
    }, []);
    console.log(FreelancerDate);
    return (
        <div className="ContractSingle">
            <div className="col-md-6">
                <h4 className="text-center border-bottom    ">Contract info</h4>
                <div className="row">
                    <div className="col-md-6 border-right">
                        <ul className="icon-delete border-right">
                            <li>Start Date</li>
                            <li>Freelancer Name</li>
                            <li>Contract ID</li>
                            <li>Budget</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul className="icon-delete">
                            <li>{new Date(DataOfProject.createdAt).toDateString()}</li>
                            <li>{FreelancerDate.userName}</li>
                            <li>{DataOfProject.projectId}</li>
                            <li>{DataOfProject.NewBudget} {DataOfProject.step_Four_Currency_code}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-6 border-left ms-5">
                <h4 className="text-left">  {DataOfProject.ChooseName}</h4>                <p>
                    {DataOfProject.Tellus}
                </p>
            </div>
        </div>
    )
}

export default ContractSingle
