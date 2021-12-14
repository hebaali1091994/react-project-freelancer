import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from './../context/Context';

export default function Header() {
  const {user} = useContext(Context);
    return (
  <div className="container-fluid p-0">
<nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white">
  <div className="container">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {user ? 
      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center ">
        <li className="nav-item">
          <Link to="/Dashbaord" className="link"> Dashboard</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" aria-current="page" href="#">   My Lists   </a>
        </li>
        <li className="nav-item">
          <Link to="/Projects" className="link" > My Projects</Link>
        </li>
        <li className="nav-item">
         <Link to="/inbox" className="link" >  Inbox   </Link>
        </li>
        <li className="nav-item">
        <Link to="/Feedback " className="link">    Feedback  </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" aria-current="page" href="#">    Free Credit    </a>
        </li>


      </ul> 
      :
      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link text-white" aria-current="page" href="#"> Find Jobs </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" aria-current="page" href="#">  Find Freelancers  </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" aria-current="page" href="#">  Get Ideas  </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" aria-current="page" href="#">  Resources  </a>
        </li>


      </ul>
}
    </div>
  </div>
</nav>

        </div>
    )
}
