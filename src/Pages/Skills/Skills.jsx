import React, { useState, useEffect } from "react";
import "./Skills.css"
import Tell from '../../Components/skillscomponents/Tell skills/Tell'
import freelancelogo from "../../../src/public/freelancelogo.svg"
import Profile from "../../Components/skillscomponents/ProfileDetails/Profile";
import About from "../../Components/skillscomponents/about/About";
import Whatlang from "../../Components/skillscomponents/whatlang/Whatlang";
import Located from "../../Components/skillscomponents/you located/located";
import Verification from "../../Components/skillscomponents/verification/Verification";
import axios from 'axios';

const Skills = () => {
  //  const [Skills, setSkills] = useState([])


  // useEffect(() => {
    
<<<<<<< HEAD
  //   const fetchSkills = async ()=>{
  //     const res = await axios.get("/Category/");
  //     setSkills(res.data)
  //   }
  //   fetchSkills();
  // },[]);
  // console.log(Skills);

=======
    const fetchSkills = async ()=>{
      const res = await axios.get("/Category/");
      setSkills(res.data)
    }
    fetchSkills();
  },[]);
  console.log(Skills);
 
>>>>>>> ee13e0c6834bc3f686264a31a6543485965257b5

  const [formStep, setFormStep] = React.useState(0);

  const completeFormstep = () => {
    setFormStep((cur) => cur + 1);
if (formStep===5){
  window.location.replace('/');

}  }
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
    img:"",
    first:"",
    Last:"",
    description:"",
    DescribeU:"",
    DataS:"",
    birht:"",
    Address:"",
  })
  console.log(skill);
    return (
        <>
        <div className="container-fluid mt-3">
        <div className="row">
            <div className="col-md-12 d-flex">
                <img class="freelancer-logo" src={freelancelogo}  alt=""/>
                <p className="m-auto fs-4"><b>Profile details</b></p>
        
            </div>
            <div className="col-md-12">
            <progress max="7" value={formStep + 1} style={{ width: "100%", height: "5vh" }}/>
        </div>
   
    <div class="container">
        <div class="row">
            <div classname="col-md-12">
            <form className="col-sm-12 col-md-12">
<<<<<<< HEAD
          {formStep === 0 && (<Tell   skill={skill} setData={setData}/>)}
          {formStep === 1 && <Profile skill={skill} setData={setData}/>}
          {formStep === 2 && <About  skill={skill} setData={setData} />}
          {formStep === 3 && <Whatlang skill={skill} setData={setData} />}
          {formStep === 4 && (<Located skill={skill} setData={setData} />)}
          {formStep === 5 && <Verification skill={skill} setData={setData} />}
=======
          {formStep === 0 && (<Tell Skills={Skills}  Data={skill} setData={setData}/>)}
          {formStep === 1 && <Profile Data={skill} setData={setData}/>}
          {formStep === 2 && <About Profile Data={skill} setData={setData} />}
          {formStep === 3 && <Whatlang Data={skill} setData={setData} />}
          {formStep === 4 && (<Located Data={skill} setData={setData} />)}
          {formStep === 5 && <Verification Data={skill} setData={setData} />}
>>>>>>> ee13e0c6834bc3f686264a31a6543485965257b5
          <div className="d-flex justify-content-between mt-5">
            {renderButton()}
          </div>
        </form>
            </div>
        </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default Skills