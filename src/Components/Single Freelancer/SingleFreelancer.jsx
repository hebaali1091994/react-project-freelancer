import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { Context } from "../../context/Context";

const SingleFreelancer = ({ users }) => {
    const { user } = useContext(Context);

    const PF = "http://localhost:5000/images/"
    return (

        <div className='SingleFreelancer'>
            {users._id === user._id ? <div className='exist-user' style={{ display: "none" }}></div> :
                <div class="card-body">
                    <Link className="link" to={`/ProfileUser/${users._id}`}>
                        <div class="row">
                            <div class="col-md-2">

                                {users.img ?
                                    <img src={PF + users.img} class="card-img-top freelancer-img" alt="..." />
                                    : <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" class="card-img-top freelancer-img" alt="..." />}
                            </div>
                            <div class="col-md-8">
                                <h5 class="card-title text-dark text-none">  { }</h5>

                                <h3>{users.userName} </h3>
                                <p>{users.Description ? users.Description : "Sorry No Description Added"}</p>
                                <div class="skill-person">PHP - JAVASCRIPT - WEB </div>
                                <p class="card-text rating-person"><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></p>
                            </div>
                            <div class="col-md-2">





                                <div class="d-flex hire-person">
                                    <Link to="/Post-project/" type="Link" class="btn btn-primary">Hire</Link>
                                </div>

                            </div>
                        </div>
                    </Link>
                </div >
            }
            <hr />
        </div >
    )
}

export default SingleFreelancer
