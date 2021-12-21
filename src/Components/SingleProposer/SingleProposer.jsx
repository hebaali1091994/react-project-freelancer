import { useContext } from 'react';
import { Context } from "../../context/Context";

const SingleProposer = ({ Freelancer }) => {
    const { user } = useContext(Context)
    const freelancerdata = Freelancer.freelances

    return (
        <div>
            {Freelancer ?

                <div className="bg-white" >
                    <div className="col-md-12  mt-3 part2 d-flex justify-content-between deatils-pro" style={{ height: "100px" }}>
                        <div className="left">
                            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" class="img-fluid" alt="Responsive image" />
                        </div>
                        <div className="center">
                            <p>{user.userName}</p>

                        </div>
                        <div className="right">

                            {/* {Freelancer.freelances.map((c, index) => (
                                <span>
                                    Freelancer Price Is :   {c.BidAmount}
                                </span>
                            ))} */}
                            {Freelancer.step_Four_Currency_code}
                            {/* {Freelancer.freelances.map((c, index) => (
                                <div className="numberday ">
                                    Number Of Day :  {c.numberofDay} Day
                                </div>
                            ))} */}

                        </div>
                    </div>
                    <div className="Desciption-freelancer">
                        <div className="container">
                            <div className="item col">
                                {/* {Freelancer.freelances.map((c, index) => (
                                    <div className="desc">
                                        {c.deccription}
                                    </div>
                                ))} */}
                            </div>                  </div>
                    </div>
                    <div className='d-flex flex-row-reverse'>
                        <button type="button" class="btn btn-success">Hire</button>

                    </div>
                    <hr />

                </div>
                : <div className="col-md-12 bg-white mt-3 part2 d-flex justify-content-center" style={{ height: "100px" }}>No Brid</div>
            }
        </div>
    )
}

export default SingleProposer
