
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import landingIllustration from '../assets/back.webp';
import EventBox from '../components/EventBox';
import SponsorBox from '../components/SponsorBox';
import SpeakerBox from '../components/SpeakerBox';
import SummitEvents from '../components/SummitEvents';
import { newEvents,Events, Speakers, sponsors, speakerSchedule } from '../data';
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import { RiInstagramLine } from 'react-icons/ri';
import logo from '../assets/logo.png';
import edc from '../assets/edc.png';
import newLogo from '../assets/newLogo.png';
import sponsorCollagePic from '../assets/sponsorCollage.jpg';
import About from '../components/About';
import Carousel from '../components/carousel/Carousel';
import Carousel2 from '../components/carousel2/Carousel2'
import { NewSponsors,TitleSponsor,copreSponsor,associationSponsor,investSponsor,mediaSponsor,gameSponsor,learnSponosor,startSponsor } from '../data';

const LandingPage = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShow(true);
      }
    });
  }, []);
  return (
    <Container>
      <LandingSectionContainer>
        <LandingHeading>
          Believe to <Span>Achieve</Span>
        </LandingHeading>
        <LandingDescription>
          EDC, BIT Mesra is back with its latest edition of east-India's largest{' '}
          <Span>E Summit</Span>.
        </LandingDescription>
        <LandingDate>MARCH 11-13, 2022 • ONLINE</LandingDate>
        <LandingButtonContainer>
          <LandingButton href='https://dare2compete.com/festival/e-summit22-birla-institute-of-technology-bit-mesra-ranchi-20883' backColor='#fff' fontColor=' #0e0f25'>
            Register Now
          </LandingButton>
          <LandingButton href='https://discord.gg/paQM5tsfyb'>
            Join Discord
          </LandingButton>
        </LandingButtonContainer>
      </LandingSectionContainer>

      <SectionContainer>{show && <About />}</SectionContainer>
      <SectionContainer>
        <Heading>Event Timeline</Heading>
        <EventsContainer id="events">
          {newEvents.map((event, index ) => {
            return (
              <SummitEvents data={{ ...event, reverse: index % 2 === 1 }} />
            );
          })}
        </EventsContainer>
      </SectionContainer>
      <SectionContainer id='speakers'>
        <Heading>Previous Speakers</Heading>
        {/* <Banner><LandingButton href="https://www.runtheworld.today/app/invitation/20012" backColor="#fff" fontColor=" #0e0f25">Register</LandingButton></Banner> */}
        <EventsContainer>
          <Carousel/>
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
      {/* <SectionContainer id="events"> */}
      {/* <Heading>Events</Heading> */}
      {/* <Banner><LandingButton href="" backColor="#fff" fontColor=" #0e0f25">Registeration opening soon</LandingButton></Banner> */}
      {/* <EventsContainer> */}
      {/* {Events.map((event) => {
                        return (<EventBox data={event} />)
                    })} */}
      {/* </EventsContainer> */}
      {/* </SectionContainer> */}
      <SectionContainer id='sponsors'>
        <Heading>Sponsors</Heading>
        {/* <Image src={sponsorCollagePic}></Image> */}
        {/* {NewSponsors.length+TitleSponsor.length+copreSponsor.length+associationSponsor.length+investSponsor.length+mediaSponsor.length+gameSponsor.length+learnSponosor.length+startSponsor.length} */}
        <SponsorHeading>Title Sponsor</SponsorHeading>
                <EventsContainer>
                    {
                        TitleSponsor.map((sponsor) => {
                            return (<SponsorBox data={sponsor} />)
                        })
                    }
                </EventsContainer>
                <SponsorHeading>Co-Presented By</SponsorHeading>
                <EventsContainer>
                    {
                        copreSponsor.map((sponsor) => {
                            return (<SponsorBox data={sponsor} />)
                        })
                    }
                </EventsContainer>
                <SponsorHeading>In Association with</SponsorHeading>
                <EventsContainer>
                    {
                        associationSponsor.map((sponsor) => {
                            return (<SponsorBox data={sponsor} />)
                        })
                    }
                </EventsContainer>
                <SponsorHeading>Investment Partners</SponsorHeading>
                <EventsContainer>
                    {
                        investSponsor.map((sponsor) => {
                            return (<SponsorBox data={sponsor} />)
                        })
                    }
                </EventsContainer>
                <SponsorHeading>Media Partners</SponsorHeading>
                <EventsContainer>
                    {
                        mediaSponsor.map((sponsor) => {
                            return (<SponsorBox data={sponsor} />)
                        })
                    }
                </EventsContainer>
                <SponsorHeading>Gaming Partners</SponsorHeading>
                <EventsContainer>
                    {
                        gameSponsor.map((sponsor) => {
                            return (<SponsorBox data={sponsor} />)
                        })
                    }
                </EventsContainer>
                <SponsorHeading>Learning Partners</SponsorHeading>
                <EventsContainer>
                    {
                        learnSponosor.map((sponsor) => {
                            return (<SponsorBox data={sponsor} />)
                        })
                    }
                </EventsContainer>
                <SponsorHeading>Startup growth partner</SponsorHeading>
                <EventsContainer>
                    {
                        startSponsor.map((sponsor) => {
                            return (<SponsorBox data={sponsor} />)
                        })
                    }
                </EventsContainer>
        <SponsorHeading>All Sponsors</SponsorHeading>
                <EventsContainer>
                    {
                        NewSponsors.map((sponsor) => {
                            return (<SponsorBox data={sponsor} />)
                        })
                    }
                </EventsContainer>
      </SectionContainer>
      <SectionContainer>
            <Heading>Speaker insights</Heading>
            <EventsContainer>
                <Carousel2 />
            </EventsContainer>
            
            </SectionContainer>
      <SectionContainer>
        <Heading>Contact</Heading>
        <ContactContainer>
          <ContactBox>
            <Name>+91-9334228385</Name>
            <Desc>Sharwadi Shatank</Desc>
          </ContactBox>
          <ContactBox>
            <Name>+91-8058140858</Name>
            <Desc>Ankur Gupta</Desc>
          </ContactBox>
          <ContactBox>
            <Name>president.edc@bitmesra.ac.in</Name>
            <Desc>Email</Desc>
          </ContactBox>
        </ContactContainer>
        <SocialContainer>
          <Social href='https://www.linkedin.com/company/edcbitm/'>
            <FaLinkedin />
          </Social>
          <Social href='https://www.facebook.com/edcbitmesra/'>
            <FaFacebookSquare />
          </Social>
          <Social href='https://www.instagram.com/edcbitmesra/'>
            <RiInstagramLine />
          </Social>
        </SocialContainer>
        <LogoContainer>
          <Logo src={newLogo} />
          <Logo src={edc} />
        </LogoContainer>
      </SectionContainer>
    </Container>
  );
};

