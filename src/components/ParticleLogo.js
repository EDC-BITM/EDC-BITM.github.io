import React from "react";
import styled from "styled-components";
import Particles from "react-tsparticles";
import SponsorLogo from "../assets/angelNew.png"
const ParticleLogo = () => {
  const particlesInit = (main) => {
    console.log(main);
  };
  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <>
      <Container>
        <HeadingWrapper>
          <Sponsor>
            <img height='60px' width='180px' src={SponsorLogo} alt="angel-one logo" />
          </Sponsor>
          <Heading><div className="heading">E-SUMMIT'22</div></Heading>
          <Tagline><div className="tagline">Believe To Achieve</div></Tagline>
          <LandingDate>MARCH 11-13, 2022 • ONLINE</LandingDate>
        <LandingButtonContainer>
          <LandingButton href='https://dare2compete.com/festival/e-summit22-birla-institute-of-technology-bit-mesra-ranchi-20883' backColor='#fff' fontColor=' #0e0f25'>
            Register Now
          </LandingButton>
          <LandingButton href='https://discord.gg/paQM5tsfyb'>
            Join Discord
          </LandingButton>
        </LandingButtonContainer>
        </HeadingWrapper>
        <Logo>
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            width="300px"
            height="400px"
            className="particle-class"
            canvasClassName="tsparticles-canvas-el"
            options={{
              fullScreen: {
                zIndex: 100,
                enable: false,
              },
              detectRetina: false,
              interactivity: {
                events: {
                  onHover: {
                    enable: true,
                    mode: "bubble",
                  },
                },
                modes: {
                  bubble: {
                    distance: 50,
                    duration: 2,
                    opacity: 8,
                    size: 6,
                  },
                  grab: {
                    distance: 400,
                  },
                  slow: {
                    factor: 1,
                    radius: 0,
                  },
                },
              },
              particles: {
                color: {
                  value: "#FF8000",
                },
                links: {
                  color: {
                    value: "#FF8000",
                  },
                  distance: 40,
                  enable: true,
                  opacity: 0.4,
                },
                move: {
                  attract: {
                    rotate: {
                      x: 600,
                      y: 1200,
                    },
                  },
                  enable: true,
                  outModes: {
                    default: "bounce",
                    bottom: "bounce",
                    left: "bounce",
                    right: "bounce",
                    top: "bounce",
                  },
                  speed: 0.1,
                },
                number: {
                  density: {
                    area:2000,
                  },
                  value: 200,
                },
                opacity: {
                  value: {
                    min: 0.05,
                    max: 0.4,
                  },
                  animation: {
                    enable: true,
                    minimumValue: 0.05,
                  },
                },
                size: {
                  random: {
                    enable: true,
                  },
                  value: 1,
                  animation: {
                    speed: 40,
                    minimumValue: 0.1,
                  },
                },
              },
              polygon: {
                draw: {
                  enable: true,
                  stroke: {
                    color: {
                      value: "rgba(255,255,255,0.2)",
                    },
                    width: 0.5,
                    opacity: 0.2,
                  },
                },
                enable: true,
                inline: {
                  arrangement: "equidistant",
                },
                move: {
                  radius: 10,
                  type: "path",
                },
                scale: 0.8,
                type: "inline",
                url: "https://res.cloudinary.com/hevently-sarang/image/upload/v1645524153/vector1_djyr4t.svg",
              },
            }}
          />
        </Logo>
      </Container>
    </>
  );
};

export default ParticleLogo;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 200px;
  @media screen and (max-width: 600px) {
    gap: 20px;
  }
`;
const Heading = styled.h1`
  color: #fff;
  font-size: 6rem;
  font-family: 'Poppins';
  letter-spacing: 2px;
  @media screen and (max-width: 600px) {
    text-align: left;
    font-size: 3rem;
  }
`;


const Logo = styled.div`
  color: #fff;
`;

const HeadingWrapper = styled.div`
  
`;

const Sponsor = styled.div`
`;

const Tagline=styled.h6`
color:#fff;
font-size:1.2rem;
text-align:center;
margin-right:4rem;
font-family: 'Poppins';
text-transform: uppercase;
font-style: italic;
letter-spacing: 4px;
`


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
  font-size: 2rem;
  border-top: 0.2px solid rgba(255, 255, 255, 0.5);
  margin-top: 20px;
  padding: 10px 0px;
  text-align: center;
  @media screen and (max-width: 600px) {
    text-align: left;
    width: 100%;
    font-size: 1.5rem;
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