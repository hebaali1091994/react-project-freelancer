import React from "react";
import { useForm } from "react-hook-form";
import "./SignUp.css";
const SignUp = () => {
  const [formStep, setFormStep] = React.useState(0);
  const { watch, register } = useForm();
  const completeFormstep = () => {
    setFormStep((cur) => cur + 1);
  };
  const renderForm = () => {
    if (formStep > 4) {
      return undefined;
    } else if (formStep === 3) {
      return <p>Please wait while we redirect you.........</p>;
    } else {
    }
  };
  return (
    <div className="container">
      <div className="row">
      <div className="fluid col-md-12">
        <form className="login_form" action="" method="post"name="form" onsubmit="return validated()">
          {formStep === 0 && (
            <section>
              <div className="">
                <img src="logo.JPG" className="img-fluid"id="img"alt="Responsive image"/>
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
                    className="form-control email"
                    id="inputAddress"
                    placeholder="Email"
                    ref={register()}
                  />
                </div>
                <div id="email_error">
                  <img src="warning.JPG"className="img-fluid"id="img"alt="Responsive image"/>
                  Please enter an email address.{" "}
                </div>
                <div className="col inpute">
                  <input
                    type="password"
                    className="form-control"
                    id="inputAddress"
                    placeholder="Password"
                  />
                </div>
                <div id="pass_error">
                  <img src="warning.JPG"className="img-fluid" id="img" alt="Responsive image" />
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
                  type="submit"
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
                <img src="logo.JPG" className="img-fluid" id="img" alt="Responsive image"/>
              </div>
              <h5 className="card-text">Choose a username</h5>
              <p>Please note that a username cannot be changed once chosen.</p>
              <div className="col inpute">
                <input
                  type="text"
                  className="form-control1"
                  className=" user"
                  id="inputAddress"
                  placeholder="Username"
                  value=""
                  onclick="myFunction()"
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
                <p className=" account" onClick={completeFormstep}>
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
                <p className=" account" onClick={completeFormstep}>
                  I want to hire
                </p>
                <i className="bi bi-arrow-right"></i>
              </div>
            </section>
          )}

          {formStep === 3 && (
            <section>
              <div className="">
                <img src="logo.JPG" className="img-fluid" id="img" alt="Responsive image"/>
              </div>
              <h3>Sign Up Success</h3>
            </section>
          )}
          <pre>{JSON.stringify(watch(), null, 2)}</pre>
        </form>
      </div>
    </div>
    </div>
  );
};

export default SignUp;
