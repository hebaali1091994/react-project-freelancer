import React from 'react'
import './Tell.css'
import axios from 'axios';
import  { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const Tell = ({props}) => {
   const [Skills, setSkills] = useState([])
   const [i, setI] = useState([])
   const [h, setH] = useState([])

const sellect=(e)=>{
setI(e)
}
const sellectSkill=(s)=>{

setH([...h,s])
}
  useEffect(() => {
    
    const fetchSkills = async ()=>{
      const res = await axios.get("/Category/");
      setSkills(res.data)
    }
    fetchSkills();
  },[]);

    return (
        <div className="Tell">
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
     {Skills.map((c,index)=>(
              <div  className="div ">
          <li onClick={()=>sellect(c.subCate)} className="sidebarListItem btn btn-primary mb-3 ">{c.categoryName} </li>
          </div>
            ))} 
                           </div>
                    <div class="item col">
                        <h3>
                             {Skills.map(c=>(
             
          <ul className="sidebarulstItem">
              {i.map(s=>(<li className='btn btn-secondary mb-3 d-block w-50'  onClick={()=>sellectSkill(s)}>{s}</li>))} </ul>
         ))} 

                        </h3>
                        <hr/>
                    </div>
                    <div class="item col">
                        <h3>1 out of 20 skills selected</h3>
                        <h3>{h.map((k)=><li className='btn btn-success mb-3 d-block w-50'>{k}</li>)}</h3>
                        <hr/>
                    </div>
                </div>
                <button>Next</button>
            </div>
        </div>
    </div>
        </div>
    )
}

export default Tell
