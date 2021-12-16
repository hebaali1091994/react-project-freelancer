import React, { useState, useRef, useContext } from "react";
import {useForm} from 'react-hook-form'
import "./SignUp.css";
import freelancelogo from '../../../src/public/freelancelogo.svg'
import work from '../../../src/public/work.svg'
import hire from '../../../src/public/hire.svg'
import axios from "axios"
import { Context } from '../../context/Context';
const SignUp = () => {
      const { user, dispatch, isFetching} = useContext(Context);

  const EmailRef = useRef();
    const PasswordRef = useRef();
  const [formStep, setFormStep] = React.useState(0);
  const{watch,register}=useForm()
  const completeFormstep=()=>{

    setFormStep(cur=>cur+1)
  }
  const renderForm=()=>{
      if(formStep>4){
      return undefined}
      else if(formStep===3){
return(

<p>Please wait while we redirect you.........</p>

)

      }
      else {


      }
  }
  const [Sign, setData] = useState({

    Email:"",
    Password:"",
    userName:"",
    acountType:"",
  })
console.log(Sign)
const submit=(e)=>{
  if(e===0){


      const handleSubmit = async (e)=>{
 
    
    try{
        await axios.post('/auth/',Sign);
        const res = await axios.post('/auth/login',{
        Email : Sign.Email,
        Password : Sign.Password
      });
dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    res.data && window.location.replace('/Skills');
  }catch(error){
  console.log(error.response)
  }
}
      setData({...Sign,acountType:"0"})
      document.getElementById("work").style.border="thick solid #139ff0 ";
      document.getElementById("hire").style.border="";
      handleSubmit();
  }else if(e===1){
      const handleHire = async (e)=>{
    try{
        await axios.post('/auth/',Sign);
   const res = await axios.post('/auth/login',{
        Email : Sign.Email,
        Password : Sign.Password
      });
dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    res.data && window.location.replace('/Post-project');
  }catch(error){
  console.log(error.response)
  }

}
  setData({...Sign,acountType:"1"})
  document.getElementById("hire").style.border="thick solid #139ff0 ";
  document.getElementById("work").style.border="";
  handleHire()
  }
}
  return (
    <div className="container">
      <div className="row">
    <div classNameName="bg-signup">
      <div className="fluid m-auto">
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
                <img className="img-fluid " src={freelancelogo}  alt="" id="img"/>
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
                    ref={EmailRef}
                     name="Email" 
                    value={Sign.Email}
                   onChange={(event)=>setData({...Sign,Email:event.target.value})}

                  />
                </div>
                <div id="email_error">
                  <img src="warning.JPG" className="img-fluid"  id="img" alt=""/>
                  Please enter an email address.
                </div>
                <div className="col inpute">
                  <input
                    type="password"
                    className="form-control"
                    id="inputAddress"
                    placeholder="Password"
                    name="Password" 
                    value={Sign.Password}
                    ref={PasswordRef}
                   onChange={(event)=>setData({...Sign,Password:event.target.value})}
                  />
                </div>
                <div id="pass_error">
                  <img src="warning.JPG" className="img-fluid" id="img"  alt="" />
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
                <button type="submit" className="btn  btn-lg btn-block" onClick={completeFormstep}>
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
                <img src={freelancelogo} className="img-fluid" id="img" alt="" />
              </div>
              <h5 className="card-text">Choose a username</h5>
              <p>Please note that a username cannot be changed once chosen.</p>
              <div className="col inpute">
                <input
                  type="text"
                  className="form-control1 user"
                  id="inputAddress"
                  placeholder="Username"
                  onclick="myFunction()"
                  name="userName" 
                    value={Sign.userName}
                   onChange={(event)=>setData({...Sign,userName:event.target.value})}
                      style={{height:"30px"}}
                />
              </div>
              <p id="suggest">Suggestions:</p>
              <div className=" submit ">
                <button type="submit" className="btn  btn-lg btn-block"  onClick={completeFormstep}>
                  <a href="#">Next</a>
                </button>
              </div>
            </section>
          )}

          {formStep == 2 && (
            <div className="container">
            <section className="row">
              <div className="coll-md-12">
                <a href="username.html">
                <b><i className="bi bi-chevron-left fs-4 text-dark"></i></b> 
                </a>
                <img src={freelancelogo} className="img-fluid img" id="img" alt="" />
              </div>
              <h5>Select account type</h5>
              <p>Don't worry, this can be changed later.</p>
              <div className="workclint col-md-12  shadow bg-body rounded " onClick={()=>submit(0)} id="work">
                <div className="row d-flex flex-row">
                <div className="col-md-5  align-self-center">
                <img src={work}  className="img-fluid" alt="" />
                </div>
                <div className="col-md-5 text-center align-self-center">
                <p className=" account" onClick={completeFormstep}>I want to work</p>
                </div>
                <div className="col-md-2  align-self-center">
                <i className="bi bi-arrow-right"></i>
                </div>
                </div>
              </div>
              
              <div className="hireclint col-md-12  shadow bg-body rounded mt-5" id="hire">
              <div className="row d-flex flex-row" onClick={()=>submit(1)}>
              <div className="col-md-5  align-self-center">
                <img src={hire} className="img-fluid" alt="" />
                </div>
                <div className="col-md-5 text-center align-self-center">
                <p className=" account" onClick={completeFormstep}>I want to hire</p>
                </div>
                <div className="col-md-2  align-self-center">
                <i className="bi bi-arrow-right"></i>
                </div>
                </div>
              </div>
            </section>
            </div>
          )}

          {formStep === 3 && (
            <section>
              <div className="">
                <img src={freelancelogo} className="img-fluid" id="img" alt=""/>
              </div>
              <h3>Sign Up Success</h3>
              
            </section>
          )}
        </form>
      </div>
    </div>
    </div>
    </div>
  );
};

export default SignUp;
