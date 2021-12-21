import { getByDisplayValue } from '@testing-library/react';
import React from 'react'
import { Link } from 'react-router-dom'
import './tasks.css'
import Nav2 from './Nav2';
import Footer from '../../Components/Footer'
export default function Tasks (){
  
// const ContestOne = ({ Data, setData }) => {

//   const closeTask=()=>{
//          var x=   document.getElementById("adding")
      
//         if(x.style.display === 'none'){
//             x.style.display = 'block';
//            }
//            else {
//             x.style.display = 'none';
//            } 
//     }
// }
        
        return (
            <div className="parent ">
                 <Nav2/>
                <div className="container">
                    <div>
                        <div className="row ">
                            <div className='col-md-8'>
                             <div className='row'>

                            <div className="col-md-12 bg-white mt-2 ">
                                <div className="content m-2 w-100 p-relative">
                                    <div className=" d-flex justify-content-between ">
                                        <h5>To-do</h5>
                                        <button className="btn btn-primary bttnw" >Create new task</button>

                                    </div>
                                    <hr className="bar" />
                                    <div className="bar1">
                                        <div className="add d-flex justify-content-center align-items-center ">
                                            <div>
                                                <h6 class=""> Click to create new task</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-12 bg-white mt-4 mb-3 bar2">
                                <div className="content m-2 w-100 h-10 p-relative">
                                    <div className=" d-flex justify-content-between ">
                                        <h6>Completed</h6>
                                    </div>
                                    <hr className="barr" />
                                    <div className="barr1">
                                        <div className="add2 d-flex justify-content-center align-items-center ">
                                            You don't have any completed tasks yet.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>   
                            </div>
                            <div className="col-md-4 mt-2 " id='adding'>
                                <div className="content bg-white w-100 py-3 px-3">
                                    <h6>Name <span>(required)</span></h6>
                                    <div className='d-flex align-items-center mb-4'><input className='form-control mr-2' placeholder='Enter Title'></input><i class="fas fa-times" ></i></div>
                                    <h6>Due date</h6>
                                   <input type='date'  className='form-control mr-2 mb-4' placeholder='Enter Title'></input>
                                   <h6>Details</h6>
                                   <textarea   className='form-control mr-2 mb-4' placeholder="Describe what the task is about..."></textarea>
                                   <h6>Status</h6>
                                   <select class="form-select mb-4" aria-label="Default select example">
                                        <option selected>To Do</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                    <div className='d-flex justify-content-end'>
                                            <button type="button" class="btn btn-primary   ">Save</button>
                                    </div>
                                    

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              <Footer/>
            </div>
        )
    }

 