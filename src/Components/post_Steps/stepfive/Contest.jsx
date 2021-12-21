import React from "react";
import './Stepfive.css'
import ContestTwo from "./ContestTwo"
import ContestOne from "./ContestOne"
const Contest = ({ Data, setData }) => {
  
  //--------------------------------------------------Data.Day === "manyDay"----------------------------------------------//
  if (Data.Day === "manyDay") {
    return (
      <ContestOne
      Data={Data}
      setData={setData} 
      />
    );
  }
  //--------------------------------------------------Data.Day === "Day"----------------------------------------------//
  else if (Data.Day === "Day") {
    return (
     < ContestTwo 
     Data={Data}
    setData={setData} 
     />
    );
  }
};

export default Contest;
