import React from "react";
import projectIcon from "../../../../src/public/imgPostproject/projectIcon.svg";
import recruiter001 from "../../../../src/public/imgPostproject/recruiter001.svg";
import Contest from "./Contest";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
const Stepfive = ({ Data, setData }) => {
  const submit = (e) => {
    if (e === 1) {
      setData({ ...Data, type_of_project: "Standard project" });
      document.getElementById("post").style.border = "thick solid #139ff0 ";
      document.getElementById("start").style.border = "";
    } else if (e === 2) {
      setData({ ...Data, type_of_project: "Recruiter project" });
      document.getElementById("start").style.border = "thick solid #139ff0 ";
      document.getElementById("post").style.border = "";
    }
  };
  // ------------------------------------------------------------------------------------------------//
  const Close=()=>{
    document.getElementById("error").style.display="none"
  }
  // ------------------------------------------------------------------------------------------------//

  if (Data.step_Four_Currency_code !== "") {
    return (
      <div className="container mt-5">
        <div className="row g-1 d-flex justify-content-evenly">
          <div className="col-md-12">
            <p style={{ fontSize: "1.3rem" }} className="ms-5">
              <b>What type of project are you posting?</b>
            </p>
          </div>
          <div
            id="post"
            className="col-md-5 shadow p-3 me-1 bg-body rounded"
            onClick={() => submit(1)}
          >
            <div className="row">
              <div className="col-md-6 d-flex justify-content-center align-content-center">
                <img className="img-fluid w-50" src={projectIcon} alt="" />
              </div>
              <div className="col-md-6">
                <p className="fs-6">
                  <b>Standard project</b>
                </p>
                <p>
                  Free to post, your project will go live instantly and start
                  receiving bids within seconds.
                </p>
                <p style={{ fontSize: "1.3rem" }}>
                  <b>FREE</b>
                </p>
              </div>
            </div>
          </div>
          <div
            id="start"
            className="col-md-5 shadow p-3  bg-body rounded"
            onClick={() => submit(2)}
          >
            <div className="row">
              <div className="col-md-6 d-flex justify-content-center align-content-center">
                <img className="img-fluid w-50" src={recruiter001} alt="" />
              </div>
              <div className="col-md-6">
                <p className="fs-6">
                  <b>Recruiter project</b>
                </p>
                <p>
                  We'll assign one of our expert staff to help you find the
                  perfect freelancer for the job.
                </p>
                <p style={{ fontSize: "1.3rem" }} className="text-danger">
                  <b>ONLY 9.50{Data.step_Four_Currency_code}</b>
                </p>
                <p className="text-decoration-line-through">
                  179.00{Data.step_Four_Currency_code}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (Data.Day !== "") {
    if (Data.Day === "manyDay") {
      return (
        <>
          <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 mb-4">
                  <p className="m-auto" style={{fontSize: "1.3rem", width: "50vw"}}><b>How long would you like to run your contest?</b></p>
              </div>
         <div div className="col-md-6 border d-flex flex-row h-25 m-auto border-primary">
                    <p className="m-auto" >
                      <b>Days</b>
                    </p>
                    <input
                      type="number"
                      style={{
                        width: "100%",
                        height: "6vh",
                        border: "0",
                      }}
                      className="form-control"
                      name="StepFiveLongContest "
                      value={Data.StepFiveLongContest}
                      onChange={(event) =>
                        setData({ ...Data, StepFiveLongContest: event.target.value })
                      }
                      required
                    />
                  </div>
            <div className="col-xs-12 col-sm-12 col-md-12">
              <Contest
               Data={Data}
               setData={setData} 
              />
            </div>
          </div>
        </>
      );
    } else if (Data.Day === "Day") {
      return (
        <>
          <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12">
                  <p className="m-auto" style={{fontSize: "1.3rem", width: "50vw"}}><b>What type of contest do you want to run?</b></p>
              </div>
            <Stack sx={{ width: "100%" }} spacing={2}>
              <Alert onClose={Close} severity="error" id="error">
              To ensure you get a fast result, this contest will be upgraded to Guaranteed automatically
              </Alert>
            </Stack>
            <div className="col-xs-12 col-sm-12 col-md-12">
              <Contest
               Data={Data}
               setData={setData} 
              />
            </div>
          </div>
        </>
      );
    }
    return <p>ffff</p>;
  }
};

export default Stepfive;
