import "./SingleContract.css"
import { Link } from 'react-router-dom';

const SingleContract = () => {
    return (
        <div>
            <div class="card-body border rounder">
                <Link className="link" to={`/Contract/`}>
                    <div class="row">

                        <div class="col-md-8 mt-5">
                            <h5 class="card-title text-dark text-none link postTitle">Lorem ipsum dolor </h5>

                            <p className='postDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima tempora autem magnam commodi maiores qui ab nihil? Quo assumenda laudantium delectus. Accusantium dolorum corporis totam dignissimos est numquam expedita voluptatum.</p>
                            <div class="card-text rating-person link ">
                                <div class="row">
                                    {/* <div class="fix-price col-md-6"><i class="fas fa-tv link"></i> {project.pay}</div>
                                <div class="fix-price col-md-6"><i class="fas fa-building link">{ }</i>{project.type_of_project}</div> */}

                                </div>
                            </div>
                        </div>
                        <div class="col-md-1"></div>
                        <div class="col-md-3 d-flex justify-content-center align-items-center flex-column">
                            <h6>lorem</h6>
                            {/* <h6>  {project.Minimum_Per_hour === null & project.Maximum_Per_hour === null & project.Maximum_fix_price === null & project.Minimum_fix_price === null ? "SORRY No Price Added" : ""}</h6> */}
                            <h4>
                                asfasgasdgasd
                            </h4>
                            {/* {project.Minimum_Per_hour && project.Minimum_Per_hour + " - "} {project.Maximum_Per_hour && project.Maximum_Per_hour + " - "} {project.Minimum_fix_price && project.Minimum_fix_price + " - "}{project.Maximum_fix_price && project.Maximum_fix_price}{project.step_Four_Currency_code && project.step_Four_Currency_code}</h4>
                            <p class="text-center postDate">{new Date(project.createdAt).toDateString()} </p> */}


                        </div>
                    </div>
                </Link>
            </div>
        </div >
    )
}

export default SingleContract
