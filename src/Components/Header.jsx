import React from "react";
import Freelancerlogo from "../public/Image/Freelancerlogo.svg";
import "./Header.css";
import i18next from "i18next";
import '../i18n'
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

// import Home from '../Pages/Home';
export default function Header() {
  const { t, i18n } = useTranslation();
  let lang=localStorage.getItem('lang')||'en'
 const change= (option)=>
  {

    localStorage.setItem('lang',option.target.value)
     lang=localStorage.getItem('lang')||'en'
    i18next.changeLanguage(lang)
    // window.location.reload()
    console.log("lang", lang);
    console.log("option.target.value", option.target.value);
  }
  return (
    <div className="body">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid p-0">
            <img src={Freelancerlogo} alt="" className="image-w" />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link text-dark" aria-current="page" to="/howwork">
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
              
                <div className="row mb-3 mx-3 mt-3">
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
    </div>
  );
}
