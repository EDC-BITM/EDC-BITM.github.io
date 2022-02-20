import styled from "styled-components";
import { useTimer } from "../hooks/useTimer";
import Attendees from '../assets/attendees.png';
import Speaker from '../assets/speaker.png';
import Bulb from '../assets/bulb.png';
import Investors from '../assets/investors.png';

function AboutComponent() {
  let participantCount = useTimer(0, 1000);
  let startupCount = useTimer(0, 500);
  let speakersCount = useTimer(0, 3000);
  let investorsCount = useTimer(0, 10000);

  return (
    <AboutSection>
      <Header>About</Header>

      <About>
        <AboutContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          praesentium facere asperiores, suscipit quae dolore doloribus at
          facilis similique autem. Cumque vel optio atque explicabo dolorum.
          Distinctio laudantium provident, illo, minus error dolorem culpa vitae
          unde esse consectetur voluptatibus modi et odio non accusantium maxime
          nulla necessitatibus laborum quis. Ipsa quia pariatur, qui fugiat,
          sapiente nulla ab mollitia praesentium, tempore dolor optio tempora
          libero. Doloribus, cupiditate. Atque minima illo maiores!
        </AboutContent>
        <Infographics>
          <UpperCounter>
            <div>
              <img height={50} width={50} src={Attendees} alt="logo" />
              <Heading>Attendees</Heading>
              <span>{participantCount}+</span>
            </div>
            <div>
              <img height={50} width={50} src={Speaker} alt="logo" />
              <Heading>Speakers</Heading>
              <span>{speakersCount}+</span>
            </div>
          </UpperCounter>
          <LowerCounter>
            <div>
              <img height={50} width={50} src={Bulb} alt="logo" />
              <Heading>Startups</Heading>
              <span>{startupCount}+</span>
            </div>
            <div>
              <img height={50} width={50} src={Investors} alt="logo" />
              <Heading>Investors</Heading>
              <span>{investorsCount}+</span>
            </div>
          </LowerCounter>
        </Infographics>
      </About>
    </AboutSection>
  );
}
export default AboutComponent;
const About = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
  color: white;
  font-size: 28px;
  gap: 4rem
  ;
`;
const AboutContent = styled.div`
  padding-bottom: 1rem;
text-align: left;`;
const Infographics = styled.div`
  font-weight: 600;
`;

const UpperCounter = styled.div`
  display: flex;
  padding: 2rem;
  gap: 4rem;
`;

const LowerCounter = styled.div`
  display: flex;
  padding: 2rem;
  gap: 4rem;
`;
const Heading = styled.div`
  font-weight: 600;
`;

const Header = styled.div`
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
  font-weight: bold;
`;
const AboutSection = styled.div``;
