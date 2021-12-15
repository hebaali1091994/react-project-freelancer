import React from 'react'
import i18next from "i18next";
import '../i18n'
import { useTranslation } from 'react-i18next';
export default function Header() {
  const { t, i18n } = useTranslation();
  let lang=localStorage.getItem('lang')||'en'
 const change= (option)=> 
  {

    localStorage.setItem('lang',option.target.value)
     lang=localStorage.getItem('lang')||'en'
    i18next.changeLanguage(lang)
    
    console.log("lang", lang);
    console.log("option.target.value", option.target.value);
  }
 
    return (
  <div class="container-fluid p-0">


<nav class="navbar navbar-expand-lg navbar-dark bg-dark text-white">
  <div class="container">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link text-white" aria-current="page" href="#"> {t("Find Jobs")} </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" aria-current="page" href="#"> {t("Find Freelancers")}  </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" aria-current="page" href="#"> {t("Get Ideas")}   </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" aria-current="page" href="#"> {t("Resources")}   </a>
        </li>


      </ul>

    </div>
  </div>
</nav>

        </div>
    )
}
