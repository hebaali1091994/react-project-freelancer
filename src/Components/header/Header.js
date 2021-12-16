import React, {useContext} from "react";
import Freelancerlogo from "../../public/Image/Freelancerlogo.svg";
import "./Header.css";
import i18next from "i18next";
import '../../i18n'
import { ChatBubbleOutlineOutlined, ExploreOutlined, LocalMallOutlined, NotificationsOutlined, PeopleOutlined } from '@material-ui/icons';

import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { Context } from '../../context/Context';
// import Home from '../Pages/Home';
export default function Header() {
  const {user, dispatch} = useContext(Context);
    const LogoutHandle = () =>{   
    dispatch({type: "LOGOUT"})
    window.location.replace('/');

  }

  const { t, i18n } = useTranslation();
  let lang=localStorage.getItem('lang')||'en'
 const change= (option)=> 
  {
    localStorage.setItem('lang',option.target.value)
    lang=localStorage.getItem('lang')||'en'
   i18next.changeLanguage(lang)
   console.log("lang", lang);
   console.log("option.target.value", option.target.value);
   window.location.reload()

   this.setState({


   })  
  }
 
  return (
    <div className="bg-white" >
    <div className="bg-white">
      
      {user  ? <div>
       <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid p-0">
            <Link to="/Dashbaord"><img src={Freelancerlogo}  className="image-w" /></Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContentheader"
              aria-controls="navbarSupportedContentheader"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContentheader">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">

            <Link className='link ms-4' to="">   <ExploreOutlined></ExploreOutlined>{t("Browse")}  </Link>

            <Link className='link ms-4' to="/DisplayProject">   <ExploreOutlined></ExploreOutlined> Browse </Link>
                </li>
                <li className="nav-item">
                          <Link className='link ms-4' to="">  <LocalMallOutlined></LocalMallOutlined>{t("Manage")}     </Link>

                </li>
                <li className="nav-item">
          <Link className='link ms-4' to=""> <PeopleOutlined></PeopleOutlined>{t("Browse Jobs")}   </Link>

                </li>
                
              </ul>
              
              <div class="d-flex justify-content-center align-items-center">
                   <div className="row mb-2 mx-3">
                  <select className="custom-select Pull-right" onChange={change} value={lang}>
                    <option value="ar">عربي</option>
                    <option value="en">English</option>

                  </select>
                </div>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center align-items-center">
<div  className="icons">
        <NotificationsOutlined  className="icon">

        </NotificationsOutlined>
        <div  className="counter">2</div>
        </div>
        <ChatBubbleOutlineOutlined ></ChatBubbleOutlineOutlined>
        <span className="px-1"></span>
        <Link className="link btn postproject m-1" to="/Post-project">{t("Post a Project")}   </Link>
        <Link className="link btn postproject m-1" to="/Post-project/" > Post a Project </Link>
        <div class="dropdown ">
  <button class="btn dropdown-toggle d-flex" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
  <img
        className="headerImg"
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
      <div className="d-flex flex-column">
      <small>{user.userName}</small>
      <small>0.00 USD</small>
      </div>
  </button>
  <ul class="dropdown-menu " aria-labelledby="dropdownMenu2">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button"><Link className="link" to="/MemberShip">{t("MemberShip")} </Link></button></li>
    <Link  to="" className="link ms-3" onClick={LogoutHandle}>{t("")} Logout</Link>
  </ul>
</div>
        </ul>
        </div>
              
             
              
            
            </div>
          </div>
        </nav>
      </div>
         </div>:
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid p-0">
            <Link to="/"><img src={Freelancerlogo} alt="" className="image-w" /></Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContentheader"
              aria-controls="navbarSupportedContentheader"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContentheader">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link text-dark" aria-current="page" to="">
                    {" "}
                  {t("How It Works")}{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark" to="">
                    {" "}
                    {t("Browse Jobs")}{" "}
                  </Link>
                </li>
              </ul>
              
                <div className="row mb-2 mx-3">
                  <select className="custom-select Pull-right" onChange={change} value={lang}>
                    <option value="ar">عربي</option>
                    <option value="en">English</option>

                  </select>
                </div>
              
              <div className="d-flex">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      className="nav-link text-dark m-1"
                      aria-current="page"
                      exact="true"
                      to="/Login"
                    >
                      {" "}
                      {t("Log In")}{" "}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link text-dark m-1"
                      exact="true"
                      to="/SignUp"
                    >
                      {" "}
                      {t("Sign Up")}{" "}
                    </Link>
                  </li>
                </ul>
                <Link
                  className="btn postproject m-1"
                  exact="true"
                  to="/Post-project"
                >
                  {t("Post Project")}
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
      }
    </div>
  );
}
