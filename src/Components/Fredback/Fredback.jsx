
import { containerClasses } from "@mui/material"
import "./Fredback.css"

const Fredback = ({ DataOfProject }) => {
    return (
        <div className="Fredback">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3>Client's Feedback to You
                        </h3>
                        <p>
                            {DataOfProject.reviewclient}</p>
                    </div>
                    <div className="col-md-6">
                        <h3>Your Feedback to Client
                        </h3>
                        <p>
                            {DataOfProject.reviewfreelancer}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fredback
