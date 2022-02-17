import React from "react";
import styled from "styled-components";
import Particles from "react-tsparticles";
import EdcLogo from "../assets/vector1.svg";
const ParticleLogo = () => {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <>
      <Particles
        id="tsparticles"
        width="200"
        height="200"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#000000",
            },
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover",
          },
          detectRetina: false,
          interactivity: {
            events: {
              onClick: {
                mode: "push",
              },
              onDiv: {
                selectors: "#repulse-div",
                mode: "repulse",
              },
              onHover: {
                enable: true,
                mode: "bubble",
              },
            },
            modes: {
              bubble: {
                distance: 40,
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
              value: "#FFA500",
            },
            links: {
              color: {
                value: "#FFA500",
              },
              distance: 30,
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
                area: 2000,
              },
              value: 100,
            },
            opacity: {
              value: {
                min: 0.5,
                max: 0.8,
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
            scale: 0.5,
            type: "inline",
            url: "https://res.cloudinary.com/hevently-sarang/image/upload/v1645087891/vector1_br63e2.svg",
          },
        }}
      />
    </>
  );
};

export default ParticleLogo;
