import React from 'react'
import { Link } from "react-router-dom";
import "./Nav2.css";
import Files from './Files';
import App from '../../App';
import { useParams } from 'react-router';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../Components/header/Header';
import Navbar from './../../Components/Navbar'
import { Context } from "../../context/Context";
import { useContext } from 'react';


export default function Nav2({ project }) {
  const { user } = useContext(Context)

  const location = useLocation();

  const path = location.pathname.split('/')[3];

  const [Project, setProject] = useState({})
  useEffect(() => {
    const getProject = async () => {
      const res = await axios.get('/Project/oneproject/' + path, {
        headers: {
          token: user.accesToken
        }
      });
      setProject(res.data);

    }
    getProject();
  }, [path]);




  return (

    <div className='Nav'>
      <Header />
      <Navbar />
      <div className='projectDetails d-flex justify-content-between '>
        <div className='navv'>

          <div className='projectName pl-4 pt-5'><h3 >{Project.ChooseName}</h3></div>
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">




                  <li className="nav-item">
                    <Link className="nav-link link text-white" to={`/DisplayProject/Details/${path}`}>Details</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link link text-white" to={`/DisplayProject/Proposals/${path}`}>Proposals</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link link text-white" to={`/DisplayProject/Files/${path}`}>Files </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link link text-white" to={`/DisplayProject/Tasks/${path}`}>Tasks</Link>

                  </li>
                  <li className="nav-item">
                    <Link className="nav-link dotted" to="#"></Link>
                  </li>
                  <li className="nav-item dropdown ">
                    <Link className="nav-link link text-white " to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="fas fa-ellipsis-h "></i>
                    </Link>
                    <ul className="dropdown-menu dooted" aria-labelledby="navbarDropdown">
                      <li><Link className="dropdown-item" to="#">Edit Project</Link></li>
                      <li><Link className="dropdown-item" to="../post-project/Postproject.jsx">Repost Project</Link></li>

                    </ul>
                  </li>

                </ul>

              </div>
            </div>
          </nav>

        </div>

        <div className='status my-5'>
          <span >{Project.state ? Project.state : "Pending"} </span>
        </div>
      </div>
    </div>
  )
}
