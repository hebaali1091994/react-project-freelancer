import React from 'react'
// import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
// import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import './SingleProject.css'
import { useNavigate, useLocation } from 'react-router-dom';

const SingleProject = ({ project }) => {
    const history = useNavigate();

    return (

        <div>

            <div class="card-body border rounder">
                <Link className="link" to={`/DisplayProject/Details/${project._id}`}>
                    <div class="row">

                        <div class="col-md-8 mt-5">
                            <h5 class="card-title text-dark text-none link postTitle">{project.ChooseName}   </h5>

                            <p className='postDesc'>{project.Tellus}</p>
                            <div class="card-text rating-person link ">
                                <div class="row">
                                    <div class="fix-price col-md-6"><i class="fas fa-tv link"></i> {project.pay}</div>
                                    <div class="fix-price col-md-6"><i class="fas fa-building link">{ }</i>{project.type_of_project}</div>

                                </div>
                            </div>
                        </div>
                        <div class="col-md-1"></div>
                        <div class="col-md-3 d-flex justify-content-center align-items-center flex-column">
                            <h6>  {project.Minimum_Per_hour === null & project.Maximum_Per_hour === null & project.Maximum_fix_price === null & project.Minimum_fix_price === null ? "SORRY No Price Added" : ""}</h6>
                            <h4>

                                {project.Minimum_Per_hour && project.Minimum_Per_hour + " - "} {project.Maximum_Per_hour && project.Maximum_Per_hour + " - "} {project.Minimum_fix_price && project.Minimum_fix_price + " - "}{project.Maximum_fix_price && project.Maximum_fix_price}{project.step_Four_Currency_code && project.step_Four_Currency_code}</h4>
                            <p class="text-center postDate">{new Date(project.createdAt).toDateString()} </p>


                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default SingleProject
