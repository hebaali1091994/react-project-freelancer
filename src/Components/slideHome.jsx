import React from 'react'
import styled from 'styled-components'
import i18next from "i18next";
import '../i18n'
import { useTranslation } from 'react-i18next';

const SlideHome=()=>{
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
        <Container>
            <video
            autoPlay
            loop
            muted
            style={{
                position:'absolute',
                width:'100%',
                left:'50%',
                top:'50%',
                height: '800px',
                objectFit:"cover",
                transform:"translate(-50% ,-50%)",
                zIndex:"-1"
            }}
            >
                <source src="/videos/freelancer.mp4" />
            </video>
            <LeftSlide>
                <SlideText>
                    <h1>{t("Hire the best")}</h1>
                    <h1>{t("freelancers for any job,")}</h1>
                    <h1>{t("online.")}</h1>
                    <p>{t("Millions of people use freelancer.com to turn their ideas into reality.")}</p>
                </SlideText>
                <SlideBottons>
                    <button>{t("Hire a Freelancer")}</button>
                    <button>{t("Earn Money Freelancing")}</button>
                </SlideBottons>
            </LeftSlide>
            
        </Container>
    )
}


const Container=styled.div`

`

const LeftSlide=styled.div`
z-index: 11;
color: white;
max-width: 700px;
transform: translate(-50% -50%);
margin-top: 30vh;
align-items: left;
margin-left: 16vh;
`

const SlideText=styled.div`
    h1{
        font-size: 48px;
    }
    p{
        font-size: 20px;
    }

`

const SlideBottons=styled.div`
    button:first-child{
        padding: 13px 22px;
        color:#f7f7f7;
        font-size: 20px;
        background-color:#e40b5e;
        border: 0;
        &:hover{
            background-color:#eb4081
        }
    }
    button:nth-child(2){
        padding: 13px 30px;
        color:#f7f7f7;
        font-size: 20px;
        background-color:transparent;
        border: 1px solid ;
        margin-left: 19px;
    }
    &:hover{
            background-color:rgba(0,0,0,0.08);
        }
`


export default SlideHome;
