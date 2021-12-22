



import SingleProposer from "../SingleProposer/SingleProposer"
import "./Propser.css"
export default function Propser({ freelancerdata, Freelancer }) {
    return (
        <div className="Propser">
            {freelancerdata.map((f, Freelancer) => (
                <SingleProposer f={f} />
            ))}
        </div>
    );
}