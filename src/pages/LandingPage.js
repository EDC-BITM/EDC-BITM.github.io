import React from 'react'
import styled from 'styled-components'
import landingIllustration from '../assets/back.webp'
import EventBox from '../components/EventBox'
import SponsorBox from '../components/SponsorBox'
import SpeakerBox from '../components/SpeakerBox'
import { Events, Speakers, sponsors, speakerSchedule } from "../data"
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa"
import { RiInstagramLine } from 'react-icons/ri'
import logo from '../assets/logo.png'
import edc from '../assets/edc.png'
import angel from '../assets/sponsors/angel.png'
import floxus from '../assets/sponsors/floxus.png'
import ibHubs from '../assets/sponsors/ibHubs.png'
import learningWhileTravelling from '../assets/sponsors/Learning_While_Travelling_TM_png.png'
import tie from '../assets/sponsors/tie.png'
import iic from '../assets/sponsors/iic.jpeg'
import abhinav from '../assets/blueHills/Abhinav Srivastav/Abhinav Srivastav.jpg'
import abhinavCover from '../assets/blueHills/Abhinav Srivastav/Book Cover.png'
import dharani from '../assets/blueHills/Dharani Deiveegan/Dharani Deiveegan.jpg'
import dharaniCover from '../assets/blueHills/Dharani Deiveegan/Dharani Deiveegan Book.png'
import jose from '../assets/blueHills/Jose Varghese/Jose Varghese.jpg'
import joseCover from '../assets/blueHills/Jose Varghese/Book Cover.png'
import nisha from '../assets/blueHills/Nisha Anuka/Nisha Bora.jpg'
import nishaCover from '../assets/blueHills/Nisha Anuka/Book Cover.png'
import rohini from '../assets/blueHills/Rohini Vohra/Rohini Vohra.JPG'
import rohiniCover from '../assets/blueHills/Rohini Vohra/Book Cover.png'
import sandeep from '../assets/blueHills/Sandeep Sinha/Sandeep Sinha.jpg'
import sandeepCover from '../assets/blueHills/Sandeep Sinha/Book Cover.png'
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
                    <LandingButton href="https://www.runtheworld.today/app/invitation/20012" backColor="#fff" fontColor=" #0e0f25">Register</LandingButton>
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
                <Banner><LandingButton href="https://www.runtheworld.today/app/invitation/20012" backColor="#fff" fontColor=" #0e0f25">Register</LandingButton></Banner>
                <EventsContainer>
                    {
                        Speakers.map((speaker) => {
                            return (<SpeakerBox data={speaker} />)
                        })
                    }
                </EventsContainer>
                {/* <Banner>Will be updated soon...</Banner>  */}
            </SectionContainer>
            {/* <SectionContainer>
                <Heading>Schedule</Heading>
                <Banner><LandingButton href="https://www.runtheworld.today/app/invitation/20012" backColor="#fff" fontColor=" #0e0f25">Register</LandingButton></Banner>
                <EventsContainer back>
                    {
                        speakerSchedule.map((speaker) => {
                            return (<ScheduleBox data={speaker} />)
                        })
                    }
                </EventsContainer>
            </SectionContainer> */}
            <SectionContainer id="events">
                <Heading>Events</Heading>
                <Banner><LandingButton href="https://dare2compete.com/f/e-summit21-entrepreneurship-development-cell-bit-mesra-10091" backColor="#fff" fontColor=" #0e0f25">Register</LandingButton></Banner>

                <EventsContainer>
                    {Events.map((event) => {
                        return (<EventBox data={event} />)
                    })}
                </EventsContainer>
            </SectionContainer>
            <SectionContainer>
                <Heading>Blue Hill Publications Authors & E-Books</Heading>
                <EventsContainer>
                    <BlueHillBox href="https://www.facebook.com/abhinav.srivastav.3557">
                        <BlueHillAuthor src={abhinav} />
                        <BlueHillImage src={abhinavCover} />
                    </BlueHillBox>
                    <BlueHillBox href="https://instagram.com/dharanideiveegan">
                        <BlueHillAuthor src={dharani} />
                        <BlueHillImage src={dharaniCover} />
                    </BlueHillBox>
                    <BlueHillBox href="mailto:jv.geologist@gmail.com">
                        <BlueHillAuthor src={jose} />
                        <BlueHillImage src={joseCover} />
                    </BlueHillBox>
                    <BlueHillBox href="https://www.instagram.com/qaynaat.t/">
                        <BlueHillAuthor src={nisha} />
                        <BlueHillImage src={nishaCover} />
                    </BlueHillBox>
                    <BlueHillBox href="mailto:rohiniflc2000@yahoo.com">
                        <BlueHillAuthor src={rohini} />
                        <BlueHillImage src={rohiniCover} />
                    </BlueHillBox>
                    <BlueHillBox href="https://instagram.com/sandy11oct72">
                        <BlueHillAuthor src={sandeep} />
                        <BlueHillImage src={sandeepCover} />
                    </BlueHillBox>
                </EventsContainer>
            </SectionContainer>
            <SectionContainer id="sponsors">
                <Heading>Sponsors</Heading>
                <SponsorHeading>Title Sponsor</SponsorHeading>
                <ImpSponsorContainer>
                    <ImpSponsorBox href='https://www.angelbroking.com/'>
                        <ImageContainer>
                            <Image src={angel} />
                        </ImageContainer>
                    </ImpSponsorBox>
                </ImpSponsorContainer>
                <SponsorHeading>Co-Powered By</SponsorHeading>
                <ImpSponsorContainer>
                    <ImpSponsorBox href="https://www.floxus.tech/">
                        <ImageContainer>
                            <Image src={floxus} />
                        </ImageContainer>
                    </ImpSponsorBox>

                    <ImpSponsorBox href="https://ibhubs.co/">
                        <ImageContainer>
                            <Image src={ibHubs} />
                        </ImageContainer>
                    </ImpSponsorBox>
                </ImpSponsorContainer>

                <SponsorHeading>In Association with</SponsorHeading>
                <ImpSponsorContainer>
                    <ImpSponsorBox href="https://kolkata.tie.org/">
                        <ImageContainer>
                            <Image src={tie} />
                        </ImageContainer>
                    </ImpSponsorBox>

                    <ImpSponsorBox href="https://learningwhiletravelling.com/">
                        <ImageContainer>
                            <Image src={learningWhileTravelling} />
                        </ImageContainer>
                    </ImpSponsorBox>

                    <ImpSponsorBox href="https://www.mic.gov.in/innovation-council/iic">
                        <ImageContainer>
                            <Image src={iic} />
                        </ImageContainer>
                    </ImpSponsorBox>
                </ImpSponsorContainer>
                <SponsorHeading>All Sponsors</SponsorHeading>
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

