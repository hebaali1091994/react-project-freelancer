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
    <div class="body">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid p-0">
            <img src={Freelancerlogo} alt="" class="image-w" />
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link text-dark" aria-current="page" to="/howwork">
                    {" "}
                  {t("How It Works")}{" "}
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link text-dark" to="">
                    {" "}
                    {t("Browse Jobs")}{" "}
                  </Link>
                </li>
              </ul>
              
                <div className="row mb-2">
                  <select className="custom-select Pull-right" onChange={change} value={lang}>
                    <option value="ar">عربي</option>
                    <option value="en">English</option>

                  </select>
                </div>
              
              <div class="d-flex">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <Link
                      class="nav-link text-dark m-1"
                      aria-current="page"
                      exact="true"
                      to="/Login"
                    >
                      {" "}
                      {t("Log In")}{" "}
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      class="nav-link text-dark m-1"
                      exact="true"
                      to="/SignUp"
                    >
                      {" "}
                      {t("Sign Up")}{" "}
                    </Link>
                  </li>
                </ul>
                <Link
                  class="btn postproject m-1"
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
