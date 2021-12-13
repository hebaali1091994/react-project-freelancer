import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Firstform } from "./firstForm/Firstform";
import { Secondform } from "./second step/Secondform";
import Stepthree from "./step three/Stepthree";
import { Stepfour } from "./stepfour/Stepfour";
import Stepfive from "./stepfive/Stepfive";
import Stepsix from "../post_Steps/stepsix/Stepsix";
const PostEnterFace = () => {
  const [formStep, setFormStep] = React.useState(0);
  const completeFormstep = () => {
      if(formStep===0){
      if(Data.ChooseName!=="" &&Data.Tellus!==""&&Data.skills!==""){
        setFormStep((cur) => cur + 1);
      }
    }else if (formStep===1){
        if(Data.postproject!==""){
            setFormStep((cur) => cur + 1);
          }
    }else if (formStep===2){
        if(Data.pay!==""||Data.budget!==""){
            setFormStep((cur) => cur + 1);
          }
    }else if (formStep===3){
        if(Data.Minimum_Per_hour!=="" && Data.Maximum_Per_hour!==""){
            setFormStep((cur) => cur + 1);
          }else if(Data.Maximum_fix_price!=="" && Data.Minimum_fix_price!==""){
            setFormStep((cur) => cur + 1);
          }else if(Data.Day!==""){
            setFormStep((cur) => cur + 1);
          }
    }
    else if (formStep===4){
        if(Data.type_of_project!==""){
            setFormStep((cur) => cur + 1);
          }else if(Data.Day!=="") {
            if(Data.Day==="manyDay")
           {
              if(Data.StepFiveLongContest!=="")
            {
                setFormStep((cur) => cur + 1);
            }
           }
          else if(Data.Day==="Day"){
            setFormStep((cur) => cur + 1);
          }
        }
  }
    else if (formStep===5){
        // if(Data.pay!==""&&Data.budget!==""){
        //     setFormStep((cur) => cur + 1);
        //   }
    }
  };
  const FormStepBack = () => {
    setFormStep((cur) => cur - 1);
  };
  //-----------------------------------------------------------------------------//
  const [Data, setData] = useState({
    ChooseName: "",
    Tellus: "",
    uploadimg: "",
    skills: [],
    postproject: "",
    pay: "",
    budget: "",
    CurrencyCode: "",
    CurrencySymbol: "",
    step_Four_Currency_code: "",
    Minimum_Per_hour: "",
    Maximum_Per_hour: "",
    Maximum_fix_price: "",
    Minimum_fix_price: "",
    Day: "",
    type_of_project: "",
    GUARANTEED: "",
    FEATURED: "",
    TOP_CONTEST: "",
    HIGHLIGHT: "",
    SEALED: "",
    NDA: "",
    PRIVATE: "",
    StepFiveLongContest: "",
  });
  console.log(Data);
  // useEffect(() => {
  //     const fetchData = async () => {
  //       setData(await getUserData())
  //     }
  //     fetchData()
  //   }, []) ;

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

  //-----------------------------------------------------------------------------------------//
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <p>
            <b>Step {formStep + 1} of 7</b>
          </p>
          <progress max="7" value={formStep + 1} style={{ width: "100%", height: "5vh" }}/>
        </div>
        <form className="col-sm-12 col-md-12">
          {formStep === 0 && (<Firstform Data={Data} setData={setData}/>)}
          {formStep === 1 && <Secondform Data={Data} setData={setData}/>}
          {formStep === 2 && <Stepthree Data={Data} setData={setData} />}
          {formStep === 3 && <Stepfour Data={Data} setData={setData} />}
          {formStep === 4 && <Stepfive Data={Data} setData={setData} />}
          {formStep === 5 && <Stepsix Data={Data} setData={setData} />}
          <div className="d-flex justify-content-between mt-5">
            {renderButton()}
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostEnterFace;

// else if(formStep===2) {
//     return(
//         <>
//         <button type="button" className="btn btn-secondary"  onClick={FormStepBack} >Back</button>
//         <button type="button" className="btn btn-primary" onClick={completeFormstep} >Next Step</button>

//       </>
//     )
// }
