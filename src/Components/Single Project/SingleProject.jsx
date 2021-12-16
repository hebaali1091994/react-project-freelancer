import React from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import './SingleProject.css'
const SingleProject = ({project}) => {
    console.log(project);
    const history = useParams();
    console.log(project);

    return (
        
        <div>

                                    <div class="card-body border rounder">
                           <Link className="link" to={`/DisplayProject/Proposals/${project._id}`}>
                            <div class="row">

                                <div class="col-md-8">
                          <h5 class="card-title text-dark text-none link postTitle">{project.ChooseName}   </h5>
                 
                          <p className='postDesc'>{project.Tellus}</p>
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
                            <h4>{project.Minimum_Per_hour} - {project.Maximum_Per_hour} {project.step_Four_Currency_code}</h4>
                            <p class="text-center postDate">{new Date(project.createdAt).toDateString()} </p>

    
                        </div>
                        </div>
                      </Link>
        </div>
        </div>
    )
}

export default SingleProject
