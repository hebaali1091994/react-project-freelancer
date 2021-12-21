import SingleFreelancer from "../../Components/Single Freelancer/SingleFreelancer"
import { useState, useEffect } from 'react';
import axios from 'axios';

const Freelancerpage = () => {


    const [users, setUser] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const res = await axios.get("/users/all");
            setUser(res.data)
        }
        fetchData();
    }, []);
    return (
        <div>

            {users.map((users) => (

                <SingleFreelancer users={users} />
            ))}


        </div>
    )
}

export default Freelancerpage
