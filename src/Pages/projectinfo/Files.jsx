import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer'

import './file.css'
import Nav2 from './Nav2'

export default function Files() {


        return(
    
            <div className='parent '>
                    <Nav2/>
                <div className="container">
            
                <div>
                    <div className="row ">
                        <div className="col-md-8 bg-white mt-2">
                            <div className='content m-2  w-100 h-50 p-relative'>
                                <div className=" d-flex justify-content-between">
                                    <h3>File</h3>
                                    <label class="custom-file-upload p-2 btn btn-info text-break" style={{color:"#fff",fontWeight:"600",background:"rgb(0,127,237)"}}><input type="file"/> Upload File</label>
                                   
                                </div>
                                <hr className='hhrr' />
                                <div className='brower'>
                                    <div className='btnn d-flex justify-content-center align-items-center '>
                                       <div>
                                       <i class="fas fa-upload pr-2"></i>Drag & Drop your files here or <label class="custom-file-upload"><input type="file"/> browse</label>


                                       </div>
                                    </div>
                                </div>
                                                               
                            </div>
                        </div>

                        <div className="col-md-4 mt-2">
                            <div className='content bg-white w-100 py-3 px-2'>
                                <h3 className='filter py-2 mb-4 d-block'>Filter</h3>
                                <div className="about-item">
                                    <ul className="list-unstyled footer-list-item">
                                        
                                       
                                        <li className="inner ">
                                            <div className='rr'>
                                            <button className='form-control hhhh text-start'>
                                                <i class="fas fa-file footer-list-item-icon"></i>
                                                <span className=' '>All Files (0)
                                                </span>
                                                </button>
                                            </div>    
                                        </li>
                                        
                                        <li className="inner ">
                                             <div className='rr'>
                                             <button className='form-control hhhh text-start'>
                                                <i className="far fa-folder fa-lg footer-list-item-icon"></i>
                                                <span>Documents (0)
                                                </span>
                                                </button>
                                            </div>    
                                        </li>
                                        
                                        <li className="inner ">
                                             <div className='rr'>
                                             <button className='form-control hhhh text-start'>
                                                <i className="far fa-file-image fa-lg footer-list-item-icon"></i>
                                                <span>Images (0)
                                                </span>
                                                </button>
                                            </div>
                                           
                                        </li>
                                        
                                        <li className="inner ">
                                            <div >
           
                                                <button className='form-control hhhh text-start'>
                                                    <i className="fas fa-video fa-lg footer-list-item-icon"></i>
                                                    <span>Video (0)
                                                    </span>
                                                </button>
                                               
                                            </div>
                                        </li>
                                    </ul>
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

