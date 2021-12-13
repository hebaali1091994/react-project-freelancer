import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./SignUp.css";
const SignUp = () => {
  const [Signup, setData] = useState({
    Email: "",
    Password: "",
    username:"",
    work:"",
    hire:""

  });
  console.log("data", Signup);
  const [formStep, setFormStep] = React.useState(0);
  const completeFormstep = () => {
    setFormStep((cur) => cur + 1);
  };
  const renderForm = () => {
    if (formStep > 2) {
      return undefined;
    }
  };

  return (
    <div classNameName="bg-signup">
      <div className="fluid ">
        <form
          className="login_form"
          action=""
          method="post"
          name="form"
          onsubmit="return validated()"
        >
          {formStep === 0 && (
            <section>
              <div className="">
                <img
                  src="logo.JPG"
                  className="img-fluid"
                  id="img"
                  alt="Responsive image"
                />
              </div>
              <h5 className="card-text">Sign Up</h5>
              <div className="card  btu">
                <button type="button" className="btn  btn-lg btn-block">
                  <a href="https://www.facebook.com/">
                    {" "}
                    <i className="bi bi-facebook"></i>Continue with Facebook{" "}
                  </a>
                </button>
              </div>
              <div className="divider ">OR</div>
              <div className="login_form">
                <div className="col inpute">
                  <input
                    type="email"
                    name="Email"
                    className="form-control email"
                    id="inputAddress"
                   
                    value={Signup.Email}
                    onChange={(event) =>
                      setData({ ...Signup, Email: event.target.value })
                    }
                  />
                </div>
                <div id="email_error">
                  <img
                    src="warning.JPG"
                    className="img-fluid"
                    id="img"
                    alt="Responsive image"
                  />
                  Please enter an email address.{" "}
                </div>
                <div className="col inpute">
                  <input
                    type="password"
                    name="Password"
                    className="form-control"
                    id="inputAddress"
                    value={Signup.Password}
                    onChange={(event) =>
                      setData({ ...Signup, Password: event.target.value })
                    }
                  />
                </div>
                <div id="pass_error">
                  <img
                    src="warning.JPG"
                    className="img-fluid"
                    id="img"
                    alt="Responsive image"
                  />
                  Please enter a password.
                </div>
              </div>
              <div className="form-checksignup">
                <input
                  className="form-check-input "
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  I agree to Freelancer{" "}
                  <a href="useragreement.html">User Agreement </a> and{" "}
                  <a href="privacy.html">Privacy Policy</a>
                </label>
              </div>
              <div className="card submit ">
                <button
                  type="button"
                  className="btn  btn-lg btn-block"
                  onClick={completeFormstep}
                >
                  Join Freelancer
                </button>
              </div>
              <hr />

              <div className="p">
                <p>
                  Already have an account? <a href="/Login">Log in</a>
                </p>
              </div>
            </section>
          )}

          {formStep === 1 && (
            <section>
              <div className="">
                <a href="#">
                  {" "}
                  <i className="bi bi-chevron-left"></i>
                </a>
                <img
                  src="logo.JPG"
                  className="img-fluid"
                  id="img"
                  alt="Responsive image"
                />
              </div>
              <h5 className="card-text">Choose a username</h5>
              <p>Please note that a username cannot be changed once chosen.</p>
              <div className="col inpute">
                <input
                  type="text"
                  className="form-control1"
                  className=" user" name="username"
                  id="inputAddress"
                  value=""
                  onclick="myFunction()"
                  value={Signup.username}
                    onChange={(event) =>
                      setData({ ...Signup, username: event.target.value })
                    }
                />
              </div>
              <p id="suggest">Suggestions:</p>
              <div className=" submit ">
                <button
                  type="submit"
                  className="btn  btn-lg btn-block"
                  onClick={completeFormstep}
                >
                  <a href="#">Next</a>
                </button>
              </div>
            </section>
          )}

          {formStep == 2 && (
            <section>
              <div className="icon">
                <a href="username.html">
                  {" "}
                  <i className="bi bi-chevron-left"></i>
                </a>
                <img
                  className="img"
                  src="logo.JPG"
                  className="img-fluid"
                  id="img"
                  alt="Responsive image"
                />
              </div>
              <h5>Select account type</h5>
              <p>Don't worry, this can be changed later.</p>
              <div className="work">
                <img
                  src="work.JPG"
                  className="img-fluid"
                  id="img"
                  alt="Responsive image"
                />
                <p className=" account" onClick={completeFormstep}  name="work"  value={Signup.work}
                    onChange={(event) =>
                      setData({ ...Signup, work: event.target.value })
                    }>
                  I want to work
                </p>
                <i className="bi bi-arrow-right"></i>
              </div>
              <div className="hire">
                <img
                  src="hire.JPG"
                  className="img-fluid"
                  id="img"
                  alt="Responsive image"
                />
                <p className=" account" onClick={completeFormstep}  name="hire" value={Signup.hire}
                    onChange={(event) =>
                      setData({ ...Signup, hire: event.target.value })
                    } >
                  I want to hire
                </p>
                <i className="bi bi-arrow-right"></i>
              </div>
            </section>
          )}

          {formStep === 3 && (
            <section>
              <div className="">
                <img
                  src="logo.JPG"
                  className="img-fluid"
                  id="img"
                  alt="Responsive image"
                />
              </div>
              <h3>Sign Up Success</h3>
            </section>
          )}
          {renderForm()}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
