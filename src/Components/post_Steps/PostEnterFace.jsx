import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Firstform } from "./firstForm/Firstform";
import { Secondform } from "./second step/Secondform";
import Stepthree from "./step three/Stepthree";
import { Stepfour } from "./stepfour/Stepfour";
import Stepfive from "./stepfive/Stepfive";
import Stepsix from "../post_Steps/stepsix/Stepsix";
import { Context } from '../../context/Context';
import { useContext } from 'react';
import axios from "axios";

const PostEnterFace = () => {
  const {user} = useContext(Context)
   const [file, setFile] = useState(null);

    const [Data, setData] = useState({
    ChooseName: "",
    Tellus: "",
    uploadimg: "",
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
    state:"",
    PRIVATE: "",
    StepFiveLongContest: "",
    state:"Pending",
  });
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
        const handleSubmit = async () =>{
            const newPost = {
    userid : user._id,
    ChooseName:Data.ChooseName,
    Tellus:Data.Tellus,
    skills:Data.skills,
    postproject:Data.postproject,
    pay:Data.pay,
    budget:Data.budget,
    CurrencyCode:Data.CurrencyCode,
    CurrencySymbol:Data.CurrencySymbol,
    step_Four_Currency_code:Data.step_Four_Currency_code,
    Minimum_Per_hour:Data.Minimum_Per_hour,
    Maximum_Per_hour:Data.Maximum_Per_hour,
    Maximum_fix_price:Data.Maximum_fix_price,
    Minimum_fix_price:Data.Minimum_fix_price,
    Day:Data.Day,
    type_of_project:Data.type_of_project,
    FEATURED:Data.FEATURED,
    TOP_CONTEST:Data.TOP_CONTEST,
    HIGHLIGHT:Data.HIGHLIGHT,
    SEALED:Data.SEALED,
    NDA:Data.NDA,
    state:Data.state,

    PRIVATE:Data.PRIVATE,
    StepFiveLongContest:Data.StepFiveLongContest    
  };
//   if(file){
//     const data = new FormData();
//     const fileName = Date.now() + file.name;
//     data.append("name", fileName);
//     data.append("file", file)
//     Data.uploadimg  = fileName;
//     try{
//       await axios.post("/upload",Data);
//         }catch(error){
// console.log("Sorry No Image Upload");
//         }
//   }
try{
  const res = await axios.post(`/Project/`, newPost)
      res.data && window.location.replace('/DisplayProject/');

}catch(error){
}
}
handleSubmit()
console.log(Data);
    }
  };
  const FormStepBack = () => {
    setFormStep((cur) => cur - 1);
  };
  //-----------------------------------------------------------------------------//

  // useEffect(() => {
  //     const fetchData = async () => {
  //       setData(await getUserData())
  //     }
  //     fetchData()
  //   }, []) ;
  
   // useEffect(() => {
    //   axios.post(`http://localhost:3000/`).then((response) => {
    //       console.log("response", response);
    //       const newPosts = response.data;
    //       setPosts(newPosts);
    //     });
    // }, []);




  const renderButton = () => {
    if (formStep === 0) {
      return (
        <>
          <button type="button" className="btn btn-secondary disabled" onClick={FormStepBack}>Back</button>
          <button type="button" className="btn btn-primary" onClick={completeFormstep}> Next Step</button>
        </>
      );
    } else if (formStep <=4) {
      return (
        <>
          <button  type="button"className="btn btn-secondary" onClick={FormStepBack}>Back</button>
          <button  type="button"className="btn btn-primary"onClick={completeFormstep}>Next Step</button>
        </>
      );
    }
    else if (formStep ===5) {
      return (
        <>
          <button  type="button"className="btn btn-secondary" onClick={FormStepBack}>Back</button>
          <button  type="button"className="btn btn-primary"onClick={completeFormstep}>Submet</button>
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
            <b>Step {formStep + 1} of 6</b>
          </p>
          <progress max="6" value={formStep + 1} style={{ width: "100%", height: "5vh" }}/>
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
