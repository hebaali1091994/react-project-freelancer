import React from 'react'
import projectIcon from '../../../public/imgPostproject/projectIcon.svg';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import {StepsixTwo} from './StepsixTwo';
import StepsixOne from './StepsixOne';


const Stepsix = ({ Data, setData }) => {
    console.log(Data.pay)
    console.log(Data.type_of_project)
    // --------------------------------------------Data.type_of_project----------------------------------------------------//
    if(Data.pay!==""){
     return(
         <StepsixOne 
         Data={Data}
        setData={setData}
         />
    )
    }
    // --------------------------------------------Data.Day----------------------------------------------------//

    else if(Data.Day!==""){
        return (
        <StepsixTwo 
        Data={Data}
        setData={setData} 
        />
        )
    }

}

export default Stepsix

