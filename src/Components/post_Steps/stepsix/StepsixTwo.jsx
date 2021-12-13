import React from "react";
import contestIcon from "../../../public/imgPostproject/contestIcon.svg";
export const StepsixTwo = ({ Data, setData }) => {
  // const x=Data.budget;
  // if(Data.FEATURED!==""){
  //     =x+30.00
  //     const y=document.getElementById("total").innerHTML=`${30.00}`
  // }else if(Data.TOP_CONTESTD!==""){
  //     const y=x+30.00
  // }else if(Data.HIGHLIGHD!==""){
  //     const y=x+15.00
  // }else if(Data.SEALEDD!==""){
  //     const y=x+30.00
  // }else if(Data.NDAD!==""){
  //     const y=x+20.00
  // }else if(Data.PRIVATED!==""){
  //     const y=x+25.00
  // }

  if (Data.Day === "manyDay") {
    return (
      <div className="row">
        <div className="col-md-12">
          <p className="fs-6">
            <b>Are these details correct?</b>
          </p>
        </div>
        <div className="col-md-12 shadow bg-body rounded ">
          <div className="row">
            <div className="col-md-3 text-center border-end border-5">
              <img src={contestIcon} alt="" />
              <p>{Data.StepFiveLongContest}DAY CONTEST</p>
              <p className="fs-4">
                {Data.budget}
                {Data.CurrencyCode}
              </p>
            </div>
            <div className="col-md-8">
              <p>{Data.ChooseName}</p>
              <p>{Data.Tellus}</p>
              <p>{Data.skills}</p>
              <div className="d-flex flex-row">
                <span class="badge bg-success">{Data.GUARANTEED}</span>
                <span class="badge bg-danger">{Data.FEATURED}</span>
                <span class="badge bg-secondary">{Data.TOP_CONTEST}</span>
                <span class="badge bg-info text-dark">{Data.HIGHLIGHT}</span>
                <span class="badge text-light" style={{ backgroundColor: "#29b2fe" }}>
                  {Data.SEALED}
                </span>
                <span class="badge bg-primary">{Data.NDA}</span>
                <span class="badge bg-warning text-dark">{Data.PRIVATE}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 text-center mt-3">
          <p className="m-auto">
            <b>Total:30.00{Data.CurrencyCode}</b>
          </p>
        </div>
      </div>
    );
  } else if (Data.Day === "Day") {
    return (
      <div className="row">
        <div className="col-md-12">
          <p className="fs-6">
            <b>Are these details correct?</b>
          </p>
        </div>
        <div className="col-md-12 shadow bg-body rounded ">
          <div className="row">
            <div className="col-md-3 text-center border-end border-5">
              <img src={contestIcon} alt="" />
              <p> 1 DAY CONTEST</p>
              <p className="fs-4">
                {Data.budget}
                {Data.CurrencyCode}
              </p>
            </div>
            <div className="col-md-8">
              <p>{Data.ChooseName}</p>
              <p>{Data.Tellus}</p>
              <p>{Data.skills}</p>
              <div className="d-flex flex-row">
                <span class="badge bg-success">{Data.GUARANTEED}</span>
                <span class="badge bg-danger">{Data.FEATURED}</span>
                <span class="badge bg-secondary">{Data.TOP_CONTEST}</span>
                <span class="badge bg-info text-dark">{Data.HIGHLIGHT}</span>
                <span class="badge text-light" style={{ backgroundColor: "#29b2fe" }}>
                  {Data.SEALED}
                </span>
                <span class="badge bg-primary">{Data.NDA}</span>
                <span class="badge bg-warning text-dark">{Data.PRIVATE}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 text-center mt-3">
          <p className="m-auto">
            <b>
              Total:30.00{Data.CurrencyCode}
            </b>
          </p>
        </div>
      </div>
    );
  }
};
