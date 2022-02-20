import styled from 'styled-components';
import { useTimer } from '../hooks/useTimer';
import Attendees from '../assets/attendees.png';
import Speaker from '../assets/speaker.png';
import Bulb from '../assets/bulb.png';
import Investors from '../assets/investors.png';

function AboutComponent() {
  let participantCount = useTimer(0, 7000);
  let startupCount = useTimer(0, 30);
  let speakersCount = useTimer(0, 50);
  let eventsCount = useTimer(0, 60);

  return (
    <AboutSection>
      <Header>About Us</Header>

      <About>
        <AboutContent>
          EDC BIT MESRA has always considered social impact as of the greatest
          priorities, and this year is no different. Women have the 50% share of
          the population, but the number is too low when it comes to the number
          of women in entrepreneurship. The fundamental pillar of women's
          empowerment is to make them believe in themselves so that they can
          pursue their goals and bloom with grace in their lives. <br /> <br />{' '}
          This year E-Summit came with the concept of "BELIEVE TO ACHIEVE," and
          we want to help the women entrepreneurs by supporting new businesses
          that may empower the passionate women who may become ideal people for
          society.
        </AboutContent>
        <Infographics>
          <UpperCounter>
            <div>
              <img height={50} width={50} src={Attendees} alt='logo' />
              <Heading>Attendees</Heading>
              <span>{participantCount}+</span>
            </div>
            <div>
              <img height={50} width={50} src={Speaker} alt='logo' />
              <Heading>Speakers</Heading>
              <span>{speakersCount}+</span>
            </div>
          </UpperCounter>
          <LowerCounter>
            <div>
              <img height={50} width={50} src={Bulb} alt='logo' />
              <Heading>Startups</Heading>
              <span>{startupCount}+</span>
            </div>
            <div>
              <img height={50} width={50} src={Investors} alt='logo' />
              <Heading>Events</Heading>
              <span>{eventsCount}+</span>
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
  font-size: 20px;
  gap: 4rem;
`;
const AboutContent = styled.div`
  padding-bottom: 1rem;
  text-align: left;
`;
const Infographics = styled.div`
  font-weight: 600;
`;

const UpperCounter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  gap: 4rem;
`;

const LowerCounter = styled.div`
  display: flex;
  justify-content: space-between;
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
