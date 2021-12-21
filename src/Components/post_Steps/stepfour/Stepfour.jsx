import React from "react";
import nonurgentcontesticon from "../../../../src/public/imgPostproject/nonurgentcontesticon.svg";
import urgentcontesticon from "../../../../src/public/imgPostproject/urgentcontesticon.svg";
export const Stepfour = ({ Data, setData }) => {
  console.log(Data.pay);
  console.log(Data.budget);
  console.log(Data.CurrencySymbol);
  
  const Currency = () => {
    const x = document.getElementById("inputState").value;
    console.log(x);
    if (x === "USD") {
      document.getElementById("symbol").innerHTML = "<b>$</b>";
      document.getElementById("symbol2").innerHTML = "<b>$</b>";
    } else if (x === "NZD") {
      document.getElementById("symbol").innerHTML = "<b>$</b>";
      document.getElementById("symbol2").innerHTML = "<b>$</b>";
    } else if (x === "AUD") {
      document.getElementById("symbol").innerHTML = "<b>$</b>";
      document.getElementById("symbol2").innerHTML = "<b>$</b>";
    } else if (x === "HKD") {
      document.getElementById("symbol").innerHTML = "<b>$</b>";
      document.getElementById("symbol2").innerHTML = "<b>$</b>";
    } else if (x === "SGD") {
      document.getElementById("symbol").innerHTML = "<b>$</b>";
      document.getElementById("symbol2").innerHTML = "<b>$</b>";
    } else if (x === "CAD") {
      document.getElementById("symbol").innerHTML = "<b>$</b>";
      document.getElementById("symbol2").innerHTML = "<b>$</b>";
    } else if (x === "EUR") {
      document.getElementById("symbol").innerHTML = "<b>£</b>";
      document.getElementById("symbol2").innerHTML = "<b>£</b>";
    } else if (x === "GBP") {
      document.getElementById("symbol").innerHTML = "<b>£</b>";
      document.getElementById("symbol2").innerHTML = "<b>£</b>";
    } else if (x === "INR") {
      document.getElementById("symbol").innerHTML = "<b>₹</b>";
      document.getElementById("symbol2").innerHTML = "<b>₹</b>";
    }
    const y=document.getElementById("symbol").innerText;
    setData({ ...Data, step_Four_Currency_code:y+"-"+ x })
  };
  
  // ------------------------------------------------------------------------------------------------//
  const submit = (e) => {
    if (e === 1) {
      setData({ ...Data, Day: "manyDay" });
      document.getElementById("post").style.border = "thick solid #139ff0 ";
      document.getElementById("start").style.border = "";
    } else if (e === 2) {
      setData({ ...Data, Day: "Day" });
      document.getElementById("start").style.border = "thick solid #139ff0 ";
      document.getElementById("post").style.border = "";
    }
  };

  // -------------------------------------------------Data.pay-----------------------------------------------//
  if (Data.pay !== "") {
    if (Data.pay === "Pay by the hour") {
      return (
        <>
          <div className="row">
            <div className="col-md-12">
              <p style={{ fontSize: "1.4rem" }}>
                <b>What is your estimated budget?</b>
              </p>
            </div>
            <div className="col-md-2">
              <select
                id="inputState"
                class="form-select mt-5"
                onChange={Currency}
                name="step_Four_Currency_code"
              >
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
            <div className="col-md-5">
              <p style={{ fontSize: "1.4rem" }}>Minimum budget</p>
              <div className="border d-flex flex-row">
                <p id="symbol" className="m-auto">
                  <b>$</b>
                </p>
                <input
                  type="number"
                  name="Minimum_Per_hour"
                  value={Data.Minimum_Per_hour}
                  onChange={(event) =>
                    setData({ ...Data, Minimum_Per_hour: event.target.value })}
                  style={{
                    width: "70%",
                    height: "5vh",
                    border: "0",
                  }}
                  className="form-control"
                />
                <p className="m-auto">
                  <b>per hour</b>
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <p style={{ fontSize: "1.4rem" }}>Maximum budget</p>
              <div className="border d-flex flex-row">
                <p id="symbol2" className="m-auto">
                  <b>$</b>
                </p>
                <input
                  type="number"
                  name="Maximum_Per_hour"
                  value={Data.Maximum_Per_hour}
                  onChange={(event) =>
                    setData({ ...Data, Maximum_Per_hour: event.target.value })}
                  style={{
                    width: "70%",
                    height: "5vh",
                    border: "0",
                  }}
                  className="form-control"
                />
                <p className="m-auto">
                  <b>per hour</b>
                </p>
              </div>
            </div>
          </div>
        </>
      );
    } else if (Data.pay === "Pay fixed price") {
      return (
        <>
          <div className="row">
            <div className="col-md-12">
              <p style={{ fontSize: "1.4rem" }}>
                <b>What is your estimated budget?</b>
              </p>
            </div>
            <div className="col-md-2">
              <select
                id="inputState"
                class="form-select mt-5"
                onChange={Currency}
                name="step_Four_Currency_code"
              >
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
            <div className="col-md-5">
              <p style={{ fontSize: "1.4rem" }}>Minimum budget</p>
              <div className="border d-flex flex-row">
                <p id="symbol" className="m-auto">
                  <b>$</b>
                </p>
                <input
                  type="number"
                  name="Minimum_fix_price"
                  value={Data.Minimum_fix_price}
                  onChange={(event) =>
                    setData({ ...Data, Minimum_fix_price: event.target.value })}
                  style={{
                    width: "95%",
                    height: "5vh",
                    border: "0",
                  }}
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-md-5">
              <p style={{ fontSize: "1.4rem" }}>Maximum budget</p>
              <div className="border d-flex flex-row">
                <p id="symbol2" className="m-auto">
                  <b>$</b>
                </p>
                <input
                  type="number"
                  name="Maximum_fix-price"
                  value={Data.Maximum_fix_price}
                  onChange={(event) =>
                    setData({ ...Data, Maximum_fix_price: event.target.value })}
                  style={{
                    width: "95%",
                    height: "5vh",
                    border: "0",
                  }}
                  className="form-control"
                />
              </div>
            </div>
          </div>
        </>
      );
    }
    //------------------------------------------Data.budget ------------------------------------//
  } else if (Data.budget !== "") {
    return (
      <>
        <div className="row mt-5">
          <p className="ms-5 mb-5" style={{ fontSize: "1.3rem" }}>
            <b>Is your contest urgent?</b>
          </p>
          <div className="row g-1 d-flex justify-content-evenly">
            <div
              id="post"
              className="col-md-5 shadow p-3 me-1 bg-body rounded"
              onClick={() => submit(1)}
            >
              <div className="row">
                <div className="col-md-6 d-flex justify-content-center align-content-center">
                  <img
                    className="img-fluid w-50"
                    src={nonurgentcontesticon}
                    alt=""
                  />
                </div>
                <div className="col-md-6">
                  <p style={{ fontSize: "1.3rem" }}>
                    <b>3 to 30 days</b>
                  </p>
                  <p>
                    Give freelancers plenty of time to submit quality entries.
                    Best for getting the most creativity.
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
                  <img
                    className="img-fluid w-50"
                    src={urgentcontesticon}
                    alt=""
                  />
                </div>
                <div className="col-md-6">
                  <p style={{ fontSize: "1.3rem" }}>
                    <b>1 day</b>
                  </p>
                  <p>
                    Receive faster response from freelancers and get great
                    entries returned to you in just 1 day!
                  </p>
                  <div>
                    <p>
                      <b>35.00{Data.CurrencyCode}</b>
                    </p>
                    <span class="badge bg-danger">URGENT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};
