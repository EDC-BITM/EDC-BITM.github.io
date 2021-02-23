import React from 'react'
import styled from 'styled-components'
import landingIllustration from '../assets/back.webp'
import EventBox from '../components/EventBox'
import SpeakerBox from '../components/SpeakerBox'
import { Events, Speakers } from "../data"
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
                    MARCH <span color="white">5-14</span>, 2021 • ONLINE
                </LandingDate>
                <LandingButtonContainer>
                    <LandingButton backColor="#fff" fontColor=" #0e0f25">Register</LandingButton>
                    <LandingButton>Join Discord</LandingButton>
                </LandingButtonContainer>
            </LandingSectionContainer>

            <SectionContainer>
                <Heading>Theme</Heading>
                <Paragraph>
                    It is that time of year again! One-week of limitless freedom to
                    play, create, and test out ideas that may go nowhere – or that might
                    just change the world. Following the spirit of Hackathons, this
                    year, we have adapted and evolved, and we bring you our second
                    edition of Hack.  <br /> <br />
                    Learn. Level Up. Lead. Join us on March 2-3, 2021 for this
                    free virtual event. Connect with Gatsby community members from all over the world,
                     advance your skills with free workshops, and hear the latest announcements from
                     the Gatsby team. Claim your spot!
                </Paragraph>
            </SectionContainer>
            <SectionContainer>
                <Heading>Events</Heading>
                <EventsContainer>
                    {Events.map((event) => {
                        return (<EventBox data={event} />)
                    })}
                </EventsContainer>
            </SectionContainer>
            <SectionContainer>
                <Heading>Speakers</Heading>
                <EventsContainer>
                    {
                        Speakers.map((speaker) => {
                            return (<SpeakerBox data={speaker} />)
                        })
                    }
                </EventsContainer>
            </SectionContainer>
            <SectionContainer>
                <Heading>Schedule</Heading>
                <Banner>Will be updated soon...</Banner>
            </SectionContainer>
            <SectionContainer>
                <Heading>Contact</Heading>
                <ContactContainer>
                    <ContactBox>
                        <Name>1234567890</Name>
                        <Desc>Utkarsh Mishra</Desc>
                    </ContactBox>
                    <ContactBox>
                        <Name>1234567890</Name>
                        <Desc>Hrithik Shubham</Desc>
                    </ContactBox>
                    <ContactBox>
                        <Name>1234567890</Name>
                        <Desc>Nagendra Kumar</Desc>
                    </ContactBox>
                    <ContactBox>
                        <Name>president.edc@bitmesra.ac.in</Name>
                        <Desc>Email</Desc>
                    </ContactBox>
                </ContactContainer>
                <SocialContainer>
                    <Social><FaLinkedin /></Social>
                    <Social><FaFacebookSquare /></Social>
                    <Social><RiInstagramLine /></Social>
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