export default LandingPage;

const BlueHillBox = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.5);
  margin: 10px 0px;
  text-decoration: none;
`;

const BlueHillAuthor = styled.img`
  width: 120px;
  border-radius: 10px;
`;

const BlueHillImage = styled.img`
  width: 250px;
`;

const ImpSponsorBox = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 600px;
  @media screen and (max-width: 600px) {
    width: 300px;
  }
`;

const Container = styled.div`
  background-size: 100%;
  background-image: url(${landingIllustration});
  padding: 50px 150px;

  @media screen and (max-width: 800px) {
    padding: 50px 20px;
  }
`;
const LandingSectionContainer = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const LandingHeading = styled.h1`
  color: #fff;
  font-size: 126px;
  text-align: center;
  padding: 50px 0px 10px 0px;

  @media screen and (max-width: 600px) {
    text-align: left;
    font-size: 86px;
  }
`;

const Span = styled.span`
  background-image: linear-gradient(
    to right,
    #f76c6c,
    #e8637c,
    #d45f8a,
    #bc5e93,
    #a25e97
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const LandingDescription = styled.p`
  color: #fff;
  font-size: 24px;
  width: 600px;
  text-align: center;
  padding-bottom: 20px;
  @media screen and (max-width: 850px) {
    width: 400px;
  }
  @media screen and (max-width: 600px) {
    text-align: left;
    width: 100%;
    font-size: 18px;
  }
