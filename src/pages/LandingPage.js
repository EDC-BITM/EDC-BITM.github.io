import React from 'react'
import styled from 'styled-components'
import landingIllustration from '../assets/back.webp'

const LandingPage = () => {
    return (
        <Container>
            <LandingSectionContainer>
                <LandingHeading>
                    The New <Span>Normal</Span>
                </LandingHeading>
                <LandingDescription>
                    EDC, BIT Mesra is back with its latest edition of east-India's largest <Span>E Summit</Span>.
                </LandingDescription>
                <LandingDate>
                    6th - 10th March'21
                </LandingDate>
                <LandingButtonContainer>
                    <LandingButton>Register</LandingButton>
                    <LandingButton>Join Discord</LandingButton>
                </LandingButtonContainer>
            </LandingSectionContainer>
        </Container>
    )
}

export default LandingPage

const Container = styled.div`
    background-size:100%;
    background-repeat:no-repeat;
    background-image:url(${landingIllustration});
    padding:50px 150px;

    @media screen and (max-width:600px){
        padding:50px 20px;
    }
`
const LandingSectionContainer = styled.div`
    min-height:70vh;
    display:flex;
    align-items:center;
    flex-direction:column;
`

const LandingHeading = styled.h1`
     color:#fff;
     font-size:86px;
     text-align:center;
     padding:50px 0px 10px 0px;

     @media screen and (max-width:600px){
        text-align:left;
    }

`

const Span = styled.span`
    background-image: linear-gradient(to right, #f76c6c, #e8637c, #d45f8a, #bc5e93, #a25e97);
    -webkit-background-clip: text;
    background-clip:text;
    -webkit-text-fill-color: transparent;
`
const LandingDescription = styled.p`
    color:#fff;
    font-size:24px;
    width:600px;
    text-align:center;
    padding-bottom:20px;
    @media screen and (max-width:850px){
        width:400px;
    }
    @media screen and (max-width:600px){
        text-align:left;
        width:100%;
        font-size:18px;
    }

`

const LandingDate = styled.h3`
    background-image: linear-gradient(to right, #f76c6c, #e8637c, #d45f8a, #bc5e93, #a25e97);
    -webkit-background-clip: text;
    background-clip:text;
    -webkit-text-fill-color: transparent;
    font-weight:normal;
    font-size:32px;
    border-top: 0.2px solid rgba(255,255,255,0.5);
    padding:10px 0px;
    @media screen and (max-width:600px){
        text-align:left;
        width:100%;
    }
`
const LandingButtonContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    width:100%;
    padding-top:10px;

    @media screen and (max-width:600px){
        justify-content:left;
        padding-top:0px;
    }

`

const LandingButton = styled.a`
    color:white;
    padding:5px 20px;
    margin:10px 10px 10px 10px;
    border:1px solid #fff;
    border-radius:5px;
    font-size:20px;
    @media screen and (max-width:600px){
        margin:10px 10px 10px 0px;
        font-size:16px;
    }
`



