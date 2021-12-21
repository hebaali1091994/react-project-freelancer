import React from "react";
import hourlypriceproject from "../../../public/imgPostproject/hourlypriceproject.svg";
import fixedpriceproject from "../../../public/imgPostproject/fixedpriceproject.svg";

const Stepthree = ({ Data, setData }) => {
  console.log(Data.postproject);
  // ------------------------------------------------------------------------------------------------//
  const Currency = () => {
    const x = document.getElementById("inputState").value;
    console.log(x);
    if (x === "USD") {
      document.getElementById("symbol").innerHTML = "<b>$</b>";
    } else if (x === "NZD") {
      document.getElementById("symbol").innerHTML = "<b>$</b>";
    } else if (x === "AUD") {
      document.getElementById("symbol").innerHTML = "<b>$</b>";
    } else if (x === "HKD") {
      document.getElementById("symbol").innerHTML = "<b>$</b>";
    } else if (x === "SGD") {
      document.getElementById("symbol").innerHTML = "<b>$</b>";
    } else if (x === "CAD") {
      document.getElementById("symbol").innerHTML = "<b>$</b>";
    } else if (x === "EUR") {
      document.getElementById("symbol").innerHTML = "<b>£</b>";
    } else if (x === "GBP") {
      document.getElementById("symbol").innerHTML = "<b>£</b>";
    } else if (x === "INR") {
      document.getElementById("symbol").innerHTML = "<b>₹</b>";
    }
    const y=document.getElementById("symbol").innerText;
    setData({ ...Data, CurrencyCode:y+"-"+x})
  };
  // ------------------------------------------------------------------------------------------------//

  const submit = (e) => {
    if (e === 1) {
      setData({ ...Data, pay: "Pay by the hour" });
      document.getElementById("hour").style.border = "thick solid #139ff0 ";
      document.getElementById("fixed").style.border = "";
    } else if (e === 2) {
      setData({ ...Data, pay: "Pay fixed price" });
      document.getElementById("fixed").style.border = "thick solid #139ff0 ";
      document.getElementById("hour").style.border = "";
    }
  };
  // --------------------------------------------------------------------------------------------------------------------//

  if (Data.postproject === "Post A project") {
    return (
      <>
        <div className="row g-1 d-flex justify-content-evenly mt-5">
          <div
            id="hour"
            className="col-md-5 shadow p-3 me-1 bg-body rounded"
            onClick={() => submit(1)}
          >
            <div className="row">
              <div className="col-md-6 d-flex justify-content-center align-content-center">
                <img
                  className="img-fluid w-50"
                  src={hourlypriceproject}
                  alt=""
                />
              </div>
              <div className="col-md-6">
                <p style={{ fontSize: "1.3rem" }}>
                  <b>Pay by the hourt</b>
                </p>
                <p>
                  Hire based on an hourly rate and pay for hours billed. Best
                  for ongoing work.
                </p>
              </div>
            </div>
          </div>
          <div
            id="fixed"
            className="col-md-5 shadow p-3  bg-body rounded"
            onClick={() => submit(2)}
          >
            <div className="row">
              <div className="col-md-6 d-flex justify-content-center align-content-center">
                <img
                  className="img-fluid w-50"
                  src={fixedpriceproject}
                  alt=""
                />
              </div>
              <div className="col-md-6">
                <p style={{ fontSize: "1.3rem" }}>
                  <b>Pay fixed price</b>
                </p>
                <p>
                  Agree on a price and release payment when the job is done.
                  Best for one-off tasks
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  //  {/* -------------------------------------------------------Data.postproject------------------------------------- */}
  else if (Data.postproject === "Start a contest") {
    return (
      <div className="mt-5">
        <p style={{ fontSize: "1.3rem" }}>
          <b>What is your budget?</b>
        </p>
        <div className="row g-1 d-flex justify-content-evenly">
          <div id="post" className="col-md-12 shadow p-3 me-1 bg-body rounded">
            <div className="row">
              <div className="col-md-12 d-flex flex-column text-center border mb-5 ">
                <p style={{ fontSize: "1.3rem" }}>
                  <b>AMAZING RESULTS</b>{" "}
                </p>
                <p style={{ fontSize: "1.3rem" }}>Expect the unexpected!</p>
              </div>
              {/* <hr/> */}
              <div className="col-md-12 mb-5">
                <input
                  type="range"
                  class="form-range border-0"
                  min="0"
                  max="1,500.00"
                  value={Data.budget}
                  id="customRange2"
                /> 
              </div>
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-6 border d-flex flex-row h-25">
                    <p id="symbol" className="m-auto" >
                      <b>$</b>
                    </p>
                    <input
                      type="number"
                      style={{
                        width: "95%",
                        height: "5vh",
                        border: "0",
                      }}
                      defaultValue="10"
                      className="form-control"
                      name="budget"
                      value={Data.budget}
                      onChange={(event) =>
                        setData({ ...Data, budget: event.target.value })
                      }
                    />
                  </div>
                  <div className="col-md-6">
                    <select
                      id="inputState"
                      class="form-select"
                      name="CurrencyCode"
                      onChange={Currency}>
                      <option selected>select Currency</option>
                      <option>USD</option>
                      <option>NZD</option>
                      <option>AUD</option>
                      <option>GBP</option>
                      <option>HKD</option>
                      <option>SGD</option>
                      <option>EUR</option>
                      <option>CAD</option>
                      <option>INR</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Stepthree;
