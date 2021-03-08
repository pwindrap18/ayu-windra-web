import React from 'react';
import { GiLinkedRings } from 'react-icons/gi';
import styled from 'styled-components';

import RingBg from '../images/ring.jpg';

const Cover = ({ setPlaying, setOpened, opened }) => {
  const open = () => {
    setPlaying(true);
    setOpened(true);
  };

  return (
    <>
      <Container opened={opened}>
        <CardContainer>
          <Card style={{ color: '#fff' }}>
            <AnCon>
              <GiLinkedRings />
              <Announce>Wedding Announcement</Announce>
            </AnCon>
            <CardText>A&W</CardText>
            <CardBtn onClick={open}>Click Me</CardBtn>
          </Card>
        </CardContainer>
      </Container>
    </>
  );
};

export default Cover;

const Container = styled.div`
  display: ${({ opened }) => (opened ? 'none' : 'block')};
  opacity: ${({ opened }) => (opened ? '0' : '100%')};
  min-height: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 98;
  overflow: hidden;
  background-color: #fcd1d1;
`;

const CardContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 400px;

  @media screen and (max-width: 900px) {
    height: 80%;
    margin: 0 30px;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 35%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    url(${RingBg}) no-repeat center;
  background-size: cover;
  height: 70%;
  width: 100%;
  z-index: 98;
  margin: 0 auto;
  padding: 20px 20px;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

const AnCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Announce = styled.p`
  margin-top: 10px;
  font-size: 12px;
  color: #fff;
  font-family: 'Redressed';
`;

const CardText = styled.span`
  font-family: 'Sacramento';
  font-size: 3rem;
  color: #fff;
  margin-bottom: 140px;
`;

const CardBtn = styled.button`
  background: #303030;
  padding: 12px 20px;
  border: none;
  border-radius: 30px;
  color: #fff;
  cursor: pointer;
  outline: none;
  margin-bottom: 30px;
  font-size: 16px;
  font-family: 'Redressed';

  :focus {
    outline: none;
  }
`;
