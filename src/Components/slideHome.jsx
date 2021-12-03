import React from 'react'
import styled from 'styled-components'
const SlideHome=()=>{
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
                    <h1>Hire the best</h1>
                    <h1>freelancers for any job,</h1>
                    <h1>online.</h1>
                    <p>Millions of people use freelancer.com to turn their ideas into reality.</p>
                </SlideText>
                <SlideBottons>
                    <button>Hire a Freelancer</button>
                    <button>Earn Money Freelancing</button>
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
