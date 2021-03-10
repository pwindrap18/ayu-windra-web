import React, { useState } from 'react';
import { HiArrowNarrowDown } from 'react-icons/hi';
import { Button } from './ButtonExternal';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';

import Video from '../videos/bg.mp4';
import CountDown from './CountDown';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <Fade duration={3000}>
          <HeroH1>Ayu & Windra</HeroH1>
        </Fade>
        <Fade bottom delay={500}>
          <HeroP2>Intimate Wedding</HeroP2>
          <HeroP>03 . 04 . 2021</HeroP>
        </Fade>
        <Fade bottom delay={1000}>
          <HeroP>
            <CountDown />
          </HeroP>
        </Fade>
        <Fade bottom delay={1500}>
          <HeroBtnWrapper>
            <Button
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              <a
                href="https://www.instagram.com/ayu_windra_wedding/"
                target="_blank"
                rel="noreferrer"
              >
                Live Stream
              </a>
            </Button>
          </HeroBtnWrapper>
        </Fade>
      </HeroContent>
      <ArrowIcon>
        <Fade bottom delay={2000}>
          <ScrollText>
            <p>scroll</p>
            <p>down</p>
          </ScrollText>
          <HiArrowNarrowDown />
        </Fade>
      </ArrowIcon>
    </HeroContainer>
  );
};

export default HeroSection;

const ArrowIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    margin-top: 550px;
    z-index: 3;
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 2rem;
  }
`;

const ScrollText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;
  font-size: 1rem;
`;

const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  margin-top: -80px;
  position: relative;
  z-index: 1;
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent);
    z-index: 2;
  }
`;

const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroH1 = styled.h1`
  color: #fff;
  font-size: clamp(2.5rem, 6vw, 4rem);
  margin-bottom: 1rem;
  letter-spacing: 3px;
  padding: 0 0rem;
  font-family: 'Sacramento';
`;

const HeroP = styled.p`
  color: #fff;
  font-size: clamp(1rem, 2vw, 2rem);
  margin-bottom: 1rem;
  font-family: 'Redressed';
`;
const HeroP2 = styled.p`
  color: #fff;
  font-size: clamp(1rem, 1.5vw, 1.5rem);
  margin-bottom: 1rem;
  font-weight: 400;
  font-family: 'Redressed';
`;

const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin-bottom: 100px;
  }
`;
