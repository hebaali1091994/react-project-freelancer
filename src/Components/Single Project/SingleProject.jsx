import React from 'react'
import { Link } from 'react-router-dom';

const SingleProject = ({project}) => {

    return (
        
        <div>

                                    <div class="card-body border rounder">
                           <Link className="link" to={`/DisplayProject/Proposals/${project._id}`}>
                            <div class="row">

                                <div class="col-md-8">
                          <h5 class="card-title text-dark text-none link"> {project.ChooseName}  </h5>
                 
                          <p>{project.Tellus}</p>
                          <div class="skill-person link">PHP - JAVASCRIPT - WEB </div>
                            <div class="card-text rating-person link ">
                                <div class="row">
                                <div class="fix-price col-md-4"><i class="fas fa-tv link"></i> Fix Price</div>
                                <div class="fix-price col-md-4"><i class="fas fa-building link"></i> No Bird</div>
                                <div class="col-md-4">
                                <i class="fas fa-user"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></div>
                            </div>
                        </div>
                        </div>
                        <div class="col-md-1"></div>
                        <div class="col-md-3">
                            <h4>$ 10 - 30 USD</h4>
                            <p class="text-center">post 20 minutes ago</p>

    
                        </div>
                        </div>
                      </Link>
        </div>
        </div>
    )
}

export default SingleProject