`;

const LandingDate = styled.h3`
  background-image: linear-gradient(
    to right,
    #f76c6c,
    #e8637c,
    #d45f8a,
    #bc5e93,
    #a25e97
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  font-size: 32px;
  border-top: 0.2px solid rgba(255, 255, 255, 0.5);
  padding: 10px 0px;
  @media screen and (max-width: 600px) {
    text-align: left;
    width: 100%;
  }
`;
const LandingButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding-top: 10px;

  @media screen and (max-width: 600px) {
    justify-content: left;
    padding-top: 0px;
  }
`;

const LandingButton = styled.a`
  color: ${(props) => {
    if (props.fontColor) {
      return props.fontColor;
    } else {
      return '#fff';
    }
  }};
  background-color: ${(props) => {
    if (props.backColor) {
      return props.backColor;
    } else {
      return '#0e0f25';
    }
  }};
  padding: 10px 20px;
  margin: 10px 10px 10px 10px;
  border: 1px solid #fff;
  border-radius: 5px;
  font-size: 20px;
  transition: background-color 0.4s;
  text-decoration: none;

  &:hover {
    color: ${(props) => {
      if (props.fontColor) {
        return '#fff';
      } else {
        return '#0e0f25';
      }
    }};
    background-color: ${(props) => {
      if (props.backColor) {
        return '#0e0f25';
      } else {
        return '#fff';
      }
    }};
    transition: background-color 0.4s;
  }
  @media screen and (max-width: 600px) {
    margin: 10px 10px 10px 0px;
    font-size: 16px;
  }
`;

const SectionContainer = styled.div`
  padding: 50px 0px 100px 0px;
  @media screen and (max-width: 800px) {
    padding: 50px 0px 50px 0px;
    text-align: left;
    border-bottom: 0.2px solid rgba(255, 255, 255, 0.5);
  }
  text-align: center;
`;

const Heading = styled.h1`
  display: block;
  background-image: linear-gradient(
    to right,
    #f76c6c,
    #e8637c,
    #d45f8a,
    #bc5e93,
    #a25e97
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 56px;
  padding-bottom: 50px;
`;

const SponsorHeading = styled.h1`
  display: block;
   background-image: linear-gradient(to right, #f76c6c, #e8637c, #d45f8a, #bc5e93, #a25e97);
    -webkit-background-clip: text;
    background-clip:text;
    -webkit-text-fill-color: transparent;
  color: white;
  font-size: 24px;
  text-align: center;
`;

const Paragraph = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 18px;
  line-height: 28px;
  width: 600px;
  padding-top: 20px;
  margin: 0px auto;

  @media screen and (max-width: 1000px) {
    width: 500px;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const EventsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border-radius: 20px;
  padding: ${(props) => {
    if (props.back) {
      return '20px';
    } else {
      return '20px 0px 30px 0px';
    }
  }};
  background-color: ${(props) => {
    if (props.back) {
      return '#151629';
    } else {
      return 'rgba(0,0,0,0)';
    }
  }};
`;

const ImpSponsorContainer = styled.a`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 10px;
  padding-bottom: 50px;
`;

const Banner = styled.div`
  color: white;
  font-weight: normal;
  font-size: 24px;
  padding-top: 50px;
`;

const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 100px;
  flex-wrap: wrap;
  padding-top: 50px;
  @media screen and (max-width: 800px) {
    padding: 0px 0px;
  }
`;

const ContactBox = styled.div`
  padding: 20px;
  @media screen and (max-width: 800px) {
    padding: 20px 5px;
  }
`;

const Name = styled.h3`
  font-size: 32px;
  color: #fff;
  font-weight: lighter;
  @media screen and (max-width: 800px) {
    font-size: 24px;
  }
`;

const Desc = styled.h5`
  background-image: linear-gradient(
    to right,
    #f76c6c,
    #e8637c,
    #d45f8a,
    #bc5e93,
    #a25e97
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 18px;
  @media screen and (max-width: 800px) {
    font-size: 14px;
  }
`;
const SocialContainer = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 600px) {
    justify-content: left;
  }
`;

const Social = styled.a`
  font-size: 46px;
  padding: 0px 20px;
  color: #fff;

  @media screen and (max-width: 600px) {
    padding: 0px 20px 0px 0px;
  }
`;
const LogoContainer = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Logo = styled.img`
  width: 400px;
  display: block;
  @media screen and (max-width: 600px) {
    width: 300px;
  }
`;
const SummitEventsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border-radius: 20px;
  padding: ${(props) => {
    if (props.back) {
      return '50px';
    } else {
      return '50px 0px 0px 0px';
    }
  }};
  background-color: ${(props) => {
    if (props.back) {
      return '#151629';
    } else {
      return 'rgba(0,0,0,0)';
    }
  }};
`;
