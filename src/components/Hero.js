import React, { useState } from 'react';
import Video from '../videos/bg.mp4';
import { Button } from './ButtonExternal';
import styled from 'styled-components';
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
        <HeroH1>Ayu & Windra</HeroH1>
        <HeroP2>Intimate Wedding</HeroP2>
        <HeroP>03 . 04 . 2021</HeroP>
        <HeroP>
          <CountDown />
        </HeroP>
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
            <a href="/">Live Stream</a>
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;

export const HeroContainer = styled.div`
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

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
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
  font-size: clamp(2rem, 6vw, 4rem);
  margin-bottom: 1.2rem;
  letter-spacing: 3px;
  padding: 0 1rem;
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
`;
