import React, { useState, useEffect } from "react";
import "./Skills.css"
import Tell from '../../Components/skillscomponents/Tell skills/Tell'
import freelancelogo from "../../../src/public/freelancelogo.svg"
import Profile from "../../Components/skillscomponents/ProfileDetails/Profile";
import About from "../../Components/skillscomponents/about/About";
import Whatlang from "../../Components/skillscomponents/whatlang/Whatlang";
import Located from "../../Components/skillscomponents/you located/located";
import Verification from "../../Components/skillscomponents/verification/Verification";

const Skills = () => {
  const [formStep, setFormStep] = React.useState(0);

  const completeFormstep = () => {
    setFormStep((cur) => cur + 1);
  }
  const FormStepBack = () => {
    setFormStep((cur) => cur - 1);
  };
  const renderButton = () => {
    if (formStep === 0) {
      return (
        <>
          <button type="button" className="btn btn-secondary disabled" onClick={FormStepBack}>Back</button>
          <button type="button" className="btn btn-primary" onClick={completeFormstep}> Next Step</button>
        </>
      );
    } else {
      return (
        <>
          <button  type="button"className="btn btn-secondary" onClick={FormStepBack}>Back</button>
          <button  type="button"className="btn btn-primary"onClick={completeFormstep}>Next Step</button>
        </>
      );
    }
  };
  const [skill, setData] = useState({

  })
    return (
        <>
        <div classNameName="container-fluid mt-3">
        <div className="row">
            <div className="col-md-12 d-flex">
                <img class="freelancer-logo" src={freelancelogo}  alt=""/>
                <p className="m-auto fs-4"><b>Profile details</b></p>
        <div className='Skills'>
                <div class="container">
        <div class="row">
            <div class="sv">
                <img src="./Skills.svg" alt="" />
            </div>
            <h2>Tell us your top skills</h2>
            <div class="req">This helps us recommend jobs for you.</div>
            <div class="search">
                <span><i class="fas fa-search"></i></span>
                <input type="search" placeholder="Search a skill" class="form-control" />
            </div>
            <hr/>
            <div class="category">
                <div class="category-item">
                    <div class="item col">
                        <h3>Select a category</h3>
                        <hr/>
                    </div>
                    <div class="item col">
                        <h3>No category selected</h3>
                        <hr/>
                    </div>
                    <div class="item col">
                        <h3>1 out of 20 skills selected</h3>
                        <hr/>
                    </div>
                </div>
                <button>Next</button>
            </div>
            <div className="col-md-12">
            <progress max="7" value={formStep + 1} style={{ width: "100%", height: "5vh" }}/>
        </div>
    </div>
    </div>
    <div class="container">
        <div class="row">
            <div classname="col-md-12">
            <form className="col-sm-12 col-md-12">
          {formStep === 0 && (<Tell Data={skill} setData={setData}/>)}
          {formStep === 1 && <Profile Data={skill} setData={setData}/>}
          {formStep === 2 && <About Profile Data={skill} setData={setData} />}
          {formStep === 3 && <Whatlang Data={skill} setData={setData} />}
          {formStep === 4 && (<Located Data={skill} setData={setData} />)}
          {formStep === 5 && <Verification Data={skill} setData={setData} />}
          <div className="d-flex justify-content-between mt-5">
            {renderButton()}
          </div>
        </form>
            </div>
        </div>
        </div> 
        </div> 
        </div> 
        </div> 
        </div> 
        </>
    )
}

export default Skills