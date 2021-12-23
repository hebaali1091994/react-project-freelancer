
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from './../context/Context';
import i18next from "i18next";
import '../i18n'
import { useTranslation } from 'react-i18next';
export default function Header() {
  const { t, i18n } = useTranslation();
  let lang = localStorage.getItem('lang') || 'en'
  const change = (option) => {

    localStorage.setItem('lang', option.target.value)
    lang = localStorage.getItem('lang') || 'en'
    i18next.changeLanguage(lang)

    console.log("lang", lang);
    console.log("option.target.value", option.target.value);
  }

  const { user } = useContext(Context);
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
                  <Link to="/" className="link"> Dashboard</Link>
                </li>
                <li className="nav-item">
                  
                  <Link to="/Mylist"  className="nav-link text-white" aria-current="page" href="#"> {t("My Lists")}     </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Projects" className="link" >{t("My Projects")} </Link>
                </li>
                <li className="nav-item">
                  <Link to="/inbox" className="link" > {t("Inbox")}    </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Feedback " className="link"> {t("Feedback")}     </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" aria-current="page" href="#"> {t(" Free Credit")}      </a>
                </li>


              </ul>

              :
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link text-white" aria-current="page" href="#">{t("Find Jobs")}  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" aria-current="page" href="#"> {t("Find Freelancers")}   </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" aria-current="page" href="#">{t("Get Ideas")}    </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" aria-current="page" href="#">{t("Resources")}    </a>
                </li>


              </ul>
            }
          </div>
        </div>
      </nav>

    </div>
  )
}
