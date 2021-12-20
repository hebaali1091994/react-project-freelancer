import React from 'react'
import { Link } from 'react-router-dom';

const SingleFreelancer = ({ users }) => {
    console.log(users);
    return (

        <div>
            <div class="card-body">
                <Link className="link" to={`/DisplayProject/Freelancer/${users._id}`}>
                    <div class="row">
                        <div class="col-md-2">
                            <img src="1.jpg" class="card-img-top freelancer-img" alt="..." />

                        </div>
                        <div class="col-md-8">
                            <h5 class="card-title text-dark text-none">  { }</h5>
                            <p class="card-text rating-person"><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></p>
                            <h6>{users.userName} </h6>
                            <p>{users.Description && users.Description} Sorry No Description Added</p>
                            <div class="skill-person">PHP - JAVASCRIPT - WEB </div>
                        </div>
                        <div class="col-md-2">
                            <h4>$ 500 USD</h4>
                            <p class="text-center">per hour</p>
                            <span class="heart-icon">

                                <i class="fas fa-heart fa-3x"></i>

                            </span>
                            <div class="d-flex hire-person">
                                <button type="button" class="btn btn-primary">Hire</button>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default SingleFreelancer
