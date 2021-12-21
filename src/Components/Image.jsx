import React from 'react'
import './Images.css'
import { Link } from 'react-router-dom';
import i18next from "i18next";
import '../i18n'
import { useTranslation } from 'react-i18next';
const   Image=()=> {
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
        <div>
            <section className="freelancer d-flex ">
        <div className="container-fluid">
            <div className="row">
                <div className="free-left col ">
                    <div className="content-left">
                        <h2>{t("Freelancer API.")}</h2>
                        <h3>{t("50 million professionals on demand")}</h3>
                        <p>{t("Why hire people when you can simply integrate our talented cloud workforce instead?")}</p>
                        <Link to="/Documentation"   role="button" className=" btnnimg px-4 py-2">{t("View Documentation")}</Link>
                    </div>
                </div>
                <div className="free-right col">
                    <div className="content-right">
                        <h2>{t("Freelancer Enterprise.")}</h2>
                        <h3>{t("Company budget? Get more done for less")}</h3>
                        <p>{t("Use our workforce of 50 million to help your integrate our business achieve more instead?")}</p>
     
                    </div>  <Link to="/Enterprise"   role="button" className=" btnnimg px-4 py-2">{t(" Contact Us")}</Link>

                </div>
            </div>
        </div>
    </section>

        </div>
    )
}

export default Image