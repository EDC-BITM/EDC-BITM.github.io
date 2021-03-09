import React from 'react'
import styled from 'styled-components'
import landingIllustration from '../assets/back.webp'
import EventBox from '../components/EventBox'
import SponsorBox from '../components/SponsorBox'
import SpeakerBox from '../components/SpeakerBox'
import { Events, Speakers, sponsors } from "../data"
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa"
import { RiInstagramLine } from 'react-icons/ri'
import logo from '../assets/logo.png'
import edc from '../assets/edc.png'

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
                    MARCH 12-14, 2021 • ONLINE
                </LandingDate>
                <LandingButtonContainer>
                    <LandingButton href="https://dare2compete.com/f/e-summit21-entrepreneurship-development-cell-bit-mesra-10091" backColor="#fff" fontColor=" #0e0f25">Register</LandingButton>
                    <LandingButton href="https://discord.gg/paQM5tsfyb">Join Discord</LandingButton>
                </LandingButtonContainer>
            </LandingSectionContainer>

            <SectionContainer>
                <Heading>Theme</Heading>
                <Paragraph>
                    Unprecedented times call for  unshakeable roots and an unstinted enthusiasm. Entrepreneurship is the paradigm that never goes down, never fails in the face if adversity, or so the pandemic has shown to us.
                    It is time to embrace the unknown realms, the unsaid virtuality and the new developments. <br /><br />
                    We , the Entrepreneurship Development Cell at BIT, Mesra are there to bring forth an experience of changing times for you. With our mega annual fest E Summit'21 and its dynamic theme of 'A New Norm', we are all set to face the tough times with our confidence and spirits. So get ready and hop on for the experience of a lifetime. Be the hustle, turn the tables with creativity and dynamism.
                    Explore the boundless horizons of the trader in you.  Innovate, evaluate, analyze and inspire, as we believe in being the change.
                </Paragraph>
            </SectionContainer>
            <SectionContainer id="speakers">
                <Heading>Speakers</Heading>
                <EventsContainer>
                    {
                        Speakers.map((speaker) => {
                            return (<SpeakerBox data={speaker} />)
                        })
                    }
                </EventsContainer>
                {/* <Banner>Will be updated soon...</Banner>  */}
            </SectionContainer>
            <SectionContainer id="events">
                <Heading>Events</Heading>
                <EventsContainer>
                    {Events.map((event) => {
                        return (<EventBox data={event} />)
                    })}
                </EventsContainer>
            </SectionContainer>
            <SectionContainer id="schedule">
                <Heading>Sponsors</Heading>
                <EventsContainer>
                    {
                        sponsors.map((sponsor) => {
                            return (<SponsorBox data={sponsor} />)
                        })
                    }
                </EventsContainer>
            </SectionContainer>
            <SectionContainer>
                <Heading>Contact</Heading>
                <ContactContainer>
                    <ContactBox>
                        <Name>+91-8674960047</Name>
                        <Desc>Utkarsh Mishra</Desc>
                    </ContactBox>
                    <ContactBox>
                        <Name>+91-9123499293</Name>
                        <Desc>Hrithik Shubham</Desc>
                    </ContactBox>
                    <ContactBox>
                        <Name>+91-9082499159</Name>
                        <Desc>Kshitij Yash</Desc>
                    </ContactBox>
                    <ContactBox>
                        <Name>president.edc@bitmesra.ac.in</Name>
                        <Desc>Email</Desc>
                    </ContactBox>
                </ContactContainer>
                <SocialContainer>
                    <Social href="https://www.linkedin.com/company/edcbitm/"><FaLinkedin /></Social>
                    <Social href="https://www.facebook.com/edcbitmesra/"><FaFacebookSquare /></Social>
                    <Social href="https://www.instagram.com/edcbitmesra/"><RiInstagramLine /></Social>
                </SocialContainer>
                <LogoContainer>
                    <Logo src={logo} />
                    <Logo src={edc} />
                </LogoContainer>
            </SectionContainer>
        </Container>
    )
}

