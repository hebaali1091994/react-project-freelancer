import React from 'react'
import projectIcon from '../../../public/imgPostproject/projectIcon.svg';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const StepsixOne = ({ Data, setData }) => {
    if(Data.pay==="Pay by the hour"){
        if(Data.type_of_project==="Standard project"){
            return (
                <>
                <div className="col-md-12">
                         <p className="fs-6"><b>Are these details correct?</b></p>
                     </div>
                 <div className="row shadow bg-body rounded ">
                     <div className="col-md-3 text-center border-end border-5">
                        <img src={projectIcon} alt=""/>
                        <p>PROJECT</p>
                        <p className="s-4">{Data.Minimum_Per_hour} To {Data.Maximum_Per_hour} {Data.step_Four_Currency_code} per hour</p>
                     </div>
                     <div className="col-md-8">
                         <p>{Data.ChooseName}</p>
                         <p>{Data.Tellus}</p>
                         <p>{Data.skills}</p>
                     </div>
                 </div>
                </>
            )
        }else if(Data.type_of_project==="Recruiter project"){
            return (
                <div className="row" >
                <div className="col-md-12">
                         <p className="fs-6"><b>Are these details correct?</b></p>
                     </div>
                 <div className="row shadow bg-body rounded mt-2 col-md-12 ">
                     <div className="col-md-3 text-center border-end border-5">
                        <img src={projectIcon} alt=""/>
                        <p>PROJECT</p>
                        <p className="s-4">{Data.Minimum_Per_hour} To {Data.Maximum_Per_hour} {Data.step_Four_Currency_code} per hour</p>
                     </div>
                     <div className="col-md-8 m-2">
                         <p>{Data.ChooseName}</p>
                         <p>{Data.Tellus}</p>
                         <p>{Data.skills}</p>
                         <span class="badge text-light" style={{backgroundColor:"#7d30c9"}} >RECRUITER</span>
                     </div>
                 </div>
                 <div className="col-md-12 mt-3">
                     <Stack sx={{ width: '100%'}}  spacing={2}>
                        <Alert severity="info">Your project will be sent live immediately, but you will not be charged yet.</Alert>
                        </Stack>
                     </div>
                     <div className="col-md-12 text-center mt-3">
                         <p className="m-auto"><b>Total:9.50 {Data.step_Four_Currency_code}</b></p>
                     </div>
                </div>
            )
        }
    }else if(Data.pay==="Pay fixed price"){
        if(Data.type_of_project==="Standard project"){
            return (
                <>
                <div className="col-md-12">
                         <p className="fs-6"><b>Are these details correct?</b></p>
                     </div>
                 <div className="row shadow bg-body rounded ">
                     <div className="col-md-3 text-center border-end border-5">
                        <img src={projectIcon} alt=""/>
                        <p>PROJECT</p>
                        <p className="s-4">{Data.Minimum_fix_price} To {Data.Maximum_fix_price} {Data.step_Four_Currency_code}</p>
                     </div>
                     <div className="col-md-8">
                         <p>{Data.ChooseName}</p>
                         <p>{Data.Tellus}</p>
                         <p>{Data.skills}</p>
                     </div>
                 </div>
                </>
            )
        }else if(Data.type_of_project==="Recruiter project"){
            return (
                <div className="row" >
                <div className="col-md-12">
                         <p className="fs-6"><b>Are these details correct?</b></p>
                     </div>
                 <div className="row shadow bg-body rounded mt-2 col-md-12 ">
                     <div className="col-md-3 text-center border-end border-5">
                        <img src={projectIcon} alt=""/>
                        <p>PROJECT</p>
                        <p className="s-4">{Data.Minimum_fix_price} To {Data.Maximum_fix_price} {Data.step_Four_Currency_code}</p>
                     </div>
                     <div className="col-md-8 m-2">
                         <p>{Data.ChooseName}</p>
                         <p>{Data.Tellus}</p>
                         <p>{Data.skills}</p>
                         <span class="badge text-light" style={{backgroundColor:"#7d30c9"}} >RECRUITER</span>
                     </div>
                 </div>
                 <div className="col-md-12 mt-3">
                     <Stack sx={{ width: '100%'}}  spacing={2}>
                        <Alert severity="info">Your project will be sent live immediately, but you will not be charged yet.</Alert>
                        </Stack>
                     </div>
                     <div className="col-md-12 text-center mt-3">
                         <p className="m-auto"><b>Total:9.50 {Data.step_Four_Currency_code}</b></p>
                     </div>
                </div>
            )
        }

    }
}

export default StepsixOne
