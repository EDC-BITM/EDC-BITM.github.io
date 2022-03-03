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
        </HeadingWrapper>
        <Logo>
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            width="100%"
            height="100%"
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
  gap: 40px;
`;
const Heading = styled.h1`
  color: #fff;
  font-size: 4rem;
  font-family: 'Poppins';
  letter-spacing: 2px;
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
text-align:right;
margin-right:4rem;
font-family: 'Poppins';
text-transform: uppercase;
font-style: italic;
letter-spacing: 4px;
`