export default LandingPage

const Container = styled.div`
    background-size:100%;
    background-image:url(${landingIllustration});
    padding:50px 150px;

    @media screen and (max-width:800px){
        padding:50px 20px;
    }
`
const LandingSectionContainer = styled.div`
    min-height:80vh;
    display:flex;
    align-items:center;
    flex-direction:column;
`

const LandingHeading = styled.h1`
     color:#fff;
     font-size:126px;
     text-align:center;
     padding:50px 0px 10px 0px;

     @media screen and (max-width:600px){
        text-align:left;
        font-size:86px;
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
    font-weight:bold;
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
    color:${props => { if (props.fontColor) { return props.fontColor } else { return "#fff" } }};
    background-color:${props => { if (props.backColor) { return props.backColor } else { return "#0e0f25" } }};
    padding:10px 20px;
    margin:10px 10px 10px 10px;
    border:1px solid #fff;
    border-radius:5px;
    font-size:20px;
    transition:background-color 0.4s;
    text-decoration:none;
    
    &:hover{
        color:${props => { if (props.fontColor) { return "#fff" } else { return "#0e0f25" } }};
        background-color:${props => { if (props.backColor) { return "#0e0f25" } else { return "#fff" } }};
        transition:background-color 0.4s;
    }
    @media screen and (max-width:600px){
        margin:10px 10px 10px 0px;
        font-size:16px;
    }
`



const SectionContainer = styled.div`
    padding:50px 0px 100px 0px;
    @media screen and (max-width:800px){
        padding:50px 0px 50px 0px;
        text-align:left;
        border-bottom:0.2px solid rgba(255,255,255,0.5);
    }
    text-align:center;

`

const Heading = styled.h1`
    display:inline;
    background-image: linear-gradient(to right, #f76c6c, #e8637c, #d45f8a, #bc5e93, #a25e97);
    -webkit-background-clip: text;
    background-clip:text;
    -webkit-text-fill-color: transparent;
    font-size:56px;
`

const Paragraph = styled.p`
    color:rgba(255,255,255,0.8);
    font-size:18px;
    line-height:28px;
    width:600px;
    padding-top:20px;
    margin:0px auto;

    @media screen and (max-width:1000px){
        width:500px;
    }
    @media screen and (max-width:600px){
        width:100%;
    }

`

const EventsContainer = styled.div`
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    padding-top:50px;
`

const Banner = styled.h3`
    color:white;
    font-weight:normal;
    font-size:24px;
    padding-top:50px;
`

const ContactContainer = styled.div`
    display:flex;
    justify-content:space-between;
    padding:0px 100px;
    flex-wrap:wrap;
    padding-top:50px;
    @media screen and (max-width:800px){
        padding:0px 0px;
    }
`

const ContactBox = styled.div`
    padding:20px;
    @media screen and (max-width:800px){
        padding:20px 5px;
    }
`

const Name = styled.h3`
    font-size:32px;
    color:#fff;
    font-weight:lighter;
    @media screen and (max-width:800px){
        font-size:24px;
    }

`

const Desc = styled.h5`
    background-image: linear-gradient(to right, #f76c6c, #e8637c, #d45f8a, #bc5e93, #a25e97);
    -webkit-background-clip: text;
    background-clip:text;
    -webkit-text-fill-color: transparent;
    font-size:18px;
    @media screen and (max-width:800px){
        font-size:14px;
    }
`
const SocialContainer = styled.div`
    padding-top:50px;
    display:flex;
    justify-content:center;
    @media screen and (max-width:600px){
        justify-content:left;
    }
`

const Social = styled.a`
    font-size:46px;
    padding:0px 20px;
    color:#fff;

    @media screen and (max-width:600px){
        padding:0px 20px 0px 0px;
    }
`
const LogoContainer = styled.div`
    padding-top:50px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`
const Logo = styled.img`
    width:400px;
    display:block;
    @media screen and (max-width:600px){
        width:300px;
    }
`