const BlueHillBox = styled.a`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-bottom:0.5px solid rgba(255,255,255,0.5);
    margin:10px 0px;
    text-decoration:none;
`

const BlueHillAuthor = styled.img`
    width:120px;
    border-radius:10px;
`

const BlueHillImage = styled.img`
    width:250px;
`

const ImpSponsorBox = styled.a`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin:10px;
`

const ImageContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:200px;
    height:200px;
    background-color:white;
    border-radius:10px;
    overflow:hidden;
`

const Image = styled.img`
    width:200px;
    border-radius:5px;
    padding:10px;
`


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
    display:block;
    background-image: linear-gradient(to right, #f76c6c, #e8637c, #d45f8a, #bc5e93, #a25e97);
    -webkit-background-clip: text;
    background-clip:text;
    -webkit-text-fill-color: transparent;
    font-size:56px;
    padding-bottom:50px;
`

const SponsorHeading = styled.h1`
    display:block;
    /* background-image: linear-gradient(to right, #f76c6c, #e8637c, #d45f8a, #bc5e93, #a25e97);
    -webkit-background-clip: text;
    background-clip:text;
    -webkit-text-fill-color: transparent; */
    color:white;
    font-size:24px;
    text-align:center;
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
    border-radius:20px;
    padding:${props => { if (props.back) { return '50px' } else { return "50px 0px 0px 0px" } }};
    background-color:${props => { if (props.back) { return '#151629' } else { return "rgba(0,0,0,0)" } }};
`

const ImpSponsorContainer = styled.a`
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    padding-top:10px;
    padding-bottom:50px;
`

const Banner = styled.div`
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


